package com.example.demo.service.presentation;


import com.example.demo.entity.Presentation;
import com.example.demo.repository.PresentationRepository;
import com.example.demo.service.mapper.presentation.PresentationMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PresentationServiceImpl implements PresentationService{

    private final PresentationRepository presentationRepository;
    private final PresentationMapper presentationMapper;

    @Override
    public PresentationDto savePresentation(final PresentationDto presentationDto) {
        Presentation presentationEntity = presentationMapper.toEntity(presentationDto);
        return presentationMapper.toService(presentationRepository.save(presentationEntity));
    }

    @Override
    public void deletePresentation(PresentationDto presentationDto) {
        Presentation presentationEntity = presentationMapper.toEntity(presentationDto);
        presentationRepository.delete(presentationEntity);
    }

    @Override
    public void updatePresentation(PresentationDto presentationDto) {
        Presentation presentationEntity = presentationMapper.toEntity(presentationDto);
        presentationRepository.findByPresentationId(presentationEntity.getPresentationId()).ifPresent(presentation -> {
            presentation.setSlidesFile(presentationEntity.getSlidesFile());
        });
    }

    @Override
    public Iterable<PresentationDto> getAllPresentations() {
        List<Presentation> presentationsEntities = presentationRepository.findAll();

        return presentationsEntities.stream()
                .map(presentation -> new PresentationDto(presentation.getPresentationId(), presentation.getSlidesFile()))
                .collect(Collectors.toList());
    }


}
