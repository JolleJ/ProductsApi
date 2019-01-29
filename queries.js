const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'otvuzfjqceqoom',
    host: 'ec2-54-75-245-94.eu-west-1.compute.amazonaws.com',
    databse: 'd6h6dl284lgq98',
    password: 'ac7b563a023c14422324bad89ab77cb81249f2e31a6c2b0ee186537cce346304',
    port: 5432,
});

const getProducts = (req, res) => {
    pool.query('SELECT * FROM product_table', (error, results) =>{
        if(error) {
            throw error;
        }
        res.status(200).json(results.row);
    });
}

module.exports = {
    getProducts,
}

