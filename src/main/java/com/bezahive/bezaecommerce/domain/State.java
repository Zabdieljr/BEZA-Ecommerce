package com.bezahive.bezaecommerce.domain;


import jakarta.persistence.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Objects;

@Entity
//add entity auditing listener annotation
@EntityListeners(AuditingEntityListener.class)
@Table(name = "state")
public class State {

    // add fields

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "name")
    private String name;





    // add many to one mapping with country

    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;

    // add constructors

    public State() {
    }

    public State(String id, String name) {
        this.id = id;
        this.name = name;
    }

    // add getters and setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // add toString() method

    @Override
    public String toString() {
        return "State{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                '}';
    }


    // add hashcode() and equals() methods


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        State state = (State) o;

        return Objects.equals(id, state.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
