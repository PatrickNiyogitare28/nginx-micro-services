package com.challenge.v1.serviceImpl;

import com.challenge.v1.domains.UserDomain;
import com.challenge.v1.dtos.SignInDto;
import com.challenge.v1.enums.EUserType;
import com.challenge.v1.exceptions.BadRequestException;
import com.challenge.v1.exceptions.UnAuthorizedException;
import com.challenge.v1.models.UserEntity;
import com.challenge.v1.services.User;
import com.challenge.v1.utils.HashPassword;
import com.challenge.v1.utils.ValidatePassword;
import org.springframework.stereotype.Service;

@Service
public class UserAuthServiceImpl implements User {
    private UserDomain userDomain = new UserDomain();
    HashPassword hashPassword = new HashPassword();
    @Override
    public UserEntity signUp(UserEntity user) {
        if(userDomain.getOneByEmail(user.getEmail()) != null){
           throw new BadRequestException("Email already exists");
        }
        new ValidatePassword().lengthBasedOnUserType(user.getUserType(), user.getPassword());
        user.setPassword(hashPassword.hash(user.getPassword()));
        userDomain.add(user);
        return user;
    }

    @Override
    public UserEntity signIn(SignInDto signInDto) {
        UserEntity user = userDomain.getOneByEmail(signInDto.getEmail());
        if(user != null || !hashPassword.verify(signInDto.getPassword(), user.getPassword())){
            throw new UnAuthorizedException("Invalid email or password");
        }
       return user;
    }


}
