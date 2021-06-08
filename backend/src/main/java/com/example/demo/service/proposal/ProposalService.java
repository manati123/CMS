package com.example.demo.service.proposal;

import com.example.demo.service.presentation.PresentationDto;

import java.util.List;

public interface ProposalService {
    ProposalDto saveProposal(ProposalDto proposal);
    void deleteProposal(Long proposalDtoId);
    void updateProposal(ProposalDto proposalDto);
    Iterable<ProposalDto> getAllProposals(String username,Long conferenceId);
}
