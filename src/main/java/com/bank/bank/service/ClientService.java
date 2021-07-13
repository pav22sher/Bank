package com.bank.bank.service;

import com.bank.bank.dto.ClientDTO;
import com.bank.bank.dao.ClientRepository;
import com.bank.bank.form.ClientForm;
import com.bank.bank.model.Client;
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

    public Long save(ClientForm form) {
        Client client;
        Long clientId = form.getId();
        if(clientId != null){
            client = clientRepository.getById(clientId);
        } else{
            client = new Client();
        }
        client.setLastName(form.getLastName());
        client.setFirstName(form.getFirstName());
        client.setSecondName(form.getSecondName());
        client.setPhone(form.getPhone());
        client.setEmail(form.getEmail());
        client.setPassportNumber(form.getPassportNumber());
        clientRepository.saveAndFlush(client);
        return client.getId();
    }
}
