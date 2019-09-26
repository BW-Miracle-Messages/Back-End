const router = require('express').Router();
const volunteerDb = require('./volunteer-model.js');
const casesDb = require('../cases/cases-model.js');
const restricted = require('../../auth/restricted-middleware');

router.get('/', restricted, (req, res) => {
    volunteerDb.find()
        .then(volunteers => {
            res.status(200).json({ 
                volunteers, loggedInVolunteer: req.volunteer.volunteer_name 
            });
        })
        .catch(err => {
            res.status(401).json({
                message: "This is restricted data. Please sign in to continue.", 
                error: err
            })
        });
});

//UPDATE volunteer  -- working and tested
router.put('/:id', validatePut, (req, res) => {
    const volunteerInfo = req.body
    const volunteerId = req.params.id
    // console.log(volunteerInfo)
    // console.log(volunteerId)

    volunteerDb.updateVolunteer(volunteerId, volunteerInfo)
    .then(cases => {
        res.status(200).json(cases)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})


//DELETE a volunteer -- good
router.delete('/:id', (req, res) => {
    const volunteerId = req.params.id
    // console.log(volunteerId)

    volunteerDb.removeVolunteer(volunteerId)
    .then(cases => {
        res.status(201).end()
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

//GET volunteer cases -- good 
router.get('/:id/cases', (req, res) => {
    const id = req.params.id
    // console.log(id)

    volunteerDb.getCases(id)
    .then(cases => {
        res.status(200).json(cases)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

//POST add a family member to a specific case -- good 
router.post('/case/:id/family', (req, res) => {
    const family = req.body; 
    // console.log(caseId)

    casesDb.addFamilyMember(family)
        .then(member => {
            res.status(201).json({
                member 
            })
        })
        .catch(err => {
            res.status(404).json({
                message: 'Could not create family member for this case', 
                error: err 
            })
        })
})


//GET all family members for a specific case -- good
router.get('/case/:id/family', (req, res) => {
    const caseId = req.params.id
    // console.log(caseId)

    casesDb.getFamilyMembers(caseId)
        .then(members => {
            res.status(200).json({
                members 
            })
        })
        .catch(err => {
            res.status(404).json({
                message: 'Could not find family members for that case id', 
                error: err 
            })
        })
})

function validatePut(req, res, next) {
    const put = req.body; 

    if (put && put.volunteer_name) {
        console.log('Validating updates');
    } else if (put) {
        res.status(400).json({ 
            error: "Missing required fields.",
        })
    } else {
        res.status(400).json({ 
            error: "Missing post data.",
        })
    }

    next()
};



module.exports = router;
