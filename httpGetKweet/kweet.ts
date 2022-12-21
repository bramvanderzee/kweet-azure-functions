const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: String,
    content: String,
    userId: Number
})

module.exports = mongoose.model("Kweet", schema)
