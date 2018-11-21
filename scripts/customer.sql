drop table if exists customer;

create table customer (
    id serial  not null primary key,
    addpayid text,
    firstname text not null,
    lastname text not null,
    email text not null,
    mobile FLOAT not null,
    customer_type text not null
)