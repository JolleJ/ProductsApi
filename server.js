
const express = require('express');
const { Pool, Client } = require('pg');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = express.Router();

const pool = new Pool({
    user: "otvuzfjqceqoom",
    host: "ec2-54-75-245-94.eu-west-1.compute.amazonaws.com",
    database: "d6h6dl284lgq98",
    password: "ac7b563a023c14422324bad89ab77cb81249f2e31a6c2b0ee186537cce346304",
    port: process.env.PORT,
});



router.get('/', function(req,res){
    pool.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
        pool.end()
      })
});

app.use('/api', router);

app.listen(port);