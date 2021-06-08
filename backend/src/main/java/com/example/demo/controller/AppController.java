package com.example.demo.controller;

import com.example.demo.config.CustomAuthenticationProvider;
import com.example.demo.entity.Conference;
import com.example.demo.entity.UserRoles;
import com.example.demo.service.conference.ConferenceDto;
import com.example.demo.service.user.UserDto;
import com.example.demo.service.user.UserService;
import com.example.demo.service.user.AuthenticatedUserDto;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/app")
@AllArgsConstructor
public class AppController {

    private final UserService userService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping({ "/hello"})
    public String callApp() {
        return "Hello World";
    }



    @PreAuthorize("hasAuthority('USER')")
    @GetMapping("/conferenceAuthorities")
    public ResponseEntity<?>  changeConferenceAuthorities(@RequestParam Long conferenceId ) {
        var auth = SecurityContextHolder.getContext().getAuthentication();


        String username = auth.getName();
        boolean isAuthor = this.userService.isUserAuthorForConference(username,conferenceId);
        boolean isCommitteeMember = this.userService.isUserCommitteeMemberForConference(username,conferenceId);

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(UserRoles.USER.toString()));
        if(isAuthor)
            authorities.add(new SimpleGrantedAuthority(UserRoles.AUTHOR.toString()));
        if(isCommitteeMember)
            authorities.add(new SimpleGrantedAuthority(UserRoles.COMMITTEE_MEMBER.toString()));

        if ( auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals(UserRoles.ADMIN.toString())))
            authorities.add(new SimpleGrantedAuthority(UserRoles.ADMIN.toString()));

        Authentication newAuth = new UsernamePasswordAuthenticationToken(auth.getName(), auth.getCredentials(),authorities);
        SecurityContextHolder.getContext().setAuthentication(newAuth);


        return new ResponseEntity<>( newAuth.getAuthorities().stream().map(Object::toString).collect(Collectors.toList()),HttpStatus.OK);

    }

}
