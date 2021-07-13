package com.bank.bank.form;

import lombok.Data;

@Data
public class ClientForm {
    private Long id;
    private String lastName;
    private String firstName;
    private String secondName;
    private String phone;
    private String email;
    private String passportNumber;
}
