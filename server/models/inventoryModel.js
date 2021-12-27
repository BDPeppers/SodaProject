import mongoose from 'mongoose';

const sodaSchema = mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
    quantity: Number,
    maxQuantity: Number,
    available: Boolean,
    hexColorCode: String,
})

var SodaOperation = mongoose.model('SodaOperation', sodaSchema);

export default SodaOperation;
