const User = require("../model/User");
const bcrypt = require("bcrypt");
const sendMail = require("./sendMail");
const jwt = require("jsonwebtoken");

const UserController = {
  register: async (req, res) => {
    try {
      const { firstname, lastname, username, email, password, confirmPassword, birthDate } = req.body;

      if (!firstname || !lastname || !username || !email || !password || !confirmPassword || !birthDate) {
        return res.status(400).json({ msg: "Please fill in all fields" });
      }

      if (password.length < 6) {
        return res.status(400).json({ msg: "Password must be at least 6 characters long" });
      }

      if (password !== confirmPassword) {
        return res.status(400).json({ msg: "Passwords do not match" });
      }

      if(!validateEmail(email)) {
        return res.status(400).json({ msg: "Please enter a valid email" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = {
        firstname,
        lastname,
        username,
        email,
        password: hashedPassword,
        confirmPassword: hashedPassword,
        birthDate,
      }

      const activation_token = createActivationToken(newUser);
      const CLIENT_URL = process.env.CLIENT_URL;

      const url = `${CLIENT_URL}/user/activate/${activation_token}`;
      sendMail(email, url, "Verify your email address");
      
      res.json({ msg: "Register Success! Please activate your email to start." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },

  activateEmail: async (req, res) => {
    try {
      const { activation_token } = req.body;
      const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET);

      const { firstname, lastname, username, email, password, confirmPassword, birthDate } = user;

      const checkUser = User.findOne({ username});
      if (checkUser) {
        return res.status(400).json({ msg: "This username already exists" });
      }

      const checkEmail = User.findOne({ email });
      if (checkEmail) {
        return res.status(400).json({ msg: "This email already exists" });
      }

      const newUser = new User({
        firstname,
        lastname,
        username,
        email,
        password,
        confirmPassword,
        birthDate,
      });

      await newUser.save();

      res.json({ msg: "Account has been activated!" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ msg: "Please fill in all fields" });
      }

      if(!validateEmail(email)) {
        return res.status(400).json({ msg: "Please enter a valid email" });
      }

      // check email
      const user = User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "This email does not exist" });
      }

      // check password
      const passwordChecker = await bcrypt.compare(password, user.password);
      if (!passwordChecker) {
        return res.status(400).json({ msg: "Incorrect password" });
      }

      // if login success, create access token and refresh token
      const refresh_token = createRefreshToken({ id: user._id });
      res.cookie("refreshtoken", refresh_token, {
        httpOnly: true,
        path: "/user/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      res.json({ msg: "Login success!" });
    }catch(err) {
      res.status(500).json({ msg: err.message });
    }
  },

  logout: async (req, res) => {
  },

  refreshToken: async (req, res) => {

  },


};

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function createActivationToken(payload) {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, { expiresIn: "5m" });
}

function createRefreshToken(payload) {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}

module.exports = UserController;
