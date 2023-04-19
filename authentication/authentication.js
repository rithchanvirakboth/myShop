const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Authentication failed' });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: 'Authentication failed' });
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
}

module.exports = authentication;