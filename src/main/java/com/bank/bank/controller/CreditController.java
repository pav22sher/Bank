package com.bank.bank.controller;

import com.bank.bank.dto.CreditDTO;
import com.bank.bank.service.CreditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/credit")
public class CreditController {
    @Autowired
    private CreditService creditService;

    @GetMapping
    public List<CreditDTO> get() {
        return creditService.get();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        creditService.delete(id);
    }
}
