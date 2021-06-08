package com.example.demo.service.conference;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@AllArgsConstructor
public class ConferenceDto {
    private Long conferenceId;
    private String name;
    private Long proposalDeadline;
    private Long reviewDeadline;
}

