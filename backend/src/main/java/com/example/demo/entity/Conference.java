package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "CONFERENCE")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Conference {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long conferenceId;

    private String name;

    private LocalDateTime proposalDeadline;
    private LocalDateTime reviewDeadline;
}
