const mysql = require('mysql2/promise');


module.exports = {
    db:"ucx6hifqrpq54fjk",
    GetConnection: async function (db=this.db, pass="r7u2z2vgj004b41j") {
        try {
            return await mysql.createConnection({
                host: "s3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

                // Your port; if not 3306
                port: 3306,

                // Your username
                user: "zu1b29gao345z8ak",

                // Your password
                password: pass,
                database: this.db
            });
        }
        catch (err) {
            throw err;
        }

    },

    selectAllFromTable: async function(con, table){
        let queryString = "SELECT * FROM ?"
        try{
            let response = await con.query(queryString, table);
            return new Promise((resolve, reject) => {
                if(response){
                    resolve(response[0]);
                }
                else{
                    reject({err:"MYSQL SERVER ERROR Code:500 in SelectAllFromTable()"})
                }
            })
        }catch(err){
            throw err;
        }
    },

    selectWhere: async function (con, tableInput, colToSearch, valOfCol) {
        let queryString = "SELECT * FROM ?? WHERE ?? = ?";
        try {
            let response = await con.query(queryString, [tableInput, colToSearch, valOfCol]);
            return new Promise((resolve, reject) => {
                if (response) {
                    resolve(response[0]);
                }
                else {
                    reject({ err: "SQL Sever error code:500 in method selectWhere()" })
                }
            });
        } catch (err) {
            throw err;
        }
    },

    selectAndOrder: async function (con, whatToSelect, table, orderCol) {
        let queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        try {
            let response = await con.query(queryString, [whatToSelect, table, orderCol]);
            return new Promise((resolve, reject) => {
                if (response) {
                    resolve(response[0]);
                }
                else {
                    reject({ err: "SQL server response error code:500 in method SelectAndOrder()" })
                }
            });
        } catch (err) {
            throw err;
        }
    },

    insertOne: async function (con, InsertObject) {
        let queryString =
            `INSERT INTO ucx6hifqrpq54fjk SET ?;`;
        try {
            console.log(InsertObject)
            let response = await con.query(
                queryString, {
                    burger: InsertObject.ValueA,
                    isEaton: InsertObject.ValueB,
                });
            return new Promise((resolve, reject) => {
                if (response) {
                    resolve(response[0]);
                } else {
                    reject({ err: "SQL server Response Error code:500 in method insert burger()" });
                }
            });

        } catch (err) {
            console.log("error inserting data to table");
            throw err;
        }
    },

    findWhoHasMost: async function (con, tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        let queryString =
            "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
        try {
            let response = await con.query(
                queryString,
                [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol]);
            return new Promise((resolve,reject) => {
                if(response){
                    resolve(response[0]);
                }else{
                    reject({err:"SQL server Response Error code:500 in method findWhoHasMost()"});
                }
            });

        } catch (err) {
            throw err;
        }
    }
    //end of methods
}