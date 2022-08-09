package com.challenge.v1.domains;

import com.challenge.v1.models.UserEntity;
import java.util.HashMap;
import java.util.UUID;

public class UserDomain {
    HashMap<UserEntity, String> users = new HashMap();

    public void add(UserEntity user){
        users.put(user, UUID.randomUUID().toString());
    }

    public UserEntity getOneByEmail(String email){
        for(UserEntity user : users.keySet()){
            if(user.getEmail().equals(email)){
                return user;
            }
        }
        return null;
    }
}
