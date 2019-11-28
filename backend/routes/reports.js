const router = require('express').Router();
let report = require('../models/report.model');

router.route('/').get((req, res) => {
    report.find()
    .then(report => res.json(report))
    .catch(err => res.status(400).json('Error: ' + err));
    
});
router.route('/:rfid').get((req, res) => {
    report.find({'rfid':req.params.rfid})
    .then(report => res.json(report))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const rfid = req.body.rfid;
    const studentid = req.body.studentid;
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Faculty = req.body.Faculty;
    const Grade = req.body.Grade;
    const Day = req.body.Day;
    const Month = req.body.Month;
    const Year = req.body.Year;
    const Time = req.body.Time;
    //const Status = req.body.Status;

    const newreport = new report({
        rfid,
        studentid,
        FirstName,
        LastName,
        Faculty,
        Grade,
        Day,
        Month,
        Year,
        Time,
        //Status
    });

    newreport.save()
    .then(() => res.json('Report added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;