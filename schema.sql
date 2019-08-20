DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bat", "sports", 22.50, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("glove", "sports", 32.00, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ball", "sports", 14.25, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hammer", "tools", 7.50, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("nails", "tools", 0.50, 304);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pliers", "tools", 6.25, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("plates", "housewares", 2.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("napkins", "housewares", .05, 475);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tea_glass", "housewares", 12.00, 55);
