package com.medsocial.security;

import java.util.EnumSet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationToken;

import com.google.appengine.api.users.User;
import com.medsocial.dao.UserRegistry;
import com.medsocial.model.GaeUser;

public class GoogleAccountsAuthenticationProvider implements AuthenticationProvider {
	
	private static final Logger logger = LoggerFactory.getLogger(GoogleAccountsAuthenticationProvider.class);
	
	private UserRegistry userRegistry;
		
	@Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        User googleUser = (User) authentication.getPrincipal();
 
        GaeUser user = userRegistry.findUser(googleUser.getUserId());
 
        if (user == null) {
        	logger.debug("Google user {} is not registered", googleUser);
        	
            // User not in registry. Needs to register
            user = new GaeUser();
            user.setAuthorities(EnumSet.of(AppRole.NEW_USER));
            user.setUserId(googleUser.getUserId());
            user.setNickname(googleUser.getNickname());
            user.setEmail(googleUser.getEmail());
        }
        
        if (!user.isEnabled()) {
            throw new DisabledException("Account is disabled");
        }
 
        return new GaeUserAuthentication(user, authentication.getDetails());
    }
 
    @Override
    public final boolean supports(Class<?> authentication) {
        return PreAuthenticatedAuthenticationToken.class.isAssignableFrom(authentication);
    }
 
    public void setUserRegistry(UserRegistry userRegistry) {
        this.userRegistry = userRegistry;
    }
    
}
