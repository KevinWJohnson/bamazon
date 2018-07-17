DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

-- Creating products Table
CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

-- Inserting rows into products table
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kenmore Smart 75049 24 cu. ft. Refrigerator", "Appliances", 2300.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Odyssey PC 680 Car Battery", "Automotive Parts", 56.50, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dell OptiPlex Desktop Complete Computer Package", "Computers", 987.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple iPad with WiFi, 32 GB", "Electronics", 780.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Greenworks Pro 80V 21-inch Cordless Lawn Mower", "Garden & Outdoors", 658.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TaoTronics LED Desk Lamp Eye-caring Table Lamp", "Home & Kitchen", 23.75, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("New Balance Mens 680V4 Running Shoes", "Clothing-Mens", 134.00, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shark SN5X Clip-On Tuner for Guitar, Bass & Violin", "Musical Instruments", 45.68, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Greenies Chicken Flavor Dental Cat Treats", "Pet Supplies", 2.95, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wilson GST Leather Football", "Sports & Outdoors", 56.00, 70);

SELECT * FROM `products`;