package com.example.demo.service.mapper.presentation;

import com.example.demo.entity.Presentation;
import com.example.demo.service.presentation.PresentationDto;
import org.springframework.stereotype.Service;

@Service
public class PresentationMapperImpl implements PresentationMapper{
    @Override
    public PresentationDto toService(Presentation entity) {
        return new PresentationDto(entity.getPresentationId(), entity.getSlidesFile());
    }

    @Override
    public Presentation toEntity(PresentationDto dto) {
        return new Presentation(dto.getPresentationId(), dto.getSlidesFile());
    }
}
