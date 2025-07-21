package com.example.yogaposeguide.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Routine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private RegisterDetails user;

    @ManyToMany
    @JoinTable(
            name = "routine_poses",
            joinColumns = @JoinColumn(name = "routine_id"),
            inverseJoinColumns = @JoinColumn(name = "pose_id")
    )
    @JsonIgnore
    private Set<YogaPoses> poses = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public RegisterDetails getUser() {
        return user;
    }

    public void setUser(RegisterDetails user) {
        this.user = user;
    }

    public Set<YogaPoses> getPoses() {
        return poses;
    }

    public void setPoses(Set<YogaPoses> poses) {
        this.poses = poses;
    }

}
