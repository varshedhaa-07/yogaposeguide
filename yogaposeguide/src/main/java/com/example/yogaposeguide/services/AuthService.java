package com.example.yogaposeguide.services;

import com.example.yogaposeguide.jwt.JwtTokenProvider;
import com.example.yogaposeguide.dto.JwtResponseDto;
import com.example.yogaposeguide.models.RegisterDetails;
import com.example.yogaposeguide.models.Roles;
import com.example.yogaposeguide.dto.UserDetailDto;
import com.example.yogaposeguide.repository.RegisterDetailsRepository;
import com.example.yogaposeguide.repository.RegisterRepository;
import com.example.yogaposeguide.repository.RolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class AuthService {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    RolesRepository rolesRepository;

    @Autowired
    RegisterDetailsRepository registerDetailsRepository;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    RegisterRepository registerRepository;

    @Autowired
    AuthenticationManager authenticationManager;

    public String addUser(UserDetailDto register) {
        RegisterDetails registerDetails=new RegisterDetails();
        registerDetails.setId(register.getId());
        registerDetails.setName(register.getName());
        registerDetails.setEmail(register.getEmail());
        registerDetails.setPassword(passwordEncoder.encode(register.getPassword()));
        registerDetails.setUserName(register.getUserName());
        Set<Roles> roles = new HashSet<>();
        for(String roleName : register.getRoleNames()){
            Roles role=rolesRepository.findByRoleName(roleName)
                    .orElseThrow(()->new RuntimeException("Role not found" + roleName));
            roles.add(role);
        }
        registerDetails.setRoles(roles);
        System.out.println("Registration" + registerDetails);
        registerDetailsRepository.save(registerDetails);
        return "User Registered Successfully";
    }

    public JwtResponseDto authenticate(RegisterDetails login) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        login.getUserName(), login.getPassword()));

        String token = jwtTokenProvider.generateToken(authentication);
        RegisterDetails user = registerRepository.findByUserName(login.getUserName())
                .orElseThrow(() -> new RuntimeException("User not found"));
        Set<String> roleNames = user.getRoles()
                .stream()
                .map(role -> role.getRoleName())
                .collect(Collectors.toSet());

        return new JwtResponseDto(token, user.getUserName(), roleNames);
    }

    public List<RegisterDetails> getUsers() {
        return registerRepository.findAll();
    }
}
