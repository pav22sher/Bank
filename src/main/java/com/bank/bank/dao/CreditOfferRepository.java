package com.bank.bank.dao;

import com.bank.bank.model.CreditOffer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreditOfferRepository extends JpaRepository<CreditOffer, Long> {
}
