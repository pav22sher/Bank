package com.bank.bank.dto;

import com.bank.bank.model.Client;
import com.bank.bank.model.Credit;
import com.bank.bank.model.CreditOffer;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/**
 * DTO Кредитное предложение
 */
@Data
@NoArgsConstructor
public class CreditOfferDTO {
    private Long id;
    private Long clientId;
    private String client;
    private Long creditId;
    private String credit;
    private BigDecimal sum;

    public CreditOfferDTO(CreditOffer creditOffer) {
        this.id = creditOffer.getId();
        Client client = creditOffer.getClient();
        if (client != null) {
            this.clientId = client.getId();
            this.client = client.getLastName() + " " + client.getFirstName() + " " + client.getSecondName();
        }
        Credit credit = creditOffer.getCredit();
        if(credit != null){
            this.creditId = credit.getId();
            this.credit = credit.getRate() + "%";
        }
        this.sum = creditOffer.getSum();
    }
}
