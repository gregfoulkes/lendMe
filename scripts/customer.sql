drop table if exists customer, borrowers_table
create table customer (
    id serial  not null primary key,
    addpayid text,
    firstname text not null,
    lastname text not null,
    email text not null,
    mobile FLOAT not null,
    customer_type text not null
);

create table borrowers_table(
    id serial not null PRIMARY KEY,
    customer_id int,
    amount_owed FLOAT,
    trust_rate int,
    FOREIGN KEY(customer_id) REFERENCES customer(id)
)