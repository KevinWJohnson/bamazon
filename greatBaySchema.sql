DROP DATABASE IF EXISTS greatBay_DB;
CREATE DATABASE greatBay_DB;

USE greatBay_DB;

CREATE TABLE auctions(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  category VARCHAR(45) NOT NULL,
  starting_bid DECIMAL(10,2) default 0,
  highest_bid DECIMAL(10,2) default 0,
  PRIMARY KEY (id)
);
