const jwt = require('jsonwebtoken');

const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
      if (error) {
        // unsuccessful 
        res.status(401).json({ message: 'Please sign in with the correct credentials.' });
      } else {
        // successful 
        req.volunteer = {  volunteer: decodedToken.volunteer_name };
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'Please provide credentials.' });
  }
};