package com.challenge.v1.controllers;

import com.challenge.v1.dtos.SignInDto;
import com.challenge.v1.models.UserEntity;
import com.challenge.v1.payload.ApiResponse;
import com.challenge.v1.services.User;
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
    public ApiResponse signup(@RequestBody UserEntity userDto) {
        return new ApiResponse(true,"Successfully signed up",user.signUp(userDto));
    }

    @PostMapping("/signin")
    public ApiResponse signin(@RequestBody SignInDto signInDto) {
        return new ApiResponse(true,"Successfully logged in", user.signIn(signInDto));
    }
}
