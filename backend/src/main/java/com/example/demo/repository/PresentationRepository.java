package com.example.demo.repository;

import com.example.demo.entity.Presentation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PresentationRepository extends JpaRepository <Presentation, Long>{
    Optional<Presentation> findByPresentationId(Long presentationId);
}
