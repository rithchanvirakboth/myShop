const jwt = require('jsonwebtoken');
const User = require('../model/User');

const authentication = async(req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Authentication failed' });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: 'Authentication failed' });
      req.user = user;
    });
    const user = await User.findOne({ _id: req.user.id });

    if(user.role !== 1) {
      return res.status(401).json({ message: 'You are not an admin' });
    }
    
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
}

module.exports = authentication;