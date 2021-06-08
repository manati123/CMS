package com.example.demo.service.review;

import com.example.demo.entity.Review;
import com.example.demo.service.review.ReviewDto;

import java.util.List;

public interface ReviewService {
    ReviewDto saveReview(ReviewDto review);
    void deleteReview(Long id);
    Iterable<ReviewDto> getReviews(Long proposalId);
    void updateReview(ReviewDto reviewDto);
}
