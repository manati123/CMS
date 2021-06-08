package com.example.demo.service.user.commitee;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CommitteeMemberDto {
    private Long Id;
    private Long userId;
    private Long conferenceId;
    /*
    should we also add reviews - a better idea might be to retrieve them separately from the
    service, such that less information is loaded for a simple "get member request"
     */
}
