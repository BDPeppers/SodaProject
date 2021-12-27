import express from 'express';
import mongoose from 'mongoose';

import SodaOperation from '../models/inventoryModel.js';

const router = express.Router();

//get all sodas
export const getSodas = async (req, res) => { 
    try {
        const sodas = await SodaOperation.find();
        res.status(200).json(sodas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//update sodas by id
export const updateSoda = async (req, res) => {
    const { id: _id } = req.params;
    const {sodaQty} = req.body
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

    await SodaOperation.findByIdAndUpdate(_id, {quantity: sodaQty}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
     } );

    res.json(sodaQty);
}
export default router;