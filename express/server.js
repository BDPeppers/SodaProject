import express from 'express'
const app = express();

import mongodb from 'mongodb'
const mongo = mongodb.MongoClient

app.listen(3001, function(){
    console.log('listening on 3000')
})


app.get('/', (req, res) => {
    res.send('Hello World');
})

const CONN_STRING = 'mongodb+srv://admin:admin@cluster0.iv97k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongo.connect(CONN_STRING, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    .then(client ={
        // const db = client.db()
    })
})