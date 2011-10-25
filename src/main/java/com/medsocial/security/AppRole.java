package com.medsocial.security;

import org.springframework.security.core.GrantedAuthority;

public enum AppRole implements GrantedAuthority {
    ADMIN,
    NEW_USER,
    USER;
 
    public String getAuthority() {
        return toString();
    }
    
}
