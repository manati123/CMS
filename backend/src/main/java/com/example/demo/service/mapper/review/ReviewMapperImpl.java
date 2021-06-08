package com.example.demo.service.mapper.review;

import com.example.demo.entity.Proposal;
import com.example.demo.entity.Review;
import com.example.demo.repository.ProposalRepository;
import com.example.demo.repository.ReviewRepository;
import com.example.demo.service.review.ReviewDto;
import org.springframework.stereotype.Service;

@Service
public class ReviewMapperImpl implements ReviewMapper{

    private ProposalRepository proposalRepository;;

    @Override
    public ReviewDto toService(Review entity) {
        return new ReviewDto(entity.getReviewId(), entity.getResult(), entity.isApproved(),entity.getProposal().getProposalId());
    }

    @Override
    public Review toEntity(ReviewDto dto) {
        Proposal proposal = proposalRepository.getOne(dto.getProposalId());
        return new Review(dto.getReviewId(), dto.getResult(),proposal, dto.isApproved());
    }
}
