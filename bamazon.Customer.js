var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What is the ID of the product you would like to buy? How many Products would you like to buy?",
            choices: [
                "Search items by ID",
                "Search all items",
                // "Search items by product name",
                // "Search items by department name",
                // "Search items by stock quantity"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Search items by ID":
                    idSearch();
                    break;

                case "Search all items":
                    allSearch();
                    break;

                case "Search items by product name":
                    productSearch();
                    break;

                case "Search items by department name":
                    departmentSearch();
                    break;

                case "Search items by price":
                    priceSearch();
                    break;

                case "Search items by stock quantity":
                    stockSearch();
                    break;
            }
        });
}

function idSearch() {
    inquirer
        .prompt({
            name: "id",
            type: "input",
            message: "What item ID would you like to search for?"
        })
        .then(function (answer) {
            var query = "SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE item_id = ? ";
            connection.query(query, [answer.id],
                function (err, res) {
                    for (var i = 0; i < res.length; i++) {
                        console.log("ID: " + res[i].item_id + " || Product: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: " + res[i].price + " || stock: " + res[i].stock_quantity);
                    }

                    runSearch();
                });
        });
}

function allSearch() {

    var query = "SELECT * FROM products ";
    connection.query(query,
        function (err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log("ID: " + res[i].item_id + " || Product: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: " + res[i].price + " || stock: " + res[i].stock_quantity);
            }

            runSearch();
        });
};

//purchase function

function purchase(products) {
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Please type the id you would like to purchase."

    }, {
        name: "qty",
        type: "input",
        message: "How many would you like to buy?"
    }]).then(function (answer) {
        var query = "SELECT * FROM products ";
        connection.query(query,
            function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("ID: " + res[i].item_id + " || Product: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: " + res[i].price + " || stock: " + res[i].stock_quantity);
                }
            }
        )

        runSearch();
    });
};

// 
// update Stock_quantity Where ? = ? with matching id typed in


function productSearch() {
    inquirer
        .prompt({
            product: "product",
            type: "input",
            message: "What product would you like to search for?"
        })
        .then(function (answer) {
            var query = "SELECT item ID, product, department, price, stock ?";
            connection.query(query, {
                product: answer.product
            }, function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("ID: " + res[i].id + " || Product: " + res[i].product + " || Department: " + res[i].department + " || Price: " + res[i].price + " || stock: " + res[i].stock);
                }
                runSearch();
            });
        });
}

function departmentSearch() {
    inquirer
        .prompt({
            department: "department",
            type: "input",
            message: "What department would you like to search for?"
        })
        .then(function (answer) {
            var query = "SELECT item ID, product, department, price, stock ?";
            connection.query(query, {
                id: answer.id
            }, function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("ID: " + res[i].id + " || Product: " + res[i].product + " || Department: " + res[i].department + " || Price: " + res[i].price + " || stock: " + res[i].stock);
                }
                runSearch();
            });
        });
}

function priceSearch() {
    inquirer
        .prompt({
            price: "price",
            type: "input",
            message: "What price would you like to search for?"
        })
        .then(function (answer) {
            var query = "SELECT item ID, product, department, price, stock ?";
            connection.query(query, {
                price: answer.price
            }, function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("ID: " + res[i].id + " || Product: " + res[i].product + " || Department: " + res[i].department + " || Price: " + res[i].price + " || stock: " + res[i].stock);
                }
                runSearch();
            });
        });
}

function stockSearch() {
    inquirer
        .prompt({
            stock: "stock",
            type: "input",
            message: "What stock quantity would you like to search for?"
        })
        .then(function (answer) {
            var query = "SELECT item ID, product, department, price, stock ?";
            connection.query(query, {
                stock: answer.stock
            }, function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("ID: " + res[i].id + " || Product: " + res[i].product + " || Department: " + res[i].department + " || Price: " + res[i].price + " || stock: " + res[i].stock);
                }
                runSearch();
            });
        });
}