require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = process.env.PORT;

var connection = mysql.createConnection({
	host: "localhost",
	user: process.env.DBUSER,
	password: process.env.DBPASS,
	database: "chatapidb",
});

connection.connect( (err) =>{
  if(err)
    throw err;
  console.log("Database connected..");
} );



connection.end();


const server = app.listen(PORT, () => {
	console.log(`Server started at ${PORT}`);
});
