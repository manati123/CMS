package com.example.demo.controller;

import com.example.demo.service.conference.ConferenceDto;
import com.example.demo.service.conference.ConferenceService;
import com.example.demo.service.proposal.ProposalDto;
import com.example.demo.service.proposal.ProposalService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/conferences")
@AllArgsConstructor
public class ConferenceController {

    private final ConferenceService conferenceService;

    @GetMapping
    public List<ConferenceDto> getConferences(){
        return (List<ConferenceDto>) conferenceService.getAllConferences();
    }

    @PostMapping
    public ResponseEntity<?> addConference(@RequestBody ConferenceDto conferenceDto){
        try{
            this.conferenceService.save(conferenceDto);
        }catch(Exception exception){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(conferenceDto,HttpStatus.OK);
    }

}
