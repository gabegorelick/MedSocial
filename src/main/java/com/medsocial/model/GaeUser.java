package com.medsocial.model;

import java.io.Serializable;
import java.util.EnumSet;
import java.util.Set;

import javax.persistence.Id;

import com.googlecode.objectify.annotation.Entity;
import com.medsocial.security.AppRole;

@Entity
public class GaeUser implements Serializable {
	
	private static final long serialVersionUID = -6788420696395476568L;
	
	@Id // TODO make this a Long
	private String userId;
	
	private String email;
	
	private String nickname;
	
	private String forename;
	
	private String surname;
	
	private Set<AppRole> authorities;
	
	private boolean enabled;
	
	public GaeUser() {
		authorities = EnumSet.noneOf(AppRole.class);
		enabled = true;
	}
	
	public String getUserId() {
		return userId;
	}
	
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getForename() {
		return forename;
	}

	public void setForename(String forename) {
		this.forename = forename;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public Set<AppRole> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(Set<AppRole> authorities) {
		this.authorities = authorities;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
}
