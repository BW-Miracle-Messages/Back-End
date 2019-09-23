const router = require('express').Router();

const db = require('./volunteer-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
    db.find()
        .then(volunteers => {
            res.status(200).json({ 
                volunteers, loggedInVolunteer: req.volunteer.volunteer_name 
            });
        })
        .catch(err => res.status(401).json({
            message: "This is restricted data. Please sign in to continue.", 
            error: err
        }));
});


module.exports = router;
