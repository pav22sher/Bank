package com.bank.bank.service;

import com.bank.bank.dto.ClientDTO;
import com.bank.bank.dao.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    @Transactional(readOnly = true)
    public List<ClientDTO> get() {
        return clientRepository.findAll().stream()
                .map(ClientDTO::new).collect(Collectors.toList());
    }

    public void delete(Long id) {
        clientRepository.deleteById(id);
    }
}
