package com.challenge.v1.serviceImpl;

import com.challenge.v1.domains.UserDomain;
import com.challenge.v1.dtos.SignInDto;
import com.challenge.v1.models.UserEntity;
import com.challenge.v1.services.User;
import com.challenge.v1.utils.HashPassword;
import org.springframework.stereotype.Service;

@Service
public class UserAuthServiceImpl implements User {
    private UserDomain userDomain = new UserDomain();
    HashPassword hashPassword = new HashPassword();
    @Override
    public UserEntity signUp(UserEntity user) {
        if(userDomain.getOneByEmail(user.getEmail()) != null){
            return null;
        }
       user.setPassword(hashPassword.hash(user.getPassword()));
       userDomain.add(user);
       return user;
    }



    @Override
    public UserEntity signIn(SignInDto signInDto) {
        UserEntity user = userDomain.getOneByEmail(signInDto.getEmail());
        if(user != null && hashPassword.verify(signInDto.getPassword(), user.getPassword())){
            return user;
        }
        return null;
    }
}
