package com.example.yogaposeguide.repository;

import com.example.yogaposeguide.models.RegisterDetails;
import com.example.yogaposeguide.models.Routine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RoutineRepository extends JpaRepository<Routine,Long> {
    List<Routine> findByUser(RegisterDetails user);

    @Query("SELECT r FROM Routine r JOIN FETCH r.poses WHERE r.user.id = :userId")
    List<Routine> findRoutinesWithPosesByUserId(@Param("userId") Long userId);


}
