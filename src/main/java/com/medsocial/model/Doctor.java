package com.medsocial.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.googlecode.objectify.annotation.Unindexed;

@Entity
public class Doctor {
	
	@Id
	private String userId;
	
	@Unindexed
	private GaeUser user;
	
	private Patient patient;
	
	@SuppressWarnings("unused")
	private Doctor() {
		// objectify needs a no-arg constructor
	}
	
	public Doctor(GaeUser user) {
		userId = user.getUserId();
		this.user = user;
	}

	public String getUserId() {
		return userId;
	}

	public GaeUser getUser() {
		return user;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

}
