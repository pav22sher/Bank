create table client
(
    client_id    bigserial primary key,
    client_last_name  varchar(100) not null,
    client_first_name  varchar(100) not null,
    client_second_name  varchar(100) not null,
    client_phone varchar(15)  not null,
    client_email varchar(100) not null,
    client_passport_number varchar(100) not null
);
comment on table client is 'Клиент';
comment on column client.client_last_name is 'Фамилия';
comment on column client.client_first_name  is 'Имя';
comment on column client.client_second_name  is 'Отчество';
comment on column client.client_phone is 'Телефон';
comment on column client.client_email is 'Почта';
comment on column client.client_passport_number is 'Номер паспорта';