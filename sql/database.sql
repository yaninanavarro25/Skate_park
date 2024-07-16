create database skatepark;

create table skaters(
id serial primary key,
name varchar(50) not null,
email varchar(50) not null unique,
password varchar(60) not null,
experience int not null,
especialty varchar(50) not null,
image varchar (255) not null,
status boolean not null default false,
createat timestamp with time zone default now()
);