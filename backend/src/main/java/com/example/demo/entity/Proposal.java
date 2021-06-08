package com.example.demo.entity;

import com.example.demo.entity.user.Author;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "PROPOSAL")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Proposal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long proposalId;
    private String name, paper;
    private ArrayList<String> keywords, topics;

    @ManyToOne
    @JoinColumn(name = "conferenceId")
    private Conference conference;
    @ManyToMany( cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "author_proposal_list",
            joinColumns = @JoinColumn(name = "proposalId"),
            inverseJoinColumns = @JoinColumn(name = "authorId"))
    private List<Author> authorList;
}
