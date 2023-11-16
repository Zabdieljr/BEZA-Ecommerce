package com.bezahive.bezaecommerce.repositories;

import com.bezahive.bezaecommerce.domain.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

//@CrossOrigin("http://localhost:4200")
//add cross-origin support
@CrossOrigin("http://localhost:4200")

public interface ProductRepository extends JpaRepository<Product, Long> {
    // add find by category id pageable @Param("id") Long id, Pageable pageable
    // http://localhost:8080/api/products/search/findByCategoryId?id=1
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);


}
