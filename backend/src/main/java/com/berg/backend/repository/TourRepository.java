package com.berg.backend.repository;

import com.berg.backend.model.Difficulty;
import com.berg.backend.model.Tour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TourRepository extends JpaRepository<Tour, Long> {
    List<Tour> findByGuideId(Long guideId);

    List<Tour> findByDifficulty(Difficulty difficulty);

    List<Tour> findByLocationContainingIgnoreCase(String location);
}
