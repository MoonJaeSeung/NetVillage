package com.NetVillage.NetVillage.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.webjars.NotFoundException;

@RestControllerAdvice
public class GlobalExceptionHandler {

//    @ExceptionHandler(NotFoundException.class)
//    @ResponseStatus(HttpStatus.NOT_FOUND)
//    public ErrorResponse handleNotFoundException(NotFoundException ex) {
//        ErrorResponse errorResponse = new ErrorResponse();
//        errorResponse.setMessage(ex.getMessage());
//        errorResponse.setStatus(HttpStatus.NOT_FOUND.value());
//        return errorResponse;
//    }
//
//    @ExceptionHandler(BadRequestException.class)
//    @ResponseStatus(HttpStatus.BAD_REQUEST)
//    public ErrorResponse handleBadRequestException(BadRequestException ex) {
//        ErrorResponse errorResponse = new ErrorResponse();
//        errorResponse.setMessage(ex.getMessage());
//        errorResponse.setStatus(HttpStatus.BAD_REQUEST.value());
//        return errorResponse;
//    }
}
