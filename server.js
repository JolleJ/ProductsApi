
const express = require('express');
const Client  = require('pg');
const bodyParser = require('body-parser');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

client.connect();

const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = express.Router();

router.get('/', function(req,res){
    res.status(200);
});

app.use('/api', router);

app.listen(port);