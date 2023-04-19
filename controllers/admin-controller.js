const User = require("../model/User");

const adminController = {
  getAllUserInfor: async (req, res) => {
    try{ 
      const users = await User.find().select("-password").select("-confirmPassword");
      res.json(users);
    } catch (err) {
      res.status(500).json({msg: err.message});
    }
  },

  UpdateRole: async (req, res) => {
    try {
      const { role } = req.body;

      await User.findOneAndUpdate({_id: req.params.id}, {
        role
      });

      res.json({msg: "Update role successfully"});
    } catch (err) {
      res.status(500).json({msg: err.message});
    }
  },

  UpdateUserInfor: async (req, res) => {
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

      await User.findOneAndUpdate({_id: req.params.id}, {
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

      res.json({msg: `Update user ${username} successfully`});
    } 
    catch (err) {
      res.status(500).json({msg: err.message});
    }
  },

  DeleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);

      res.json({msg: "Delete user successfully"});
    } catch (err) {
      res.status(500).json({msg: err.message});
    }
  },

  showActiveAccount: async (req, res) => {
    try {
      const users = await User.find({isActive: true}).select("-password").select("-confirmPassword");
      res.json(users);
    } catch (err) {
      res.status(500).json({msg: err.message});
    }
  }

} 

module.exports = adminController;