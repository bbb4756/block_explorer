const express = require('express');
const router = express.Router();
const Web3 = require('web3');
const { pool } = require('../db');

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9000'));

router.post('/', async (req, res) => {
    let option = {"type":""}
    const {search_result} = req.body
    try {
        const sql = `SELECT * FROM block where hash="${search_result}"`;
        const sql2 = `SELECT * from transaction where hash="${search_result}"`;
        const [result] = await pool.execute(sql);
        const [result2] = await pool.execute(sql2);

        if (result.length !==0){
            option["type"] = "block"
            res.json({result,option});
        } else if(result2.length !==0){
            option["type"]="transaction"
            res.json({result2, option})
        } else if(result.length == 0 && result2.length==0){ 
            option["type"] = "none"
            res.json({result,option})
        }

    } catch (e) {
        console.error(e.message);
        res.json({});
    }
});

module.exports = router;