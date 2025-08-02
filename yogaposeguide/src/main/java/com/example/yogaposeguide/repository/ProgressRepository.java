package com.example.yogaposeguide.repository;

import com.example.yogaposeguide.models.Progress;
import com.example.yogaposeguide.models.RegisterDetails;
import com.example.yogaposeguide.models.YogaPoses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public interface ProgressRepository extends JpaRepository<Progress,Long> {
    List<Progress> findByUser(RegisterDetails user);
    List<Progress> findByUserAndStatus(RegisterDetails user, String status);

    Optional<Progress> findByUserAndPosesAndCompletedOn(RegisterDetails user, YogaPoses pose, LocalDate now);


    @Query("SELECT p FROM Progress p WHERE p.user.id = :userId AND p.completedOn = :today AND LOWER(p.status) = 'completed'")
    List<Progress> findCompletedByUserAndDate(@Param("userId") Long userId, @Param("today") LocalDate today);


}
