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

app.get('/', (req, res) => {
    res.json({info: "Server Working!"});
});

app.get('/products', db.getProducts);

app.post('/products', db.createProduct);



app.listen(port, () => {
    console.log("Running");
});