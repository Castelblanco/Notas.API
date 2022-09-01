"use strict";
require("../config");

const mysql = require("mysql"),
      { db } = JSON.parse(process.env.CONNECT_DB),
      pool = mysql.createPool(db),
      { promisify } = require("util");

pool.getConnection((err, connect) =>{
    if (err){
        if (err.code == "PROTOCOL_CONNECTION_LOST") console.log("Connection close");
        if (err.code == "ER_CON_COUNT_ERROR") console.log("Too much connections");
        if (err.code == "ECONNREFUSED") console.log("Reject connection");
    }
    if (connect) connect.release();
    console.log("SQL connect");
    return;
});

pool.query = promisify(pool.query);
module.exports = pool;