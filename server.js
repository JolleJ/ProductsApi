require('dotenv').config()
const express = require('express');
const { Pool, Client } = require('pg');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = express.Router();

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PORT,
});



router.get('/', function(req,res){
    pool.query('SELECT * FROM product_table', (err, res) => {
        res.json({message: "It Worked!"});
    });
});

app.use('/api', router);

app.listen(port);