package com.medsocial.model;

import java.util.Date;

import javax.persistence.Entity;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.map.annotate.JsonDeserialize;
import org.codehaus.jackson.map.annotate.JsonSerialize;
import org.codehaus.jackson.map.ser.std.ToStringSerializer;
import org.joda.time.LocalTime;
import org.joda.time.Partial;
import org.springframework.security.core.userdetails.User;


@Entity
public class Medication {

	private int id;
	private String name;
	private String directions;
	
	@JsonSerialize(using = DateJsonSerializer.class)
	private Date start;
	
	@JsonSerialize(using = DateJsonSerializer.class)
	private Date end;
	
	@JsonSerialize(using = ToStringSerializer.class)
	@JsonDeserialize(using = LocalTimeJsonDeserializer.class)
	private LocalTime alertTime;
	
	@JsonSerialize(contentUsing = PartialJsonSerializer.class)
	private Partial[] repeatAlert;
	
	
	@JsonIgnore
	private User user;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
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

	public LocalTime getAlertTime() {
		return alertTime;
	}

	public void setAlertTime(LocalTime alertTime) {
		this.alertTime = alertTime;
	}

	public Partial[] getRepeatAlert() {
		return repeatAlert;
	}

	public void setRepeatAlert(Partial[] repeatAlert) {
		this.repeatAlert = repeatAlert;
	}
		
}
