package com.example.yogaposeguide.dto;

import java.util.Set;

public class JwtResponseDto {
    private String token;
    private String userName;
    private Set<String> roles;
    private int id;

    public JwtResponseDto(String token, String userName, Set<String> roleNames,int id) {
        this.token = token;
        this.userName = userName;
        this.roles = roleNames;
        this.id=id;
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
