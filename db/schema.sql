create database todo_db;

use todo_db;

create table todo(
id int auto_increment,
item varchar(1000),
completed boolean,
date timestamp,
primary key (id)
);

