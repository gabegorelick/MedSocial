package com.medsocial.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.googlecode.objectify.annotation.Unindexed;

@Entity
public class Patient {

	@Id
	private String userId;
	
	@Unindexed
	private GaeUser user;
	
	private Doctor doctor;
	
	@SuppressWarnings("unused")
	private Patient() {
		// objectify needs a no-arg constructor
	}
	
	public Patient(GaeUser user) {
		userId = user.getUserId();
		this.user = user;
	}

	public String getUserId() {
		return userId;
	}

	public GaeUser getUser() {
		return user;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

}
