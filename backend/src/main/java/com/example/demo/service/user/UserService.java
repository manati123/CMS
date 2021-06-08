package com.example.demo.service.user;

import com.example.demo.entity.user.User;
import com.example.demo.service.review.ReviewDto;

import java.util.Optional;

public interface UserService {
    UserDto saveUser(UserDto admin);

    public Optional<User> findByUsername(String username);

    public boolean isUserAuthorForConference(String userName, Long conferenceId);

    public boolean isUserCommitteeMemberForConference(String userName, Long conferenceId);

    public boolean isUserAdmin(String userName);

    public Iterable<UserDto> getUsers();

}
