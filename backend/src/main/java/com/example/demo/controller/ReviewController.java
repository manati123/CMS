package com.example.demo.controller;


import com.example.demo.service.review.ReviewDto;
import com.example.demo.service.review.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
@AllArgsConstructor
public class ReviewController  {

    private final ReviewService reviewService;


    @GetMapping
    public List<ReviewDto> getReviews(@RequestParam Long proposalId){
        return (List<ReviewDto>) this.reviewService.getReviews(proposalId);
    }

    @PostMapping
    public ResponseEntity<ReviewDto> addReview(@RequestBody ReviewDto review){
        var savedReview = this.reviewService.saveReview(review);
        return new ResponseEntity<>(savedReview, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteReview(@PathVariable Long id){
        try{
            this.reviewService.deleteReview(id);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> updateReview(@RequestBody ReviewDto reviewDto){
        try{
            this.reviewService.updateReview(reviewDto);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
