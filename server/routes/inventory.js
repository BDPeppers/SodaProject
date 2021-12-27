import express from 'express'

import { getSodas, updateSoda } from '../controllers/inventoryController.js';

const router = express.Router()

router.get('/', getSodas);
router.patch('/:id', updateSoda);



export default router