package com.medsocial.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Unindexed;

@Entity
public class Patient {

	@Id
	private String userId;
	
	@Unindexed
	private Key<GaeUser> user;
	
	private Key<Doctor> doctor;
	
	@SuppressWarnings("unused")
	private Patient() {
		// objectify needs a no-arg constructor
	}
	
	public Patient(GaeUser user) {
		userId = user.getUserId();
		this.user = new Key<GaeUser>(GaeUser.class, user.getUserId());
	}

	public String getUserId() {
		return userId;
	}

	public Key<GaeUser> getUser() {
		return user;
	}

	public Key<Doctor> getDoctor() {
		return doctor;
	}

	public void setDoctor(Key<Doctor> doctor) {
		this.doctor = doctor;
	}

}
