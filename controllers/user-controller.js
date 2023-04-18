const User = require("../model/User");
const bcrypt = require("bcrypt");

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

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

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
      sendMail 
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

module.exports = UserController;
