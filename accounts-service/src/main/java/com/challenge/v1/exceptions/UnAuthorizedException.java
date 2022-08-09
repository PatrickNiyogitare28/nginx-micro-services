package com.challenge.v1.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class UnAuthorizedException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public UnAuthorizedException(String message) {
        super(message);
    }
    public UnAuthorizedException(String message, Throwable cause) {
        super(message, cause);
    }
}
