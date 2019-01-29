const express = require('express');
const client = require('pg');
const bodyParser = require('body-parser');


const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("We are live!");
});

app.get('status', function(req, res){
    res.status(200);
});