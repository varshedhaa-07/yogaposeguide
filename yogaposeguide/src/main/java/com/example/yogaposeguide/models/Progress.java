//package com.example.yogaposeguide.models;
//
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.time.LocalDate;
//
//@Entity
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//public class Progress {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private LocalDate completedOn;
//
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private RegisterDetails user;
//
//    @ManyToOne
//    @JoinColumn(name = "pose_id")
//    private YogaPoses poses;
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public LocalDate getCompletedOn() {
//        return completedOn;
//    }
//
//    public void setCompletedOn(LocalDate completedOn) {
//        this.completedOn = completedOn;
//    }
//
//    public RegisterDetails getUser() {
//        return user;
//    }
//
//    public void setUser(RegisterDetails user) {
//        this.user = user;
//    }
//
//    public YogaPoses getPoses() {
//        return poses;
//    }
//
//    public void setPoses(YogaPoses poses) {
//        this.poses = poses;
//    }
//}
