import mongoose from 'mongoose';

const product = mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
    quantity: Number,
    maxQuantity: Number,
    available: Boolean,
    hexColorCode: String,
    purchased : Number
})


var SodaOperation = mongoose.model('SodaOperation', product);

export default SodaOperation;
