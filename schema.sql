-- user login

CREATE TABLE users(
    id serial primary key,
    name varchar(250),
    email varchar(250),
    password varchar(250),
    createdon timestamp default current_timestamp
);


