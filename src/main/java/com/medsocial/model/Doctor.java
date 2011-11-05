package com.medsocial.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Unindexed;

@Entity
public class Doctor {
	
	@Id
	private String userId;
	
	@Unindexed
	private Key<GaeUser> user;
	
	private Key<Patient> patient;
	
	@SuppressWarnings("unused")
	private Doctor() {
		// objectify needs a no-arg constructor
	}
	
	public Doctor(GaeUser user) {
		userId = user.getUserId();
		this.user = new Key<GaeUser>(GaeUser.class, user.getUserId());
	}

	public String getUserId() {
		return userId;
	}

	public Key<GaeUser> getUser() {
		return user;
	}

	public Key<Patient> getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = new Key<Patient>(Patient.class, patient.getUserId());
	}

}
