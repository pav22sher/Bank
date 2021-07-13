package com.bank.bank.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * Кредитное предложение банка
 */
@Entity
@Table(name = "credit_offer", schema = "haulmont")
@Data
public class CreditOffer {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "credit_offer_seq")
    @SequenceGenerator(name = "credit_offer_seq", sequenceName = "credit_offer_credit_offer_id_seq", allocationSize = 1)
    @Column(name = "credit_offer_id", updatable = false, insertable = false, nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    @ManyToOne
    @JoinColumn(name = "credit_id")
    private Credit credit;

    @Column(name = "credit_offer_sum", columnDefinition = "numeric(15,2)")
    private BigDecimal sum;
}
