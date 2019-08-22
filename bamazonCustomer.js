
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password1",
    database: "bamazon_db"
});

connection.connect(function (error) {
    if (error) {
        console.log("Error code: " + error);
        return;
    } else {
        console.log("Connected to database as connection " + connection.threadId);
        startShopping();
    };
});




