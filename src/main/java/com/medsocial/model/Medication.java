package com.medsocial.model;

import java.util.Date;

import javax.persistence.Entity;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.map.annotate.JsonSerialize;
import org.springframework.security.core.userdetails.User;

import com.medsocial.web.JsonDateSerializer;

@Entity
public class Medication {

	private String id;
	private String name;
	private String directions;
	
	@JsonSerialize(using = JsonDateSerializer.class)
	private Date start;
	
	@JsonSerialize(using = JsonDateSerializer.class)
	private Date end;
	
	@JsonIgnore
	private User user;
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getDirections() {
		return directions;
	}
	
	public void setDirections(String directions) {
		this.directions = directions;
	}
	
	public User getUser() {
		return user;
	}
	
	public void setUser(User user) {
		this.user = user;
	}

	public Date getStart() {
		return start;
	}

	public void setStart(Date start) {
		this.start = start;
	}

	public Date getEnd() {
		return end;
	}

	public void setEnd(Date end) {
		this.end = end;
	}
	
	
}
