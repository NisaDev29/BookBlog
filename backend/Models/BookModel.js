const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    desc: {
        type: String,
        trim: true
    },
    img: {
        type: String,
    }
})

const BookModel = mongoose.model("Book", BookSchema);
module.exports = BookModel;
