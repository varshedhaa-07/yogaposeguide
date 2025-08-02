package com.example.yogaposeguide.services;

import com.example.yogaposeguide.models.Progress;
import com.example.yogaposeguide.models.RegisterDetails;
import com.example.yogaposeguide.models.YogaPoses;
import com.example.yogaposeguide.models.Routine;
import com.example.yogaposeguide.repository.ProgressRepository;
import com.example.yogaposeguide.dto.ProgressRequestDto;
import com.example.yogaposeguide.repository.RegisterDetailsRepository;
import com.example.yogaposeguide.repository.RoutineRepository;
import com.example.yogaposeguide.repository.YogaPoseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProgressService {

    @Autowired
    private ProgressRepository progressRepository;

    @Autowired
    private RegisterDetailsRepository userRepository;

    @Autowired
    private YogaPoseRepository yogaPoseRepository;

    @Autowired
    private RoutineRepository routineRepository;

    public Progress markProgress(ProgressRequestDto request) {
        RegisterDetails user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        YogaPoses pose = yogaPoseRepository.findById(request.getPoseId())
                .orElseThrow(() -> new RuntimeException("Pose not found"));

        // Check if already recorded today
        Optional<Progress> existing = progressRepository.findByUserAndPosesAndCompletedOn(
                user, pose, LocalDate.now()
        );

        if (existing.isPresent()) {
            Progress progress = existing.get();
            progress.setStatus(request.getStatus());
            if ("COMPLETED".equalsIgnoreCase(request.getStatus())) {
                progress.setCompletedOn(LocalDate.now());
            }
            return progressRepository.save(progress);
        }

        Progress progress = new Progress();
        progress.setUser(user);
        progress.setPoses(pose);
        progress.setStatus(request.getStatus());

        if ("COMPLETED".equalsIgnoreCase(request.getStatus())) {
            progress.setCompletedOn(LocalDate.now());
        }

        return progressRepository.save(progress);
    }

    public List<Progress> getProgressByUser(Long userId) {
        RegisterDetails user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return progressRepository.findByUser(user);
    }


    public Map<String, Object> getUserProgressSummary(Long userId) {
        List<Progress> progressList = getProgressByUser(userId);

        long completed = progressList.stream()
                .filter(p -> "COMPLETED".equalsIgnoreCase(p.getStatus()))
                .count();

        // Group by completion date for history
        Map<LocalDate, Long> dailyCount = progressList.stream()
                .filter(p -> p.getCompletedOn() != null)
                .collect(Collectors.groupingBy(Progress::getCompletedOn, Collectors.counting()));

        Map<String, Object> summary = new HashMap<>();
        summary.put("totalRecords", progressList.size());
        summary.put("completedRecords", completed);
        summary.put("progressByDate", dailyCount); // Useful for weekly graph

        return summary;
    }

    public Map<String, Object> getTodaySummary(Long userId) {
        LocalDate today = LocalDate.now();

        List<Routine> routines = routineRepository.findRoutinesWithPosesByUserId(userId);
        long totalPoses = routines.stream()
                .flatMap(r -> r.getPoses().stream())
                .count();

        long completedPoses = progressRepository.findCompletedByUserAndDate(userId, today).size();

        Map<String, Object> summary = new HashMap<>();
        summary.put("date", today);
        summary.put("totalPoses", totalPoses);
        summary.put("completedPoses", completedPoses);

        return summary;
    }

    public Map<LocalDate, Long> getWeeklyProgress(Long userId) {
        List<Progress> progressList = getProgressByUser(userId);

        LocalDate today = LocalDate.now();
        LocalDate sevenDaysAgo = today.minusDays(6);

        return progressList.stream()
                .filter(p -> p.getCompletedOn() != null)
                .filter(p -> !p.getCompletedOn().isBefore(sevenDaysAgo))
                .collect(Collectors.groupingBy(Progress::getCompletedOn, Collectors.counting()));
    }
}
