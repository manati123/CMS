package com.example.demo.entity.user;

import com.example.demo.entity.Conference;
import com.example.demo.entity.Proposal;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "AUTHOR")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Author {
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Id
    private Long authorId;

    @OneToOne
    @JoinColumn(name = "userId")
    User user;


    @ManyToMany(mappedBy = "authorList",cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    List<Proposal> proposalList;

    @ManyToOne
    @JoinColumn(name = "conferenceId")
    private Conference conference;
}
