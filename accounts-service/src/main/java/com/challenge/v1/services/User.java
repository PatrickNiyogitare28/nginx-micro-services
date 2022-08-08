package com.challenge.v1.services;

import com.challenge.v1.dtos.SignInDto;
import com.challenge.v1.models.UserEntity;
import org.springframework.stereotype.Service;

public interface User {
   public UserEntity signUp(UserEntity user);
   public UserEntity signIn(SignInDto signInDto);
}
