const express = require('express');
const router = express.Router();
const apiRoutes =require('./api');
const sql = require("../controlers/mysql2ORMController");


router.use('/api', apiRoutes);

//homepage get function
router.get("/", async function(req, res) {
  try{
    let connection = await sql.GetConnection();
    let response = await connection.query(`SELECT * FROM burger`);
    let bugers = [];
    let eatenBurger = [];
    response[0].forEach(element => {
      if(element.isEaton === 1){
        eatenBurger.push(element);
      }else{
        bugers.push(element);
      }
    });
    let input = {burger:bugers, nonBurger:eatenBurger};
    
    console.log(response[0]);
    connection.end();
    res.render("DisplayAll", input);
  }catch(err){
    res.send("error connecting to burger db")
    console.log(err)
  }
  });


module.exports = router