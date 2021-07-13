package com.bank.bank.model;

import lombok.Data;

import javax.persistence.*;

/**
 * Клиент банка
 */
@Entity
@Table(name = "client", schema = "haulmont")
@Data
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "client_seq")
    @SequenceGenerator(name = "client_seq", sequenceName = "client_client_id_seq", allocationSize = 1)
    @Column(name = "client_id", updatable = false, insertable = false, nullable = false)
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
