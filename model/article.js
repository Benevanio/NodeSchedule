const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    autor : {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    },
    special: {
        type: Boolean,
        required: true
    }
});

module.exports = articleSchema;