// Define mongoose model here

const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    // Define your schema here
})

mongoose.model('users', userSchema)