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
      const {activation_token} = req.body;
      const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET);

      const { firstname, lastname, username, email, password, confirmPassword, birthDate } = user;

      const check = await User.findOne({ email });
      if (check) return res.status(400).json({ msg: "This email already exists." });

      const usernameCheck = await User.findOne({ username });
      if (usernameCheck) return res.status(400).json({ msg: "This username already exists." });

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
