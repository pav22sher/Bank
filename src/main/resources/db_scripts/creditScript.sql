create table credit
(
    credit_id bigserial primary key,
    credit_limit numeric(15,2),
    credit_rate numeric (4,2)
);
comment on table credit is 'Кредит';
comment on column credit.credit_limit is 'Лимит';
comment on column credit.credit_rate is 'Ставка'