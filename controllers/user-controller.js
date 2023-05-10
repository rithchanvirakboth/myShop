const User = require("../model/User");
const bcrypt = require("bcrypt");
const sendMail = require("./sendMail");
const jwt = require("jsonwebtoken");

const UserController = {
  register: async (req, res) => {
    try {
      const { firstname, lastname, username, email, password, confirmPassword, birthDate } = req.body;

      if (!firstname || !lastname || !username || !email || !password || !confirmPassword || !birthDate) {
        return res.status(400).json({ erroMessage: "Please fill in all fields" });
      }

      if (password.length < 6) {
        return res.status(400).json({ erroMessage: "Password must be at least 6 characters long" });
      }

      if (password !== confirmPassword) {
        return res.status(400).json({ erroMessage: "Passwords do not match" });
      }

      if(!validateEmail(email)) {
        return res.status(400).json({ erroMessage: "Please enter a valid email" });
      } 
      const check = await User.findOne({ email });
      if (check) return res.status(400).json({ erroMessage: "This email already exists." });

      const usernameCheck = await User.findOne({ username });
      if (usernameCheck) return res.status(400).json({ erroMessage: "This username already exists." });


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
      
      res.json({ successMessage: "Register Success! Please activate your email to start." });
    } catch (err) {
      res.status(500).json({ erroMessage: err.message });
    }
  },

  activateEmail: async (req, res) => {
    try {
      const {activation_token} = req.body;
      const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET);

      const { firstname, lastname, username, email, password, confirmPassword, birthDate } = user;

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

      res.json({ successMessage: "Account has been activated!" });
    } catch (err) {
      res.status(500).json({ errorMessage: "account already activated!" });
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

      const user = await User.findOne({email});

      if (!user) {
        return res.status(400).json({ msg: "This email does not exist" })
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Incorrect credencials" });
      }

      if(user.isActive !== true) {
        await User.findOneAndUpdate({email}, {isActive: true});
      }
        
      const refresh_token = createRefreshToken({ id: user._id });
      res.cookie("refresh_token", refresh_token, {
        httpOnly: true,
        path: "/user/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });


      res.json({ msg: "Login success!" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },

  getAccessToken: async (req, res) => {
    try {
      const refreshToken = req.cookies.refresh_token;

      if (!refreshToken) {
        return res.status(400).json({ msg: "Please login now!" });
      }

      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(400).json({ msg: "Please login now!" });
        }

        const accessToken = createAccessToken({ id: user.id });
        res.json({ accessToken });
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },

  logout: async (req, res) => {
    try {
      res.clearCookie("refresh_token", { path: "/user/refresh_token" });
      return res.json({ msg: "Logged out" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },

  forgetPassword: async (req, res) => {
    try {
      const { email } = req.body;

      if(!validateEmail(email)) {
        return res.status(400).json({ msg: "Please enter a valid email" });
      }
      
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "This email does not exist" });
      }

      const access_token = createAccessToken({ id: user._id });
      const CLIENT_URL = process.env.CLIENT_URL;

      const url = `${CLIENT_URL}/user/reset/${access_token}`;
      sendMail(email, url, "Reset your password");
      res.json({ msg: "Re-send the password, please check your email." });
    }catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },

  resetPassword: async (req, res) => {
    try {
      const { 
        password,
        confirmPassword,
      } = req.body;

      if (password.length < 6) {
        return res.status(400).json({ msg: "Password must be at least 6 characters." });
      }

      if (password !== confirmPassword) {
        return res.status(400).json({ msg: "Password does not match." });
      }

      const passwordHash = await bcrypt.hash(password, 12);

      await User.findOneAndUpdate({ _id: req.user.id }, {
        password: passwordHash,
        confirmPassword: passwordHash,
      });
      res.json({ msg: "Password successfully changed!" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },

  getUserInfo: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password").select("-confirmPassword");
      res.json(user);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },

  updateUserInfor: async (req, res) => {
    try {
      const { 
        firstname,
        lastname,
        username,
        email,
        birthDate,
        bioDesc,
        profilePic,
        address,
        city,
        country,
        zipcode,
        phoneNumber
      } = req.body;

      const usernameCheck = await User.findOne({ username });
      if (usernameCheck) return res.status(400).json({ msg: "This username already exists." });

      await User.findOneAndUpdate({ _id: req.user.id }, {
        firstname,
        lastname,
        username,
        email,
        birthDate,
        bioDesc,
        profilePic,
        address,
        city,
        country,
        zipcode,
        phoneNumber
      });

      res.json({ msg: "Update Success!" });
    } catch {
      res.status(500).json({ msg: err.message });
    }
  },

  deactivateAccount: async (req, res) => {
    try {
      const { isActive } = req.body;
      
      await User.findOneAndUpdate({ _id: req.user.id }, {
        isActive
      });

      res.clearCookie("refresh_token", { path: "/user/refresh_token" });
      res.json({ msg: "Account has been deactivated!" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },

  deleteAccount: async (req, res) => {
    try {
      await User.findOneAndDelete({ _id: req.user.id });

      res.clearCookie("refresh_token", { path: "/user/refresh_token" });
      res.json({ msg: "Account has been deleted!" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
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
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "15m" });
}

function createAccessToken(payload) {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}

module.exports = UserController;