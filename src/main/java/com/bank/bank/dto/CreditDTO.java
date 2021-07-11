package com.bank.bank.dto;

import com.bank.bank.model.Credit;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/**
 * DTO Кредит
 */
@Data
@NoArgsConstructor
public class CreditDTO {
    private Long id;
    private BigDecimal limit;
    private BigDecimal rate;

    public CreditDTO(Credit credit) {
        this.id = credit.getId();
        this.limit = credit.getLimit();
        this.rate = credit.getRate();
    }
}
