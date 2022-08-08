package com.challenge.v1.utils;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class HashPassword {
    private String get_SHA_512_SecurePassword(String passwordToHash){
        String salt = "salt@4724";
        String generatedPassword = null;
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-512");
            md.update(salt.getBytes(StandardCharsets.UTF_8));
            byte[] bytes = md.digest(passwordToHash.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for(int i=0; i< bytes.length ;i++){
                sb.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
            }
            generatedPassword = sb.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return generatedPassword;
    }

    public String hash(String password){
        return get_SHA_512_SecurePassword(password);
    }

    public Boolean verify(String plainPassword, String existingHashedPassword){
        String plainHashedPassword = get_SHA_512_SecurePassword(plainPassword);
        return plainHashedPassword.equals(existingHashedPassword);
    }
}
