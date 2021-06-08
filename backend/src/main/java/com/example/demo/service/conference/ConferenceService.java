package com.example.demo.service.conference;

import com.example.demo.service.proposal.ProposalDto;

public interface ConferenceService {
        Iterable<ConferenceDto> getAllConferences();
        ConferenceDto save(ConferenceDto conference);
}
