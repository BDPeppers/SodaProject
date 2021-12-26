import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const PORT = process.env.PORT || 3001;

import InvnentoryPage from './routes/inventory.js'
const app = express();

app.use('/inventory', InvnentoryPage);

app.use(cors());

//MongoDB
const CONN_STRING = 'mongodb+srv://admin:admin@cluster0.iv97k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(CONN_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`TEST: Server running on ${PORT}`)) )
  .catch((error) => console.log(error.message));

