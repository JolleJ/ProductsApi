const express = require('express');
const client = require('pg');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = express.Router();

router.get('/', function(req,res){
    res.json({message: "It Works"});
});

app.use('/api', router);

app.listen(port);