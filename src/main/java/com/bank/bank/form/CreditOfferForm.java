package com.bank.bank.form;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class CreditOfferForm {
    private Long id;
    private Long clientId;
    private Long creditId;
    private BigDecimal sum;
}
