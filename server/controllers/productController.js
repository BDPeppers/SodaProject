import express from 'express';
import mongoose from 'mongoose';

import SodaOperation from '../models/productModel.js';

const router = express.Router();

//get all sodas
export const getSodas = async (req, res) => { 
    try 
    {
        const sodas = await SodaOperation.find();
        res.status(200).json(sodas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//update sodas quantity and purchased attributes
export const updateSodaStock = async (req, res) => {
    const sodaPurchase = req.query
    const mongooseId = sodaPurchase.id
    
    if (!mongoose.Types.ObjectId.isValid(mongooseId)) return res.status(404).send(`No soda with id: ${mongooseId}`);

    //do some math
    await SodaOperation.findByIdAndUpdate(mongooseId, {quantity: sodaPurchase.remainingStock, purchased: sodaPurchase.purchaseAmount}, function(err, result) {
        if (err) {
          res.send(err);;
        } else {
          res.send(result);
        }
     }).clone().catch(function(err){console.log(err)});

}

//restock soda
export const restockSoda = async (req, res) => {
    
    const sodaRestock = req.query;
    const mongooseId = sodaRestock.id
    console.log(sodaRestock)
    
    if (!mongoose.Types.ObjectId.isValid(mongooseId)) return res.status(404).send(`No soda with id: ${mongooseId}`);

    await SodaOperation.findByIdAndUpdate(mongooseId, {quantity: sodaRestock.maxQty}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
     }).clone().catch(function(err){console.log(err)});
}

//update sodas price
export const updateSodaPrice = async (req, res) => {
    console.log('test')
    const sodaPrice = req.query;
    const mongooseId = sodaPrice.id;
    
    if (!mongoose.Types.ObjectId.isValid(mongooseId)) return res.status(404).send(`No soda with id: ${mongooseId}`);

    await SodaOperation.findByIdAndUpdate(mongooseId, {price: sodaPrice}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
     }).clone().catch(function(err){console.log(err)});
}

export default router;