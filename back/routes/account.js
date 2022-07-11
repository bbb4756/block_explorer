const express = require('express');
const router = express.Router();
const Web3 = require('web3');
const { pool } = require('../db');

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9000'));

router.post('/:idx', async (req,res)=>{
    const idx = req.body.payload

    console.log("asdfaafds",idx)
    const account_info = await web3.eth.getBalance(idx)
    console.log(account_info * 10 **(-18))
    const sql = `SELECT * FROM transaction where \`from\` = "${idx}" or \`to\` = "${idx}";`
    console.log(sql)
    try {
        console.log('머니')
        const [result] = await pool.execute(sql);
        console.log(result)
        res.json({"value":account_info * 10 **(-18), result})
    }catch(e){
        console.log(e.error)
        res.json({})
    }
})



module.exports = router