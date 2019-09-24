const express = require('express')
const db = require('./cases-model')
const router = express.Router();


//GET all cases -- tested & working
router.get('/', (req, res) => {
    db.getCases()
    .then(cases => {
        res.status(200).json(cases)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

//GET case by id -- tested & working 
router.get('/:id', (req, res) => {
    const id = req.params.id
    // console.log(id)

    db.findById(id)
    .then(cases => {
        res.status(200).json(cases)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})



//POST new case  tested & working--- volunteer_id must reference a volunteer that exists in db 
router.post('/', (req, res) => {
    const newCase = req.body
    // console.log(newCase)

    db.addCase(newCase)
    .then(cases => {
        res.status(201).json(cases)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

//UPDATE new case  -- tested  and working 
router.put('/:id', (req, res) => {
    const caseInfo = req.body
    const caseId = req.params.id
    // console.log(caseInfo)
    // console.log(caseId)

    db.updateCase(caseId, caseInfo)
    .then(cases => {
        res.status(200).json(cases)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})


//DELETE a case --tested & working
router.delete('/:id', (req, res) => {
    const caseId = req.params.id
    // console.log(caseId)

    db.removeCase(caseId)
    .then(cases => {
        res.status(201).end()
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

//GET all family members for a specific case 
router.get('/:id/families', (req, res) => {
    const caseId = req.params.id
    // console.log(caseId)

    db.getFamilyMembers(caseId)
        .then(members => {
            res.status(200).json({
                family: members 
            })
        })
        .catch(err => {
            res.status(404).json({
                message: 'Could not find family members for that case id', 
                error: err 
            })
        })
})

module.exports = router