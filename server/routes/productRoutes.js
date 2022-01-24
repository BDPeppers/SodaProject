import express from 'express'

import { getSodas, updateSodaStock, updateSodaPrice, restockSoda } from '../controllers/productController.js';

const router = express.Router()

//route paths define the endpoints at which requests are made
//(routePath, routeHandler)
router.get('/sodas', getSodas);
router.post('/price', updateSodaPrice);
router.post('/stock', updateSodaStock);
router.post('/restock', restockSoda );


export default router


