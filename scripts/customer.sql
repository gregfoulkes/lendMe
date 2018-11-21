drop table if exists customer cascade;

create table customer (
    id serial  not null primary key,
    addpayid text not null,
    firstname text not null,
    lastname text not null,
    email text not null,
    mobile int not null,
    customer_type text not null
)