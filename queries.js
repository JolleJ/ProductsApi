const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

client.connect();


const getProducts = (req, res) => {
    client.query('SELECT * FROM product_table', (error, results) =>{
        if(error) {
            throw error;
        }
        res.status(200).json(results.row);
    });
}

module.exports = {
    getProducts,
}

