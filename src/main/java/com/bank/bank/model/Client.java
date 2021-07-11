package com.bank.bank.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Клиент банка
 */
@Entity
@Table(name = "client", schema = "haulmont")
@Data
public class Client {
    @Id
    @Column(name = "client_id")
    private Long id;

    @Column(name = "client_last_name", length = 100)
    private String lastName;

    @Column(name = "client_first_name", length = 100)
    private String firstName;

    @Column(name = "client_second_name", length = 100)
    private String secondName;

    @Column(name = "client_phone", length = 15)
    private String phone;

    @Column(name = "client_email", length = 100)
    private String email;

    @Column(name = "client_passport_number", length = 100)
    private String passportNumber;

}
