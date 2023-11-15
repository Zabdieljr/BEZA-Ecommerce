package com.bezahive.bezaecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
// add @EnableJpaAuditing
@EnableJpaAuditing
public class BezAecommerceApplication {
    public static void main(String[] args) {
        SpringApplication.run(BezAecommerceApplication.class, args);
    }

}
