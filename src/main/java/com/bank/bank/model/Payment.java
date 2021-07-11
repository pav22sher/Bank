package com.bank.bank.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * Платеж в банке
 */
@Entity
@Table(name = "payment", schema = "haulmont")
@Data
public class Payment {
    @Id
    @Column(name = "payment_id")
    private Long id;

    @Column(name = "payment_sum", columnDefinition = "numeric(15,2)")
    private BigDecimal sum;

    @Column(name = "payment_body_sum", columnDefinition = "numeric(15,2)")
    private BigDecimal bodySum;

    @Column(name = "payment_percent_sum", columnDefinition = "numeric(15,2)")
    private BigDecimal percentSum;

    @ManyToOne
    @JoinColumn(name = "credit_offer_id")
    private CreditOffer creditOffer;
}
