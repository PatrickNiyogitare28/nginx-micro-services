package com.challenge.v1.controllers;

import com.challenge.v1.dtos.SignInDto;
import com.challenge.v1.models.UserEntity;
import com.challenge.v1.services.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    private final User user;
    public AuthController(User user) {
        this.user = user;
    }

    @PostMapping("/signup")
    public UserEntity signup(@RequestBody UserEntity userDto) {
        return user.signUp(userDto);
    }

    @PostMapping("/signin")
    public UserEntity signin(@RequestBody SignInDto signInDto) {
        return user.signIn(signInDto);
    }
}
