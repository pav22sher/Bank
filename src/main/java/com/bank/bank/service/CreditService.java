package com.bank.bank.service;

import com.bank.bank.dto.CreditDTO;
import com.bank.bank.dao.CreditRepository;
import com.bank.bank.form.CreditForm;
import com.bank.bank.model.Credit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CreditService {
    @Autowired
    private CreditRepository creditRepository;

    @Transactional(readOnly = true)
    public List<CreditDTO> get() {
        return creditRepository.findAll().stream()
                .map(CreditDTO::new).collect(Collectors.toList());
    }

    public void delete(Long id) {
        creditRepository.deleteById(id);
    }

    public Long save(CreditForm form) {
        Credit credit;
        Long creditId = form.getId();
        if(creditId != null){
            credit = creditRepository.getById(creditId);
        } else{
            credit = new Credit();
        }
        credit.setLimit(form.getLimit());
        credit.setRate(form.getRate());
        creditRepository.saveAndFlush(credit);
        return credit.getId();
    }
}
