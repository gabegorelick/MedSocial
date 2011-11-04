package com.medsocial.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.googlecode.objectify.Key;

@Entity
public class Comment {

	@Id
	private Long id;
	
	private Key<GaeUser> author;
	
	private String text;
	
	private Date date;
	
	public Comment() {
		
	}

	public long getId() {
		return id;
	}
	
	public Key<GaeUser> getAuthor() {
		return author;
	}

	public void setAuthor(Key<GaeUser> author) {
		this.author = author;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
}
