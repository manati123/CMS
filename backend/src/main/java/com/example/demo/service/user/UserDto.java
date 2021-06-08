package com.example.demo.service.user;

import com.example.demo.service.mapper.Dto;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserDto{
    Long userId;
    private String username;
    private String password;
}
