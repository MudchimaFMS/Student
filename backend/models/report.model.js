const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportData = new Schema({
    rfid:{ type: String, required: true},
    studentid:{ type: String, required: true},
    FirstName: { type: String, required: true},
    LastName: { type: String, required: true},
    Faculty: { type: String, required: true},
    Grade: { type: String, required: true},
    Day: { type: String, required: true},
    Month: { type: String, required: true},
    Year: { type: String, required: true},
    Time: { type: String, required: true},
    //Status:{ type: String, required: true}
},{
    timestamps: true,
});

const report = mongoose.model('report',reportData);

module.exports = report;