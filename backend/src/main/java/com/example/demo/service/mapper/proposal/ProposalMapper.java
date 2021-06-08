package com.example.demo.service.mapper.proposal;

import com.example.demo.entity.Proposal;
import com.example.demo.service.proposal.ProposalDto;

public interface ProposalMapper {
    ProposalDto toService(Proposal entity);

    Proposal toEntity(ProposalDto dto);

}
