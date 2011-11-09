package com.medsocial.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.googlecode.objectify.Key;

@Entity
public class Alert {

	@Id
	private Long id;
	
	private String medication;
	
	/**
	 * Patient's comment
	 */
	private String comment;
	
	/**
	 * Reference to patient key in datastore
	 */
	private Key<GaeUser> patient;
		
	private boolean took;
	
	private Date date;
	
	/**
	 * Doctor's response
	 */
	private String response;
	
	public Alert() {
		date = new Date();
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

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Key<GaeUser> getPatient() {
		return patient;
	}

	public void setPatient(Key<GaeUser> patient) {
		this.patient = patient;
	}

	/**
	 * 
	 * @return {@code true} iff patient took medication
	 */
	public boolean took() {
		return took;
	}
	
	/**
	 * Alias for {@link #took()}. For JSTL EL. 
	 * @return
	 */
	public boolean getTook() {
		return took();
	}

	/**
	 * 
	 * @param took {@code true} iff patient took the medication
	 */
	public void setTook(boolean took) {
		this.took = took;
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}
	
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
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
