package com.example.demo.service.mapper.review;

import com.example.demo.entity.Review;
import com.example.demo.service.review.ReviewDto;

public interface ReviewMapper {
    ReviewDto toService(Review entity);
    Review toEntity(ReviewDto dto);
}
