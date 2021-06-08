package com.example.demo.repository;

import com.example.demo.entity.user.Admin;
import com.example.demo.entity.user.Author;
import com.example.demo.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
    //Optional<Author> findById(Long Id);
    Optional<Author> findByUser(User user);
    boolean existsByConferenceConferenceIdAndUserUsername(Long conference_id, String user_username);
    boolean existsByUserUserIdAndConferenceConferenceId(Long user_userId, Long conference_conferenceId);
    Author getByUserUserIdAndConferenceConferenceId(Long user_userId, Long conference_conferenceId);
}
