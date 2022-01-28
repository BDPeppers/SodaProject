import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser';
const db = mongoose.connection;

const PORT = process.env.PORT || 3001;

const app = express();
import ProductRoutes from './routes/productRoutes.js'//api routes

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors()); //allows restricted resources on a web page to be requested from another domain outside the domain


app.use('/api', ProductRoutes)

//MongoDB/Mongoose
const CONN_STRING = 'mongodb+srv://admin:admin@cluster0.iv97k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(CONN_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`TEST: Server running on ${PORT}`))
  })
  .catch((error) => console.log(error.message));

