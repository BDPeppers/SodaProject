import express from 'express';
import mongoose from 'mongoose';

import SodaOperation from '../models/productModel.js';

const router = express.Router();

//get all sodas
export const getSodas = async (req, res) => { 
    try 
    {
        const sodas = await SodaOperation.find();
        console.log(sodas)
        res.status(200).json(sodas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//update sodas quantity and purchased attributes
export const updateSodaStock = async (req, res) => {
    const { id: _id } = req.params;
    const {sodaQTY} = req.body
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No soda with id: ${_id}`);

    await SodaOperation.findByIdAndUpdate(_id, {quantity: sodaQTY, purchased: sodaQTY}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
     } );

    res.json(sodaQTY);
}

//restock soda
export const restockSoda = async (req, res) => {
    const { id: _id } = req.params;
    const {sodaStock} = req.body
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No soda with id: ${_id}`);

    await SodaOperation.findByIdAndUpdate(_id, {quantity: sodaStock}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
     } );

    res.json(sodaStock);
}

//update sodas price
export const updateSodaPrice = async (req, res) => {
    const { id: _id } = req.params;
    const {sodaPrice} = req.body
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No soda with id: ${_id}`);

    await SodaOperation.findByIdAndUpdate(_id, {price: sodaPrice}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
     } );

    res.json(sodaPrice);
}

export default router;