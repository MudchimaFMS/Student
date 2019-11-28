const router = require('express').Router();
let person = require('../models/person.model');

router.route('/').get((req, res) => {
    person.find()
    .then(person => res.json(person))
    .catch(err => res.status(400).json('Error: ' + err));
    
});
router.route('/:rfid').get((req, res) => {
    person.find({'rfid':req.params.rfid})
    .then(person => res.json(person))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const rfid = req.body.rfid;
    const studentid = req.body.studentid;
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Faculty = req.body.Faculty;
    const Grade = req.body.Grade;

    const newperson = new person({
        rfid,
        studentid,
        FirstName,
        LastName,
        Faculty,
        Grade,
    });
    console.log(newperson);
    newperson.save()
    .then(() => res.json('person added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;