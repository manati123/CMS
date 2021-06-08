package com.example.demo.service.review;


import com.example.demo.entity.Review;
import com.example.demo.repository.ReviewRepository;
import com.example.demo.service.mapper.review.ReviewMapper;
import com.example.demo.service.review.ReviewDto;
import com.example.demo.service.review.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final ReviewMapper reviewMapper;

    @Override
    public ReviewDto saveReview(final ReviewDto review) {
        Review reviewEntity = reviewMapper.toEntity(review);
        return reviewMapper.toService(reviewRepository.save(reviewEntity));
    }

    @Override
    public void deleteReview(Long id) {
        this.reviewRepository.deleteById(id);
    }

    @Override
    public Iterable<ReviewDto> getReviews(Long proposalId) {
        return this.reviewRepository.findAllByProposalProposalId(proposalId).stream().
                map(this.reviewMapper::toService)
                .collect(Collectors.toList());
    }

    @Override
    public void updateReview(ReviewDto reviewDto) {
        Review review = this.reviewMapper.toEntity(reviewDto);
        this.reviewRepository.findByReviewId(reviewDto.getReviewId()).ifPresent(review1 -> {
            review1.setResult(reviewDto.getResult());
            review1.setApproved(reviewDto.isApproved());
        });
    }


}
