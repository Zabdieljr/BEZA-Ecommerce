package com.bezahive.bezaecommerce.repositories;

import com.bezahive.bezaecommerce.domain.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

//@CrossOrigin("http://localhost:4200")

// add RepositoryRestResource annotation, it exposes the path, open to 8080
@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product, Long> {
    // add find by category id pageable @Param("id") Long id, Pageable pageable
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);

    // add find by name containing @Param("name") String name, Pageable pageable
    Page<Product> findByNameContaining(@Param("name") String name, Pageable pageable);


}
