package com.medsocial.dao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.Cacheable;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyFactory;
import com.medsocial.model.Doctor;
import com.medsocial.model.GaeUser;
import com.medsocial.model.Patient;
import com.medsocial.security.AppRole;

public class GaeDatastoreUserRegistry implements UserRegistry {
    
	private static final Logger logger = LoggerFactory.getLogger(GaeDatastoreUserRegistry.class);
	
    @Autowired
    private ObjectifyFactory objectifyFactory;
    
    @Autowired
	private CacheManager cacheManager;
 
    @Cacheable("users")
    public GaeUser findUser(String userId) {
    	logger.debug("Attempting to find user with ID {}", userId);
    	
    	Objectify objectify = objectifyFactory.begin();
    	GaeUser user = objectify.find(GaeUser.class, userId);
    	
    	if (user != null) {
    		logger.debug("Found user with name {}", user.getNickname());
    		logger.debug("User has authorities {}", user.getAuthorities());
    	} else {
    		logger.debug("No user found");
    	}
    	
    	return user;
    }
 
    public void registerUser(GaeUser newUser) {
    	logger.debug("Registering user with ID {}", newUser.getUserId());
    	logger.debug("Giving user the following authorities: {}", newUser.getAuthorities());
    	
    	Objectify objectify = objectifyFactory.begin();
        objectify.put(newUser);
        
        if (newUser.getAuthorities().contains(AppRole.DOCTOR)) {
        	Doctor doc = new Doctor(newUser);
        	objectify.put(doc);
        	cacheManager.getCache("doctors").put(doc.getUserId(), doc);
        }
        
        if (newUser.getAuthorities().contains(AppRole.PATIENT)) {
        	Patient pat = new Patient(newUser);
        	objectify.put(pat);
        	cacheManager.getCache("patients").put(pat.getUserId(), pat);
        }
        
        cacheManager.getCache("users").put(newUser.getUserId(), newUser);
    }
 
    public void removeUser(String userId) {
    	Objectify objectify = objectifyFactory.begin();
        objectify.delete(new Key<GaeUser>(GaeUser.class, userId));
    }
}
