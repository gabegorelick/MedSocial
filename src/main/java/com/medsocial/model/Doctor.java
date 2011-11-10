package com.medsocial.model;

import java.util.Collection;
import java.util.HashSet;

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
	
	private Collection<Key<Patient>> patients;
	
	@SuppressWarnings("unused")
	private Doctor() {
		// objectify needs a no-arg constructor
	}
	
	public Doctor(GaeUser user) {
		userId = user.getUserId();
		this.user = new Key<GaeUser>(GaeUser.class, user.getUserId());
		patients = new HashSet<Key<Patient>>();
	}

	public String getUserId() {
		return userId;
	}

	public Key<GaeUser> getUser() {
		return user;
	}

	public Collection<Key<Patient>> getPatients() {
		return patients;
	}

	public void setPatients(Collection<Key<Patient>> patients) {
		this.patients = patients;
	}
	
	public void addPatient(Patient patient) {
		// patients can be null from schema migrations
		if (patients == null) {
			patients = new HashSet<Key<Patient>>();
		}
		patients.add(new Key<Patient>(Patient.class, patient.getUserId()));
	}

}
