package com.bank.bank.service;

import com.bank.bank.dto.CreditDTO;
import com.bank.bank.dao.CreditRepository;
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
}
