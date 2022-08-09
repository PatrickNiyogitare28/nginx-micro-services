package com.challenge.v1.utils;

import com.challenge.v1.enums.EUserType;
import com.challenge.v1.exceptions.BadRequestException;

public class ValidatePassword {
    public ValidatePassword() {
    }

    public void lengthBasedOnUserType(EUserType userType, String password){
        if(userType == EUserType.ADMIN){
            if(password.length() < 8){
                throw new BadRequestException("Password must be at least 8 characters long");
            }
        }else if(userType == EUserType.PATIENT){
            if(password.length() < 7){
                throw new BadRequestException("Password must be at least 7 characters long");
            }
        }else if(userType == EUserType.PHYSICIAN){
            if(password.length() < 6){
                throw new BadRequestException("Password must be at least  6 characters long");
            }
        }else if(userType == EUserType.PHARMACIST){
            if(password.length() < 5){
                throw new BadRequestException("Password must be at least 5 characters long");
            }
        }
    }
}
