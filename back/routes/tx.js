const express = require('express');
const router = express.Router();
const Web3 = require('web3');
const { pool } = require('../db');

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9000'));

router.post('/:idx', async (req, res) => {
    const idx = req.body.payload;
    console.log(idx)
    const sql = `SELECT * FROM transaction where hash='${idx}'`;
    try {
        const [[result]] = await pool.execute(sql);
        console.log("rufrhkss",result)
        res.json(result);
    } catch (e) {
        console.error(e.message);
        res.json({});
    }
});

module.exports = router;