const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../routes/volunteers/volunteer-model');
const secrets = require('../config/secrets.js'); 

router.post('/register', (req, res) => {
  let volunteer = req.body;
  const hash = bcrypt.hashSync(volunteer.password, 10); // 2 ^ n
  volunteer.password = hash;

  db.add(volunteer)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { volunteer_name , password } = req.body;

  db.findBy({ volunteer_name })
    .first()
    .then(volunteer => {
      if (volunteer && bcrypt.compareSync(password, volunteer.password)) {
        const token = generateToken(volunteer);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
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
