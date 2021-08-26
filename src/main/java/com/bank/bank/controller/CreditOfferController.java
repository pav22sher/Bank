package com.bank.bank.controller;

import com.bank.bank.dto.CreditOfferDTO;
import com.bank.bank.form.CreditForm;
import com.bank.bank.form.CreditOfferForm;
import com.bank.bank.service.CreditOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/credit-offer")
public class CreditOfferController {
    @Autowired
    private CreditOfferService creditOfferService;

    @GetMapping
    public List<CreditOfferDTO> get() {
        return creditOfferService.get();
    }

    @PostMapping
    public Long save(@RequestBody CreditOfferForm form){
        return creditOfferService.save(form);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        creditOfferService.delete(id);
    }
}
