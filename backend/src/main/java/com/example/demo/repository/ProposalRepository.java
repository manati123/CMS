package com.example.demo.repository;

import com.example.demo.entity.Proposal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProposalRepository extends JpaRepository<Proposal, Long> {
    //Optional<User> findByID(String proposalID); - for me it didn't work with this
    Optional<Proposal> findByProposalId(Long proposalID);
    List<Proposal> findAllByConferenceConferenceId(Long conferenceId);
}
