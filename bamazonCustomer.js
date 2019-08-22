
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

function startShopping() {
    //print all products in the inventory 
    connection.query("SELECT * FROM products", function (error, results, fields) {
        // error will return true if one occurred during the query 
        if (error) {
            console.log("Error: " + error);
            return;
        };
        // display 'results', which will contain the results of the query 
        console.log("-----Start: all products for sale------");

        // Create a new table to dislay results of the query
        var table = new Table({
            head: ["Item ID", "Product Name", "Price", "QTY"]
        });

        // Loops over the result to push it to new table.
        for (var i = 0; i < results.length; i++) {

            table.push(
                [results[i].item_id, results[i].product_name, results[i].price, results[i].stock_quantity]
            );

        };
        console.log(table.toString());
        console.log("-----End: all products for sale------");
        //ask the customer what they want to buy and how much
        inquirer.prompt([
            {
                type: "input",
                name: "purchaseId",
                message: "Which item would you like to buy (Enter the Product ID Number)? "
            },
            {
                type: "input",
                name: "purchaseAmount",
                message: "What quantity would you like to buy? "
            }
        ]).then(function (input) {
            //check to see if there is enough quantity left, and if so update inventory
            checkInventory(input.purchaseId, input.purchaseAmount, function (inventoryAvailable) {
                if (inventoryAvailable) {
                    //if inventory is available, update.
                    updateInventory(input.purchaseId, parseInt(input.purchaseAmount));
                } else {
                    //if no quantity is available, tell the user this 
                    console.log("Insufficient quantity");
                    //Starts the program over
                    startShopping();
                };

            });
        });
    });

}



