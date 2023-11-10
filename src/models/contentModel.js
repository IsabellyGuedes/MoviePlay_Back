const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contentSchema = new Schema({
    title: {type: String, required: true},
    year: {type: Date, required: true},
    category: {type: String, required: true},
    synopsis: {type: String, required: true},
    price: {type: Number, required: true}
})

module.exports = mongoose.model("Content", contentSchema)