var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "MyDATA",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the display products function after the connection is made to prompt the user
  displayProducts();

});


function displayProducts() {
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    //console.log(res);
    console.log("\n");
    console.table('Products Available for Sale', results);
    buyOrQuit();
  });
}



// function which prompts the user for what action they should take
// - buy an item or quit the program
function buyOrQuit() {

  inquirer
    .prompt({
      name: "buyItemOrQuit",
      type: "rawlist",
      message: "Would you like to [BUY] an item or [QUIT] or quit the app?",
      choices: ["BUY", "QUIT"]
    })
    .then(function (answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.buyItemOrQuit.toUpperCase() === "BUY") {
        buyItem();
      }
      else {
        quitApp();
      }
    });
}

// the function called if the customer wants to buy an item
function buyItem() {
  // query the database for all products being sold
  //console.log("inside buyItem - before prompt")
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    // Having the User select the product ID of the item they want to buy
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function () {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].item_id.toString());
            }
            return choiceArray;
          },
          message: "Select the ID of the product you would like to buy?"
        },
        {
          name: "buyQuantity",
          type: "input",
          message: "How many units of the product do you like to buy?"
        }
      ])
      .then(function (answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id.toString() === answer.choice) {
            chosenItem = results[i];
          }
        }

        // determine if the store has enough quanties of the product to meet the 
        // customer's request

        var itemsInStock = parseInt(chosenItem.stock_quantity);
        var itemsBuyQuantity = parseInt(answer.buyQuantity);

        if (itemsInStock >= itemsBuyQuantity) {
          // There was enough quanties to meet the customer's request
          // so subtract the quanties bought and calculate the total cost of the
          // purchase

          // Calculate the remaining quantites

          var itemsRemaining = itemsInStock - itemsBuyQuantity;

          // Calculate the total cost

          var totalCost = itemsBuyQuantity * chosenItem.price;


          // Update database with the new quantity
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: itemsRemaining
              },
              {
                item_id: parseInt(chosenItem.item_id)
              }
            ],
            function (error) {
              if (error) throw err;
              console.log("Order placed successfully!");
              console.log("The total cost of your purchase is $" + totalCost);
              displayProducts();
            }
          );
        }
        else {
          // There was not enough quanties to meet the customer's request
          console.log("You have requested to buy " + parseInt(answer.buyQuantiy) + "units of");
          console.log(chosenItem.product_name);
          console.log("The store only has " + chosenItem.stock_quantity + " items");
          console.log("Insufficient quantity!");
          displayProducts();
        }
      });
  });
}


function quitApp() {
  console.log("\n");
  console.log("The user has quit the app");
  connection.end();
}