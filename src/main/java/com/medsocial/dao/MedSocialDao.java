package com.medsocial.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyFactory;
import com.medsocial.model.Alert;

@Component
public class MedSocialDao {
	
	@Autowired
    private ObjectifyFactory objectifyFactory;
    
    @Autowired
	private CacheManager cacheManager;
    
    @Cacheable("alerts")
    public Alert getAlert(long id) {
    	Objectify ofy = objectifyFactory.begin();
    	return ofy.get(Alert.class, id);
    }
    
    public Key<Alert> putAlert(Alert alert) {
    	Objectify ofy = objectifyFactory.begin();
    	Key<Alert> key = ofy.put(alert);
    	
    	cacheManager.getCache("alerts").put(alert.getId(), alert);
    	return key;    	
    }
}
