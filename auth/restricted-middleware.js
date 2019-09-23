const jwt = require('jsonwebtoken');

const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        // token exists 
        jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
            if (error) {
                // token expired or invalid  
                res.status(401).json({ 
                    message: 'Please provide the correct credentials to view this information.',
                    error: error
                });

            } else {
                // correct token provided  
                req.volunteer = { volunteer: decodedToken.volunteer_name };
                next();
            }
        });
    } else {
        res.status(400).json({ message: 'Please sign in to view this information.' });
    }
};