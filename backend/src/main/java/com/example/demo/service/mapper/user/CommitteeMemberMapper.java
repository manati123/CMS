package com.example.demo.service.mapper.user;

import com.example.demo.entity.user.CommitteeMember;
import com.example.demo.repository.ConferenceRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.mapper.GenericMapper;
import com.example.demo.service.user.commitee.CommitteeMemberDto;
import org.springframework.stereotype.Service;

@Service
public class CommitteeMemberMapper implements GenericMapper<CommitteeMember, CommitteeMemberDto> {
    public UserRepository userRepository;
    public ConferenceRepository conferenceRepository;

    @Override
    public CommitteeMemberDto toService(CommitteeMember entity) {
        return new CommitteeMemberDto(entity.getCommitteeMemberId(), entity.getUser().getUserId(), entity.getConference().getConferenceId());
    }

    @Override
    public CommitteeMember toEntity(CommitteeMemberDto dto) {
        return new CommitteeMember(dto.getId(), userRepository.getOne(dto.getUserId()), conferenceRepository.getOne(dto.getConferenceId()));
    }
}
