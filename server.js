const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');

const port = process.env.PORT;

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});

app.get('/', (req, res) => {
    res.json({info: "Server Working!"});
});

app.get('/products', db.getProducts);

app.post('/products', db.createProduct);



app.listen(port, () => {
    console.log("Running");
});