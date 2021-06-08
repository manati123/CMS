package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "PRESENTATION")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Presentation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long presentationId;

    private String slidesFile;


}
