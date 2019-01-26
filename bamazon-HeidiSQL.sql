DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NIKE", "Footwear", 100, 10), ("AirJordan", "Footwear", 200, 23), ("Adidas", "Footwear", 100, 3), ("UnderArmour", "Footwear", 100, 5), ("Timberland", "Footwear", 200, 10), ("Vans", "Footwear", 50, 18), ("Converse", "Footwear", 50, 9), ("Yeezy's", "Footwear", 350, 99), ("Clarks", "Footwear", 120, 3), ("BBB", "Footwear", 300, 100);

SELECT * FROM products;