package com.example.yogaposeguide.services;

import com.example.yogaposeguide.models.Progress;
import com.example.yogaposeguide.models.RegisterDetails;
import com.example.yogaposeguide.models.YogaPoses;
import com.example.yogaposeguide.repository.ProgressRepository;
import com.example.yogaposeguide.dto.ProgressRequestDto;
import com.example.yogaposeguide.repository.RegisterDetailsRepository;
import com.example.yogaposeguide.repository.YogaPoseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ProgressService {

    @Autowired
    ProgressRepository progressRepository;

    @Autowired
    RegisterDetailsRepository userRepository;

    @Autowired
    YogaPoseRepository yogaPoseRepository;

    public Progress markProgress(ProgressRequestDto request) {
        RegisterDetails user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        YogaPoses pose = yogaPoseRepository.findById(request.getPoseId())
                .orElseThrow(() -> new RuntimeException("Pose not found"));

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

    public List<Progress> getProgressByUserAndStatus(Long userId, String status) {
        RegisterDetails user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return progressRepository.findByUserAndStatus(user, status);
    }

    public Progress updateProgressStatus(Long progressId, String newStatus) {
        Progress progress = progressRepository.findById(progressId)
                .orElseThrow(() -> new RuntimeException("Progress not found"));

        progress.setStatus(newStatus);
        if ("COMPLETED".equalsIgnoreCase(newStatus)) {
            progress.setCompletedOn(LocalDate.now());
        }
        return progressRepository.save(progress);
    }
}
