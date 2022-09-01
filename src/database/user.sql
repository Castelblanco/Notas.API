CREATE DATABASE Notes_SQL;
USE Notes_SQL;

CREATE TABLE user(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(15) NOT NULL,
    lastname VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(500) NOT NULL,
    PRIMARY KEY(id)
);