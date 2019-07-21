const express = require('express');
const router = express.Router();
const sql = require("../../controlers/mysql2ORMController");



//api prepended 
router.post('/newBurger', async function (req,res){
    console.log('adding new burger')
    try{
    let con = await sql.GetConnection();
    let resp = await sql.insertOne(con, {ValueA: req.body.burger,ValueB: false});
    console.log(resp);
    con.end();
    res.send("success");
    }catch(err){
        res.send("fail");
        console.log(err);
    }
});

router.post('/eatBurger', async function (req, res){
    try{
    let con = await sql.GetConnection();
    con.query(`UPDATE ucx6hifqrpq54fjk 
    SET isEaton = 1 WHERE burger = '${req.body.burger}';`);
    con.end();
    res.send("success");
    }catch(err){
        res.send("fail");
        console.log(err);
    }
});

module.exports = router;