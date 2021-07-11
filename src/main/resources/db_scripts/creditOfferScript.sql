create table credit_offer
(
    credit_offer_id    bigserial primary key,
    client_id bigint constraint client_id_fk references client,
    credit_id bigint constraint credit_id_fk references credit,
    credit_offer_sum numeric (15,2)
);
comment on table client is 'Кредитное предложение банка';
comment on column credit_offer.client_id is 'Клиент';
comment on column credit_offer.credit_id is 'Кредит';
comment on column credit_offer.credit_offer_sum is 'Сумма';