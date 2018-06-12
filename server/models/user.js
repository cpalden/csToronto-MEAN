// require the mongoose installed
const mongoose = require('mongoose')
// instance of mongoose schema
const Schema = mongoose.Schema
// new schema/blue print for user data in mdb
const userSchema = new Schema({
    email: String,
    password: String
})
// user model for mongoose in js to manipulate database
module.exports = mongoose.model('user', userSchema, 'users')