package com.example.yogaposeguide.dto;

import lombok.Data;

@Data
public class StatusUpdateDto {
    private String status;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
