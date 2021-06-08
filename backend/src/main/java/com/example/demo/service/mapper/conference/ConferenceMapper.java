package com.example.demo.service.mapper.conference;

import com.example.demo.entity.Conference;
import com.example.demo.repository.ConferenceRepository;
import com.example.demo.service.conference.ConferenceDto;
import com.example.demo.service.mapper.GenericMapper;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.TimeZone;

@Service

public class ConferenceMapper  implements GenericMapper<Conference, ConferenceDto> {
    public ConferenceRepository conferenceRepository;

    public ConferenceDto toService(Conference entity){
        return new ConferenceDto(entity.getConferenceId(), entity.getName(), ZonedDateTime.of(entity.getProposalDeadline(), ZoneId.systemDefault()).toInstant().toEpochMilli(),ZonedDateTime.of(entity.getReviewDeadline(), ZoneId.systemDefault()).toInstant().toEpochMilli());
    }

    public Conference toEntity(ConferenceDto dto){
        return new Conference(dto.getConferenceId(), dto.getName(),
                LocalDateTime.ofInstant(Instant.ofEpochMilli(dto.getProposalDeadline()), TimeZone.getDefault().toZoneId()),
                LocalDateTime.ofInstant(Instant.ofEpochMilli(dto.getReviewDeadline()),TimeZone.getDefault().toZoneId()));


        //LocalDateTime.ofInstant(Instant.ofEpochMilli(dto.getProposalDeadline()),TimeZone.getDefault().toZoneId()
    }
}
