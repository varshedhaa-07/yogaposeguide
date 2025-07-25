package com.example.yogaposeguide.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Progress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate completedOn;

    private String status;  // e.g., "GOING_TO_START", "COMPLETED"

    @ManyToOne
    @JoinColumn(name = "user_id")
    private RegisterDetails user;

    @ManyToOne
    @JoinColumn(name = "pose_id")
    private YogaPoses poses;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getCompletedOn() {
        return completedOn;
    }

    public void setCompletedOn(LocalDate completedOn) {
        this.completedOn = completedOn;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public RegisterDetails getUser() {
        return user;
    }

    public void setUser(RegisterDetails user) {
        this.user = user;
    }

    public YogaPoses getPoses() {
        return poses;
    }

    public void setPoses(YogaPoses poses) {
        this.poses = poses;
    }
}
