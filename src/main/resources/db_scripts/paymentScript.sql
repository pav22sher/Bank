create table payment
(
    payment_id    bigserial primary key,
    payment_sum numeric (15,2),
    payment_body_sum numeric (15,2),
    payment_percent_sum numeric (15,2),
    credit_offer_id bigint constraint credit_offer_id_fk references credit_offer
);
comment on table client is 'Платеж по кредиту';
comment on column payment.payment_sum is 'Сумма платежа';
comment on column payment.payment_body_sum is 'Сумма гашения тела кредита';
comment on column payment.payment_percent_sum is 'Сумма гашения процентов пот кредитам';
comment on column payment.credit_offer_id is 'Кредитное предложение';