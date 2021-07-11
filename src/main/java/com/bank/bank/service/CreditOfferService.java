package com.bank.bank.service;

import com.bank.bank.dao.CreditOfferRepository;
import com.bank.bank.dto.CreditOfferDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CreditOfferService {
    @Autowired
    private CreditOfferRepository creditOfferRepository;

    @Transactional(readOnly = true)
    public List<CreditOfferDTO> get() {
        return creditOfferRepository.findAll().stream()
                .map(CreditOfferDTO::new).collect(Collectors.toList());
    }

    public void delete(Long id) {
        creditOfferRepository.deleteById(id);
    }
}
