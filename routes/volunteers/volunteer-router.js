const router = require('express').Router();

const db = require('./volunteer-model.js');
const restricted = require('../../auth/restricted-middleware');

router.get('/', restricted, (req, res) => {
    console.log('hello')
    db.find()
        .then(volunteers => {
            res.status(200).json({ 
                volunteers, loggedInVolunteer: req.volunteer.volunteer_name 
            });
        })
        .catch(err => 
            console.log(err)
        //     res.status(401).json({
            
        //     message: "This is restricted data. Please sign in to continue.", 
        //     error: err
         );

});

//UPDATE volunteer  -- working and tested
router.put('/:id', (req, res) => {
    const volunteerInfo = req.body
    const volunteerId = req.params.id
        console.log(volunteerInfo)
        console.log(volunteerId)

    db.updateVolunteer(volunteerId, volunteerInfo)
    .then(cases => {
        res.status(200).json(cases)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})


//DELETE a volunteer --
router.delete('/:id', (req, res) => {
    const volunteerId = req.params.id
    console.log(volunteerId)

    db.removeVolunteer(volunteerId)
    .then(cases => {
        res.status(201).end()
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})





module.exports = router;
