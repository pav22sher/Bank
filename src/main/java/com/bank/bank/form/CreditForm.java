package com.bank.bank.form;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class CreditForm {
    private Long id;
    private BigDecimal limit;
    private BigDecimal rate;
}
