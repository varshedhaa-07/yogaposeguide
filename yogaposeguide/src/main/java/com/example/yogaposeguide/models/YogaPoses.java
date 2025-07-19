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
    private int poseId;
    private String poseName;
    private String poseDes;
    private String benefits;
    private String imgUrl;
    private String difficulty;

    public int getPoseId() {
        return poseId;
    }

    public void setPoseId(int poseId) {
        this.poseId = poseId;
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
}
