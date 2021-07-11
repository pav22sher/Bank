package com.bank.bank.controller;

import com.bank.bank.dto.ClientDTO;
import com.bank.bank.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
public class ClientController {
    @Autowired
    private ClientService clientService;

    @GetMapping
    public List<ClientDTO> get() {
        return clientService.get();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        clientService.delete(id);
    }
}
