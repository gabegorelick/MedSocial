package com.medsocial.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Message {

	@Id
	private Long id;

	@OneToOne
	private GaeUser patient;
	
	@OneToOne
	private GaeUser doctor;
	
	private String status;
	
	private String comment;
	
	private String suggestion;
	
	private Date date;
	
	public Message() {
		
	}
		
	public long getId() {
		return id;
	}
	
	public GaeUser getPatient() {
		return patient;
	}

	public void setPatient(GaeUser patient) {
		this.patient = patient;
	}

	public GaeUser getDoctor() {
		return doctor;
	}

	public void setDoctor(GaeUser doctor) {
		this.doctor = doctor;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getSuggestion() {
		return suggestion;
	}

	public void setSuggestion(String suggestion) {
		this.suggestion = suggestion;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}
