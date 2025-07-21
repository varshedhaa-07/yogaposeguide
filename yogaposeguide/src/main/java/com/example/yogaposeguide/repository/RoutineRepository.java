package com.example.yogaposeguide.repository;

import com.example.yogaposeguide.models.RegisterDetails;
import com.example.yogaposeguide.models.Routine;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoutineRepository extends JpaRepository<Routine,Long> {
    List<Routine> findByUser(RegisterDetails user);
}
