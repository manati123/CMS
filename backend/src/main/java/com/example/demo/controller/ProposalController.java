package com.example.demo.controller;

import com.example.demo.service.proposal.ProposalDto;
import com.example.demo.service.proposal.ProposalService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/proposals")
@AllArgsConstructor
public class ProposalController {

    private final ProposalService proposalService;

    @GetMapping
    public List<ProposalDto> getProposals(@RequestParam Long conferenceId){
        var auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        return (List<ProposalDto>) proposalService.getAllProposals(username,conferenceId);
    }

    @PostMapping
    public ResponseEntity<?> addProposal(@RequestBody ProposalDto proposalDto){
        ProposalDto createdProposal;
        try{
            proposalService.saveProposal(proposalDto);
        } catch (Exception exception){
            System.out.println(exception.getMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(proposalDto,HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteProposal(@PathVariable long id){
        try{
            proposalService.deleteProposal(id);
        } catch (Exception exception){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> updateProposal( @RequestBody ProposalDto proposalDto){
        try{
            proposalService.updateProposal(proposalDto);
        } catch (Exception exception){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
