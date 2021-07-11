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
    private String lastName;
    private String firstName;
    private String secondName;
    private String phone;
    private String email;

    public ClientDTO(Client client) {
        this.id = client.getId();
        this.lastName = client.getLastName();
        this.firstName = client.getFirstName();
        this.secondName = client.getSecondName();
        this.phone = client.getPhone();
        this.email = client.getEmail();
    }
}
