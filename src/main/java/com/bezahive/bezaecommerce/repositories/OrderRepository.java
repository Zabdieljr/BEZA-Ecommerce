package com.bezahive.bezaecommerce.repositories;


import com.bezahive.bezaecommerce.domain.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

// add repository annotation rest resorting to the spring framework
@RepositoryRestResource
// add extends JpaRepository Entity, Long
public interface OrderRepository extends JpaRepository<Order, Long> {
    // add a findbycustomeremail method, @Param email, page order pageable
    Page<Order> findByCustomerEmailOrderByDateCreatedDesc(@Param("email") String email, Pageable pageable);
}
