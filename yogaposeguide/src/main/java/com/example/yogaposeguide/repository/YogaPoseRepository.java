package com.example.yogaposeguide.repository;

import com.example.yogaposeguide.models.YogaPoses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface YogaPoseRepository extends JpaRepository<YogaPoses,Long> {
}
