package com.medsocial.security;

import com.medsocial.model.GaeUser;

public interface UserRegistry {
	
	GaeUser findUser(String userId);
	void registerUser(GaeUser newUser);
	void removeUser(String userId);
}
