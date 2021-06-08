package com.example.demo.service.mapper.presentation;

import com.example.demo.entity.Presentation;
import com.example.demo.service.presentation.PresentationDto;

public interface PresentationMapper {
    PresentationDto toService(Presentation entity);

    Presentation toEntity(PresentationDto dto);
}
