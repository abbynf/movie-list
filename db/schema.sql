CREATE DATABASE movies_db;

USE movies_db;
CREATE TABLE movies(
    id INT NOT NULL AUTO_INCREMENT,
    movie_name VARCHAR(120),
    watched BOOLEAN,
    PRIMARY KEY (id)
);