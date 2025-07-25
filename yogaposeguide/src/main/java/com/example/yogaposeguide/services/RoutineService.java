package com.example.yogaposeguide.services;

import com.example.yogaposeguide.dto.RoutineReqDto;
import com.example.yogaposeguide.models.RegisterDetails;
import com.example.yogaposeguide.dto.RoutineDto;
import com.example.yogaposeguide.models.YogaPoses;
import com.example.yogaposeguide.repository.RegisterDetailsRepository;
import com.example.yogaposeguide.repository.RoutineRepository;
import com.example.yogaposeguide.repository.YogaPoseRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.yogaposeguide.models.Routine;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class RoutineService {

    @Autowired
    RoutineRepository routineRepository;

    @Autowired
    RegisterDetailsRepository userRepository;

    @Autowired
    YogaPoseRepository yogaPoseRepository;


    public RoutineDto addRoutine(RoutineReqDto request) {
        RegisterDetails user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Set<YogaPoses> poses = request.getPoseIds().stream()
                .map(id -> yogaPoseRepository.findById(id)
                        .orElseThrow(() -> new RuntimeException("Pose not found with id: " + id)))
                .collect(Collectors.toSet());


        Routine routine = new Routine();
        routine.setUser(user);
        routine.setPoses(poses);

        Routine saved = routineRepository.save(routine);
        return new RoutineDto(saved);
    }


    public List<RoutineDto> getRoutineByUser(Long userId) {
        RegisterDetails user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Routine> routines = routineRepository.findByUser(user);

        return routines.stream()
                .map(RoutineDto::new)
                .collect(Collectors.toList());
    }



    public Routine updateRoutine(Long id, RoutineReqDto request) {
        Routine existing = routineRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Routine not found"));

        Set<YogaPoses> updatedPoses = request.getPoseIds().stream()
                .map(poseId -> yogaPoseRepository.findById(poseId)
                        .orElseThrow(() -> new RuntimeException("Pose not found")))
                .collect(Collectors.toSet());

        existing.setPoses(updatedPoses);
        return routineRepository.save(existing);
    }




    public String deleteRoutine(Long id) {
        routineRepository.deleteById(id);
        return "Routine deleted successfully";
    }
}
