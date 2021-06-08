package com.example.demo.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "REVIEW")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    private String result; //strong accept, accept, weak accept, borderline paper, weak reject, reject and strong reject

    @ManyToOne
    @JoinColumn(name = "proposalId")
    private Proposal proposal;

    private boolean isApproved;

}
