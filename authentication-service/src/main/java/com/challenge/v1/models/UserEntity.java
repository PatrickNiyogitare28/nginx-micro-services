package com.challenge.v1.models;

import com.challenge.v1.enums.EGender;
import com.challenge.v1.enums.EUserType;

public class UserEntity {
    private String email;
    private String password;
    private String firstName;
    private String lastName;

    private String country;
    private EGender gender;
    private EUserType userType;

    public UserEntity() {
    }

    public UserEntity(String email, String password, String firstName, String lastname, String country, EGender gender, EUserType userType) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastname;
        this.country = country;
        this.gender = gender;
        this.userType = userType;
    }

    public String getEmail() {
        return email;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public EGender getGender() {
        return gender;
    }

    public void setGender(EGender gender) {
        this.gender = gender;
    }

    public EUserType getUserType() {
        return userType;
    }

    public void setUserType(EUserType userType) {
        this.userType = userType;
    }
}
