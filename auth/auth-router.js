const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../routes/volunteers/volunteer-model');
const secrets = require('../config/secrets.js'); 

router.post('/register', (req, res) => {

  // get object 
  let volunteer = req.body;

  // make password hash 
  const hash = bcrypt.hashSync(volunteer.password, 10); 

  // set password 
  volunteer.password = hash;

  db.add(volunteer)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json({
        message: 'Could not add volunteer.',
        error: error 
      });
    });
});

router.post('/login', (req, res) => {
  let { volunteer_name, password } = req.body;

  db.findBy({ volunteer_name })
    .first()
    .then(volunteer => {
      if (volunteer && bcrypt.compareSync(password, volunteer.password)) {
        // create volunteer token 
        const token = generateToken(volunteer);

        // send back the token 
        res.status(200).json({ token });
      } else {

        // incorrect password 
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      // no user with that volunteer_name 
      res.status(500).json({
        message: 'An error has occured with the server',
        error: error
      });
    });
});

function generateToken(volunteer) {
  const payload = {
    volunteer: volunteer.volunteer_name,
  };
  const options = {
    expiresIn: '1d',
  };
  // bring in the secret from the secrets file
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
