DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (position)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2019-1, "NIKE", "Footwear", 100, 10), (2019-2, "AirJordan", "Footwear", 200, 23), (2019-3, "Adidas", "Footwear", 100, 3), (2019-4, "UnderArmour", "Footwear", 100, 5), (2019-5, "Timberland", "Footwear", 200, 10), (2019-6, "Vans", "Footwear", 50, 18), (2019-7, "Converse", "Footwear", 50, 9), (2019-8, "Yeezy's", "Footwear", 350, 99), (2019-9, "Clarks", "Footwear", 120, 3), (2019-10, "BBB", "Footwear", 300, 100);

SELECT * FROM bamazonDB;


-- CREATE TABLE top_albums (
--   position INT NOT NULL,
--   artist VARCHAR(100) NULL,
--   album VARCHAR(100) NULL,
--   year INT NULL,
--   raw_total DECIMAL(10,4) NULL,
--   raw_usa DECIMAL(10,4) NULL,
--   raw_uk DECIMAL(10,4) NULL,
--   raw_eur DECIMAL(10,4) NULL,
--   raw_row DECIMAL(10,4) NULL,
--   PRIMARY KEY (position)
-- );


-- select * from top_albums;
