package com.example.demo.service.user;

import lombok.Data;

import java.util.List;

@Data
public class AuthenticatedUserDto {
    private Long userId;
    private String username;
    private List<String> roles;
}
