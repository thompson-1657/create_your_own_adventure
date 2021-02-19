DROP DATABASE IF EXISTS adventure_db;
CREATE DATABASE adventure_db;
USE adventure_db;
CREATE TABLE characters (
    name VARCHAR(30) NOT NULL,
    hp INT(10),
    exp INT(100),
    mp INT(10),
    level INT(10),
    HTML INT(10),
    CSS INT(10),
    JavaScript INT(10),
    items VARCHAR(100)
);
CREATE TABLE main_story (story VARCHAR(10000));
CREATE TABLE side_story (story VARCHAR(10000));
CREATE TABLE enemies (
    name VARCHAR(30) NOT NULL,
    hp INT(10),
    HTML INT(10),
    CSS INT(10),
    JavaScript INT(10)
);