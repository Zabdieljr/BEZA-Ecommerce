package com.bezahive.bezaecommerce.repositories;

import com.bezahive.bezaecommerce.domain.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface CustomerRepository extends JpaRepository<Customer, Long> {

    // add find by email
    Customer findByEmail(String theEmail);



}
