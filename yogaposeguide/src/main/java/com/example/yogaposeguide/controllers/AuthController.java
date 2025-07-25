package com.example.yogaposeguide.controllers;

import com.example.yogaposeguide.dto.JwtResponseDto;
import com.example.yogaposeguide.models.RegisterDetails;
import com.example.yogaposeguide.dto.UserDetailDto;
import com.example.yogaposeguide.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthService authService;

    @PostMapping("/register")
    public String addUser(@RequestBody UserDetailDto register){
        return authService.addUser(register);
    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponseDto> Login(@RequestBody RegisterDetails login){
        JwtResponseDto response = authService.authenticate(login);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/users")
    public List<RegisterDetails> allUsers(){
        return authService.getUsers();
    }
}
