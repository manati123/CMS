package com.example.demo.repository;

import com.example.demo.entity.user.Admin;
import com.example.demo.entity.user.Author;
import com.example.demo.entity.user.CommitteeMember;
import com.example.demo.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CommitteeMemberRepository extends JpaRepository<CommitteeMember, Long> {
    //Optional<CommitteeMember> findById(Long Id);
    Optional<CommitteeMember> findByUser(User user);
    boolean existsByConferenceConferenceIdAndUserUsername(Long conference_id, String user_username);

}
