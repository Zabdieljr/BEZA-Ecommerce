package com.bezahive.bezaecommerce.repositories;


import com.bezahive.bezaecommerce.domain.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
// add jpa repository
// add RepositoryRestResource annotation, it exposes the path, open to 8080
@RepositoryRestResource(collectionResourceRel = "states", path = "states")

public interface StateRepository extends JpaRepository<State, Integer> {
    // add a method for finding states by country code
    List<State> findByCountryCode(@Param("code") String code);
}
