package com.example.demo.service.review;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReviewDto {
    private Long reviewId;
    private String result;
    private boolean isApproved;
    private Long proposalId;
}
