package com.example.yogaposeguide.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class YogaPoses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String poseName;
    private String poseDes;
    private String benefits;
    private String imgUrl;
    private String difficulty;

//    @ManyToMany(mappedBy = "poses")
//    private Set<Routine> routineEntries;


//    @OneToMany(mappedBy = "pose", cascade = CascadeType.ALL)
//    private Set<Routine> progressEntries;

    public Long getId() {
        return id;
    }

    public void setId(Long poseId) {
        this.id= poseId;
    }

    public String getPoseName() {
        return poseName;
    }

    public void setPoseName(String poseName) {
        this.poseName = poseName;
    }

    public String getPoseDes() {
        return poseDes;
    }

    public void setPoseDes(String poseDes) {
        this.poseDes = poseDes;
    }

    public String getBenefits() {
        return benefits;
    }

    public void setBenefits(String benefits) {
        this.benefits = benefits;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

//    public Set<Routine> getRoutineEntries() {
//        return routineEntries;
//    }
//
//    public void setRoutineEntries(Set<Routine> routineEntries) {
//        this.routineEntries = routineEntries;
//    }
}
