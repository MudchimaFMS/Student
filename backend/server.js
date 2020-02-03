const express = require('express');
const cors = require('cors');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "18.220.156.63",
  user: "projectuser",
  password: "p@ssw0rd",
  database: "project"
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!!');
//   con.query("SELECT * FROM people", function (err, result, fields) {
//     if (err) throw err;
//     console.log(JSON.stringify(result[0]));
//   });
});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/persons',(req, res) => {
    let query = "SELECT * FROM people";
    con.query(query,function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});
app.get('/persons/:rfid',(req, res) => {
    let query = "SELECT * FROM people WHERE rfid='"+req.params.rfid+"'";
    con.query(query,function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});
app.post('/persons/add',(req, res) => {
    const rfid = req.body.rfid;
    const studentid = req.body.studentid;
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Faculty = req.body.Faculty;
    const Grade = req.body.Grade;
    const Subject = req.body.Subject;
    let query = "INSERT INTO people(rfid,studentid,FirstName,LastName,Faculty,Grade,Subject) values('"+rfid+"','"+studentid+"','"+FirstName+"','"+LastName+"','"+Faculty+"','"+Grade+"','"+Subject+"')";
    con.query(query,function (err, result, fields) {
        if (err) throw err;
        res.json('Success');
    });
});

app.get('/reports',(req, res) => {
    let query = "SELECT * FROM report JOIN people ON people.rfid = report.rfid";
    con.query(query,function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});
app.get('/reports/:rfid',(req, res) => {
    let query = "SELECT * FROM report JOIN people ON people.rfid = report.rfid WHERE rfid='"+req.params.rfid+"'";
    con.query(query,function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});
app.post('/reports/add',(req, res) => {
    const rfid = req.body.rfid;
    let query = "INSERT INTO report(rfid) values('"+rfid+"')";
    con.query(query,function (err, result, fields) {
        if (err) throw err;
        res.json('Success');
    });
});
app.post('/reports/process',(req, res) => {
    const datestart = req.body.datestart;
    const dateend = req.body.dateend;
    const subject = req.body.subject;
    console.log(req.body)
    let query = `SELECT * FROM report JOIN people ON people.rfid = report.rfid WHERE report.Time >= '${datestart}' AND report.Time <= '${dateend}' AND people.Subject = '${subject}'`;
    con.query(query,function (err, result, fields) {
        if (err) throw err;
        console.log(result)
        res.json(result);
    });
});
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});