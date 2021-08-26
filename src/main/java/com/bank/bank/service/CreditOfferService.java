package com.bank.bank.service;

import com.bank.bank.dao.ClientRepository;
import com.bank.bank.dao.CreditOfferRepository;
import com.bank.bank.dao.CreditRepository;
import com.bank.bank.dto.CreditOfferDTO;
import com.bank.bank.form.CreditOfferForm;
import com.bank.bank.model.CreditOffer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CreditOfferService {
    @Autowired
    private CreditOfferRepository creditOfferRepository;
    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private CreditRepository creditRepository;

    @Transactional(readOnly = true)
    public List<CreditOfferDTO> get() {
        return creditOfferRepository.findAll().stream()
                .map(CreditOfferDTO::new).collect(Collectors.toList());
    }

    public void delete(Long id) {
        creditOfferRepository.deleteById(id);
    }

    public Long save(CreditOfferForm form) {
        CreditOffer creditOffer;
        Long creditOfferId = form.getId();
        if(creditOfferId != null){
            creditOffer = creditOfferRepository.getById(creditOfferId);
        } else{
            creditOffer = new CreditOffer();
        }
        creditOffer.setClient(clientRepository.getById(form.getClientId()));
        creditOffer.setCredit(creditRepository.getById(form.getCreditId()));
        creditOffer.setSum(form.getSum());
        creditOfferRepository.saveAndFlush(creditOffer);
        return creditOffer.getId();
    }
}
