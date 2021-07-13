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
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "payment_seq")
    @SequenceGenerator(name = "payment_seq", sequenceName = "payment_payment_id_seq", allocationSize = 1)
    @Column(name = "payment_id", updatable = false, insertable = false, nullable = false)
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
