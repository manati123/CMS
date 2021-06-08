package com.example.demo.service.presentation;

public interface PresentationService {
    PresentationDto savePresentation(PresentationDto presentationDto);
    void deletePresentation(PresentationDto presentationDto);
    void updatePresentation(PresentationDto presentationDto);
    Iterable<PresentationDto> getAllPresentations();
}
