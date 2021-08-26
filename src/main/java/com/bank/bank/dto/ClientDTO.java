package com.bank.bank.dto;

import com.bank.bank.model.Client;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO Клиента
 */
@Data
@NoArgsConstructor
public class ClientDTO {
    private Long id;
    private String fullName;
    private String lastName;
    private String firstName;
    private String secondName;
    private String phone;
    private String email;
    private String passportNumber;

    public ClientDTO(Client client) {
        this.id = client.getId();
        this.fullName = client.getLastName() + " " + client.getFirstName() + " " + client.getSecondName();
        this.lastName = client.getLastName();
        this.firstName = client.getFirstName();
        this.secondName = client.getSecondName();
        this.phone = client.getPhone();
        this.email = client.getEmail();
        this.passportNumber = client.getPassportNumber();
    }
}
