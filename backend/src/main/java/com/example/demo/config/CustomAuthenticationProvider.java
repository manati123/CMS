package com.example.demo.config;

import com.example.demo.entity.UserRoles;
import com.example.demo.entity.user.User;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.user.AuthenticatedUserDto;
import com.example.demo.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class CustomAuthenticationProvider implements AuthenticationProvider {

    private final UserService userService;

    public AuthenticatedUserDto doAuthenticate(Authentication authentication) {
        authenticate(authentication);
        // user authentication is done
        // get the logged in user from securityContextHolder
        // map the suer to a DTO that frontend can use to know username
        // and roles of logged in user to know what data to show to the user
        AuthenticatedUserDto loggedInUser = new AuthenticatedUserDto();
        loggedInUser.setUsername(SecurityContextHolder.getContext().getAuthentication().getName());
        loggedInUser.setRoles(SecurityContextHolder.getContext().getAuthentication()
                .getAuthorities().stream().map(Object::toString).collect(Collectors.toList()));
        try{
            Optional<User> user = userService.findByUsername(loggedInUser.getUsername());
            Long userId = user.get().getUserId();
            loggedInUser.setUserId(userId);
        } catch( Exception e){
            System.out.println(e.getMessage());
        }

        return loggedInUser;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String userName = authentication.getName();
        String password = authentication.getCredentials().toString();

        Optional<User> user = userService.findByUsername(userName);
        if(user.isPresent() && password.equals( user.get().getPassword())){
            List<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority(UserRoles.USER.toString()));

            boolean isAdmin = this.userService.isUserAdmin(authentication.getName());
            if (isAdmin)
                authorities.add(new SimpleGrantedAuthority(UserRoles.ADMIN.toString()));

            Authentication auth = new UsernamePasswordAuthenticationToken(userName, password,authorities);
            SecurityContextHolder.getContext().setAuthentication(auth);
            return auth;
        } else {
            // throw exception
            throw new BadCredentialsException("Invalid credentials");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
