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
  

} 

module.exports = adminController;