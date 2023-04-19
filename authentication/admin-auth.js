const User = require('../model/User');

const adminAuth = async(req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user.id });

    if (user.role !== 1) {
      return res.status(400).json({ message: 'You have no permission to access this page!' });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed!' });
  }
}

module.exports = adminAuth;