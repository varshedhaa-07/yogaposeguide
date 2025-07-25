package com.example.yogaposeguide.repository;

import com.example.yogaposeguide.models.Progress;
import com.example.yogaposeguide.models.RegisterDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProgressRepository extends JpaRepository<Progress,Long> {
    List<Progress> findByUser(RegisterDetails user);
    List<Progress> findByUserAndStatus(RegisterDetails user, String status);
}
