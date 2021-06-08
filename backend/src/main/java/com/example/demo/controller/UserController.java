package com.example.demo.controller;
import com.example.demo.config.CustomAuthenticationProvider;
import com.example.demo.service.review.ReviewDto;
import com.example.demo.service.review.ReviewService;
import com.example.demo.service.user.AuthenticatedUserDto;
import com.example.demo.service.user.UserDto;
import com.example.demo.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {

    private final UserService userService;
    private final CustomAuthenticationProvider customAuthProvider;


    @GetMapping
    public List<UserDto> getUsers(){
        return (List<UserDto>) this.userService.getUsers();
    }

    @PostMapping({"/createAdmin"})
    public ResponseEntity<UserDto> addAdmin(@RequestBody UserDto admin) {
        UserDto savedUser = userService.saveUser(admin);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDto admin) {
        try {
            UsernamePasswordAuthenticationToken user = new UsernamePasswordAuthenticationToken(
                    admin.getUsername(),
                    admin.getPassword());
            AuthenticatedUserDto loggedInUser = customAuthProvider.doAuthenticate(user);


            return new ResponseEntity<>(loggedInUser, HttpStatus.OK);
        } catch (BadCredentialsException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
