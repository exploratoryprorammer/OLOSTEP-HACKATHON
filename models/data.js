const { data } = require('@tensorflow/tfjs');
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    url: String,
    data: String,
    category: String,
});

module.exports = mongoose.model('Data', Schema);
