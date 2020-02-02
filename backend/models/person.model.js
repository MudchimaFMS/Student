const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personData = new Schema({
    rfid:{ type: String, required: true},
    studentid:{ type: String, required: true},
    FirstName: { type: String, required: true},
    LastName: { type: String, required: true},
    Faculty: { type: String, required: true},
    Grade: { type: String, required: true},
    Subject: {type: String, required: true}
},{
    timestamps: true,
});

const person = mongoose.model('person',personData);

module.exports = person;