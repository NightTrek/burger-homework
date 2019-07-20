const express = require('express');
const router = express.Router();
const apiRoutes =require('./api');
// const sql = require('mysql2/promise');
const sql = require("../controlers/mysql2ORMController")


router.use('/api', apiRoutes);

//homepage get function
router.get("/", async function(req, res) {
  try{
    let connection = await sql.GetConnection();
    let sqlData = await sql.selectAllFromTable(connection, "burger")

    console.log(sqlData);
    res.render("DisplayAll", sqlData);
  }catch(err){
    throw err;
  }
  });


module.exports = router