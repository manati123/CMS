package com.example.demo.controller;

import com.example.demo.service.presentation.PresentationDto;
import com.example.demo.service.presentation.PresentationService;
import com.example.demo.service.proposal.ProposalDto;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/presentations")
@AllArgsConstructor
public class PresentationController {

    private final PresentationService presentationService;

    @GetMapping
    public List<PresentationDto> getPresentations(){
        return (List<PresentationDto>) this.presentationService.getAllPresentations();
    }
}
