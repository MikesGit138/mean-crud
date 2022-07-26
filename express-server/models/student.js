const mongoose = require('mongoose')

const students = mongoose.model('students', {
    fname : { type: String},
    lname : { type: String},
    age : { type: Number},
    cohort : { type: Number},
    accountStatus : { type: Boolean, default : false}
})

module.exports = {students}