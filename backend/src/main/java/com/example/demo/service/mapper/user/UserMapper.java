package com.example.demo.service.mapper.user;

import com.example.demo.entity.user.User;
import com.example.demo.service.mapper.GenericMapper;
import com.example.demo.service.user.UserDto;
import org.springframework.stereotype.Service;

@Service
public
class UserMapper implements GenericMapper<User, UserDto> {
    @Override
    public UserDto toService(User entity) {
        return new UserDto(entity.getUserId(), entity.getUsername(), entity.getPassword());
    }

    @Override
    public User toEntity(UserDto dto) {
        return new User(dto.getUserId(), dto.getUsername(), dto.getPassword());
    }
}
