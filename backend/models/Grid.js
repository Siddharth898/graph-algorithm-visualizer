const mongoose = require('mongoose');

const GridSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gridData: { type: Array, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Grid', GridSchema);
