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

  DeleteUser: async (req, res) => {

  }

} 

module.exports = adminController;