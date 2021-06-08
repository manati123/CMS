package com.example.demo.entity.user;

import com.example.demo.entity.Conference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "ADMIN")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admin {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long adminId;
    @OneToOne
    @JoinColumn(name = "userId")
    User user;
}
