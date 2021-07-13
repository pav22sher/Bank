package com.bank.bank.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * Кредит банка
 */
@Entity
@Table(name = "credit", schema = "haulmont")
@Data
public class Credit {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "credit_seq")
    @SequenceGenerator(name = "credit_seq", sequenceName = "credit_credit_id_seq", allocationSize = 1)
    @Column(name = "credit_id", updatable = false, insertable = false, nullable = false)
    private Long id;

    @Column(name = "credit_limit", columnDefinition = "numeric(15,2)")
    private BigDecimal limit;

    @Column(name = "credit_rate", columnDefinition = "numeric(4,2)")
    private BigDecimal rate;

}
