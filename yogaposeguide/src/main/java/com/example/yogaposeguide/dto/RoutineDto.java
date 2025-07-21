package com.example.yogaposeguide.dto;

import com.example.yogaposeguide.models.Routine;
import com.example.yogaposeguide.models.YogaPoses;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public class RoutineDto {
    private Long id;
    private String username;
    private Set<String> poseNames = new HashSet<>();

    public RoutineDto() {
    }

    public RoutineDto(Routine routine) {
        if (routine != null) {
            this.id = routine.getId();

            if (routine.getUser() != null) {
                this.username = routine.getUser().getUserName();
            }

            if (routine.getPoses() != null) {
                this.poseNames = routine.getPoses().stream()
                        .map(YogaPoses::getPoseName)
                        .collect(Collectors.toSet());
            }
        }
    }


    // Getters
    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public Set<String> getPoseNames() {
        return poseNames;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPoseNames(Set<String> poseNames) {
        this.poseNames = poseNames;
    }

}
