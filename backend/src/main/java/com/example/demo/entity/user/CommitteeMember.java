package com.example.demo.entity.user;

import com.example.demo.entity.Conference;
import com.example.demo.entity.Proposal;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.UsesSunHttpServer;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "COMMITTEE")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommitteeMember {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long committeeMemberId;
    @OneToOne
    @JoinColumn(name = "userId")
    private User user;
    @ManyToOne
    @JoinColumn(name = "conferenceId")
    private Conference conference;
}
