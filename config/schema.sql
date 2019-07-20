DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger(
    id INTEGER AUTO_INCREMENT,
    burger VARCHAR(100) NOT NULL,
    isEaton BOOLEAN NOT NULL,
    PRIMARY KEY (id)
)

