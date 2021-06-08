package com.example.demo.service.proposal;

import com.example.demo.entity.user.Author;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
public class ProposalDto {
    private Long proposalId;
    private String name, paper;
    private ArrayList<String> keywords, topics;
    private List<Long> authorsId;
    private Long conferenceId;
}

