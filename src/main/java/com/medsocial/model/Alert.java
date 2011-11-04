package com.medsocial.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.googlecode.objectify.Key;

@Entity
public class Alert {

	@Id
	private Long id;
	
	private String medication;
	
	private Key<Comment> comment;
	
	private Key<GaeUser> patient;
	
	public Alert() {
		
	}

	public long getId() {
		return id;
	}
		
	public String getMedication() {
		return medication;
	}

	public void setMedication(String medication) {
		this.medication = medication;
	}

	public Key<Comment> getComment() {
		return comment;
	}

	public void setComment(Key<Comment> comment) {
		this.comment = comment;
	}

	public Key<GaeUser> getPatient() {
		return patient;
	}

	public void setPatient(Key<GaeUser> patient) {
		this.patient = patient;
	}

	/**
	 * Actions a patient can take for a given alert.
	 * @author Gabe Gorelick
	 *
	 */
	public static enum Action {
		REMIND_LATER("Remind me later"),
		TAKE_NOW("Take now"),
		NOT_TAKING("Not taking");
		
		private final String text;
		
		Action(String text) {
			this.text = text;
		}
		
		public String getText() {
			return text;
		}
	}
}
