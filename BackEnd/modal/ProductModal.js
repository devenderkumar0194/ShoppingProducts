const { required } = require('joi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 100
        },
        price: {
            type: Number,
            required: true,
            min: 3,
        },
        description: {
            type: String,
            required: true,
        },    
        status: {
            type: String,
            enum : ['active','deactive'],
            default: 'deactive'
        },
    },
    {
    timestamps: true
    }
);

const ProductModal = mongoose.model('Product', productSchema);
module.exports = ProductModal;