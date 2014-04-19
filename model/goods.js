var mongoose = require('mongoose');

module.exports = mongoose.model('Goods', {
    title: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    resolution: {
        type: Number,
        required: true
    }
});


