package com.example.demo.service.mapper.user;

import com.example.demo.entity.user.Admin;
import com.example.demo.repository.ConferenceRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.mapper.GenericMapper;
import com.example.demo.service.user.admin.AdminDto;
import org.springframework.stereotype.Service;

@Service
public class AdminMapper implements GenericMapper<Admin, AdminDto> {
    public UserRepository userRepository;

    public AdminDto toService(Admin entity){
        return new AdminDto(entity.getAdminId(), entity.getUser().getUserId());
    }

    public Admin toEntity(AdminDto dto){
        //check if it does not exist?
        return new Admin(dto.getId(), userRepository.getOne(dto.getUserID()));
    }

}
