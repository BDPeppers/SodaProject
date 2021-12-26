import express from 'express'

import { getSoda, updateSoda } from '../controllers/inventory.js';

const router = express.Router()

router.get('/:id', getSoda);
router.patch('/:id', updateSoda);


// router.get('/', (req, res) => {
//     res.send('test')
// })

export default router