package com.example.yogaposeguide.repository;

import com.example.yogaposeguide.models.RegisterDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RegisterDetailsRepository extends JpaRepository<RegisterDetails,Long> {
    Optional<RegisterDetails> findByUserName(String username);
}
