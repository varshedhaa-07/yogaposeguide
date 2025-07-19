package com.example.yogaposeguide.models;

import java.util.Set;

public class JwtResponseDto {
    private String token;
    private String userName;
    private Set<String> roles;

    public JwtResponseDto(String token, String userName, Set<String> roleNames) {
        this.token = token;
        this.userName = userName;
        this.roles = roleNames;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }
}
