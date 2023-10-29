const path = require('path');
const express = require('express');
const app = express();
const port = 3001;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://candy:navigator@candy.uav7yww.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
});

app.get('/form', (req, res) => {
        res.sendFile(__dirname + '/modules/ratingForm.html');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

