package com.example.demo.service.user;

import com.example.demo.entity.user.User;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.AuthorRepository;
import com.example.demo.repository.CommitteeMemberRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.mapper.GenericMapper;
import com.example.demo.service.mapper.user.AdminMapper;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final AuthorRepository authorRepository;
    private final CommitteeMemberRepository committeeMemberRepository;
    private final AdminRepository adminRepository;
    private final GenericMapper<User, UserDto> userMapper;

    @Override
    public UserDto saveUser(final UserDto admin) {
        User adminEntity = userMapper.toEntity(admin);
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        adminEntity.setPassword(passwordEncoder.encode(adminEntity.getPassword()));
        return userMapper.toService(userRepository.save(adminEntity));
    }

    public Optional<User> findByUsername( String username){
        return this.userRepository.findByUsername(username);
    }

    public boolean isUserAuthorForConference(String userName, Long conferenceId){
        return this.authorRepository.existsByConferenceConferenceIdAndUserUsername(conferenceId,userName);
    }

    public boolean isUserCommitteeMemberForConference(String userName, Long conferenceId){
        return this.committeeMemberRepository.existsByConferenceConferenceIdAndUserUsername(conferenceId,userName);
    }

    public boolean isUserAdmin(String userName){
        return this.adminRepository.existsAdminByUserUsername(userName);
    }

    @Override
    public Iterable<UserDto> getUsers() {
        return userRepository.findAll().stream().
                map(this.userMapper::toService)
                .collect(Collectors.toList());
    }

}
