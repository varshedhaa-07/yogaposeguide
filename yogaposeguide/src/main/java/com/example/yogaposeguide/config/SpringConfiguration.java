package com.example.yogaposeguide.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SpringConfiguration {

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf((csrf)->csrf.disable())
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests(auth-> {
//                            auth.requestMatchers(HttpMethod.POST,"/employee").hasRole("ADMIN");
//                            auth.requestMatchers(HttpMethod.PUT,"/employee").hasRole("ADMIN");
//                            auth.requestMatchers(HttpMethod.DELETE,"/employee").hasRole("ADMIN");
//                            auth.requestMatchers(HttpMethod.GET,"/**").hasAnyRole("ADMIN","USER");
                    auth.requestMatchers("/api/auth/**").permitAll();
                    auth.requestMatchers("/api/routine/**").permitAll();
//                    auth.anyRequest().authenticated();
                });
//                .addFilterBefore(jwtAuthenticationFilter , UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }
}
