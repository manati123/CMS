package com.example.demo.service.presentation;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PresentationDto {
    private Long presentationId;
    private String slidesFile;
}
