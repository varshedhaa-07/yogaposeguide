package com.example.yogaposeguide.controllers;

import com.example.yogaposeguide.dto.ProgressRequestDto;
import com.example.yogaposeguide.models.Progress;
import com.example.yogaposeguide.services.ProgressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/progress")
public class ProgressController {

    @Autowired
    private ProgressService progressService;

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PostMapping("/mark")
    public Progress markProgress(@RequestBody ProgressRequestDto progress) {
        return progressService.markProgress(progress);
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("/user/{userId}/summary")
    public Map<String, Object> getUserProgressSummary(@PathVariable Long userId) {
        return progressService.getUserProgressSummary(userId);
    }
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("/user/{userId}/today-summary")
    public Map<String, Object> getTodaySummary(@PathVariable Long userId) {
        return progressService.getTodaySummary(userId);
    }
    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("/user/{userId}/weekly")
    public Map<LocalDate, Long> getWeeklyProgress(@PathVariable Long userId) {
        return progressService.getWeeklyProgress(userId);
    }

}
