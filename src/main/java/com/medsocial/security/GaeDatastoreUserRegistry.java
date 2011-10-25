package com.medsocial.security;

import org.springframework.beans.factory.annotation.Autowired;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyFactory;
import com.medsocial.model.GaeUser;

public class GaeDatastoreUserRegistry implements UserRegistry {
        
    @Autowired
    private ObjectifyFactory objectifyFactory;
 
    public GaeUser findUser(String userId) {
    	Objectify objectify = objectifyFactory.begin();
    	return objectify.find(GaeUser.class, userId);
    }
 
    public void registerUser(GaeUser newUser) {
    	Objectify objectify = objectifyFactory.begin();
        objectify.put(newUser);
    }
 
    public void removeUser(String userId) {
    	Objectify objectify = objectifyFactory.begin();
        objectify.delete(new Key<GaeUser>(GaeUser.class, userId));
    }
}
