const mongoose = require('mongoose')
const Schema = mongoose.Schema
const problemSchema = new Schema({
    problems: {},
    address: {},
    inputDate: Date,
    status: NaN
})
// problem model for mongoose to manipulate problems in db
module.exports = mongoose.model('problem', problemSchema, 'problems')