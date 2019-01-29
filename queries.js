const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

client.connect();

//Getting all products
const getProducts = (req, res) => {
    client.query('SELECT * FROM product_table;', (error, results) =>{
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}

//Getting a specific product
const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    client.query('SELECT * FROM product_table WHERE id = $1', [id], (error, results) =>{
        if(error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}

//Posting a new product = 

const createProduct = (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const text = req.body.text;
    client.query('INSERT INTO product_table (name, price, text) VALUES ($1, $2, $3)', [name, price, text], (error, results) =>{
        if(error) {
            throw error
        }
        res.status(201).send("Product added")
    });
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
}

