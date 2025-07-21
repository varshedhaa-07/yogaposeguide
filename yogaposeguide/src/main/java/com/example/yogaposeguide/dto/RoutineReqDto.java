package com.example.yogaposeguide.dto;

import java.util.Set;

public class RoutineReqDto {
    private Long userId;
    private Set<Long> poseIds;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Set<Long> getPoseIds() {
        return poseIds;
    }

    public void setPoseIds(Set<Long> poseIds) {
        this.poseIds = poseIds;
    }
}
