package com.example.demo.service.conference;

import com.example.demo.entity.Conference;
import com.example.demo.entity.Presentation;
import com.example.demo.entity.Review;
import com.example.demo.repository.ConferenceRepository;
import com.example.demo.repository.PresentationRepository;
import com.example.demo.service.mapper.conference.ConferenceMapper;
import com.example.demo.service.presentation.PresentationDto;
import com.example.demo.service.presentation.PresentationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ConferenceServiceImpl implements ConferenceService {

    private final ConferenceRepository conferenceRepository;
    private final ConferenceMapper conferenceMapper;

    @Override
    public Iterable<ConferenceDto> getAllConferences() {
        List<Conference> conferencesEntities = conferenceRepository.findAll();



        return conferencesEntities.stream()
                .map(conference -> new ConferenceDto(conference.getConferenceId(), conference.getName(),ZonedDateTime.of(conference.getProposalDeadline(), ZoneId.systemDefault()).toInstant().toEpochMilli(),ZonedDateTime.of(conference.getReviewDeadline(), ZoneId.systemDefault()).toInstant().toEpochMilli()))
                .collect(Collectors.toList());
    }

    @Override
    public ConferenceDto save(ConferenceDto conference) {
        Conference conferenceEntity = conferenceMapper.toEntity(conference);
        return conferenceMapper.toService(this.conferenceRepository.save(conferenceEntity));
    }


}
