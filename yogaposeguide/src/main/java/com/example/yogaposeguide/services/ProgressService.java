//package com.example.yogaposeguide.services;
//
//import com.example.yogaposeguide.models.Progress;
//import com.example.yogaposeguide.models.RegisterDetails;
//import com.example.yogaposeguide.repository.ProgressRepository;
//import com.example.yogaposeguide.repository.RegisterDetailsRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDate;
//import java.util.List;
//
//@Service
//public class ProgressService {
//
//    @Autowired
//    ProgressRepository progressRepository;
//
//    @Autowired
//    RegisterDetailsRepository userRepository;
//
//    public Progress markProgress(Progress progress) {
//        progress.setCompletedOn(LocalDate.now());
//        return progressRepository.save(progress);
//    }
//
//    public List<Progress> getProgressByUser(int userId) {
//        RegisterDetails user = userRepository.findById(userId)
//                .orElseThrow(() -> new RuntimeException("User not found"));
//        return progressRepository.findByUser(user);
//    }
//}
