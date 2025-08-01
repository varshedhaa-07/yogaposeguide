package com.example.yogaposeguide.dto;

import com.example.yogaposeguide.models.Routine;
import com.example.yogaposeguide.models.YogaPoses;

import java.util.Set;
import java.util.stream.Collectors;

public class RoutineDto {
    private Long id;
    private String username;
    private Set<PoseDto> poses;

    public RoutineDto() {}

    public RoutineDto(Routine routine) {
        if (routine != null) {
            this.id = routine.getId();

            if (routine.getUser() != null) {
                this.username = routine.getUser().getUserName();
            }

            if (routine.getPoses() != null) {
                this.poses = routine.getPoses().stream()
                        .map(PoseDto::new)
                        .collect(Collectors.toSet());
            }
        }
    }

    // Inner DTO for pose
    public static class PoseDto {
        private Long id;
        private String poseName;
        private String imgUrl;
        private String difficulty;

        public PoseDto(YogaPoses pose) {
            this.id = pose.getId();
            this.poseName = pose.getPoseName();
            this.imgUrl = pose.getImgUrl();
            this.difficulty = pose.getDifficulty();
        }

        public Long getId() { return id; }
        public String getPoseName() { return poseName; }
        public String getImgUrl() { return imgUrl; }
        public String getDifficulty() { return difficulty; }
    }

    // Getters
    public Long getId() { return id; }
    public String getUsername() { return username; }
    public Set<PoseDto> getPoses() { return poses; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setUsername(String username) { this.username = username; }
    public void setPoses(Set<PoseDto> poses) { this.poses = poses; }
}
