package com.example.yogaposeguide.controllers;

import com.example.yogaposeguide.dto.ProgressRequestDto;
import com.example.yogaposeguide.dto.StatusUpdateDto;
import com.example.yogaposeguide.models.Progress;
import com.example.yogaposeguide.services.ProgressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/progress")
public class ProgressController {

    @Autowired
    ProgressService progressService;

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PostMapping("/mark")
    public Progress markProgress(@RequestBody ProgressRequestDto progress) {
        return progressService.markProgress(progress);
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("/user/{userId}")
    public List<Progress> getProgressByUser(@PathVariable Long userId,
                                            @RequestParam(required = false) String status) {
        if (status != null) {
            return progressService.getProgressByUserAndStatus(userId, status);
        }
        return progressService.getProgressByUser(userId);
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PutMapping("/update/{progressId}")
    public Progress updateProgressStatus(@PathVariable Long progressId, @RequestBody StatusUpdateDto updateDto) {
        return progressService.updateProgressStatus(progressId, updateDto.getStatus());
    }

}
