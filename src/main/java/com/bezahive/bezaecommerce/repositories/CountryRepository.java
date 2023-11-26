package com.bezahive.bezaecommerce.repositories;
import com.bezahive.bezaecommerce.domain.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;


// add repository annotation
@Repository
// add jpa repository
// add cross-origin support
@CrossOrigin("http://localhost:4200")

// add RepositoryRestResource annotation
@RepositoryRestResource(collectionResourceRel = "countries", path = "countries")

public interface CountryRepository extends JpaRepository<Country, Integer> {




}
