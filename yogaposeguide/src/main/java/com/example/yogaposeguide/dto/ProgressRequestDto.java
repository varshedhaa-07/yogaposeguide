package com.example.yogaposeguide.dto;

import lombok.Data;

@Data
public class ProgressRequestDto {
    private Long userId;
    private Long poseId;
    private String status;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getPoseId() {
        return poseId;
    }

    public void setPoseId(Long poseId) {
        this.poseId = poseId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
