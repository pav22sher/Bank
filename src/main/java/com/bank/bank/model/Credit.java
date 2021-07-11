package com.bank.bank.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;

/**
 * Кредит банка
 */
@Entity
@Table(name = "credit", schema = "haulmont")
@Data
public class Credit {
    @Id
    @Column(name = "credit_id")
    private Long id;

    @Column(name = "credit_limit", columnDefinition = "numeric(15,2)")
    private BigDecimal limit;

    @Column(name = "credit_rate", columnDefinition = "numeric(4,2)")
    private BigDecimal rate;

}
