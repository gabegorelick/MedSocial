package com.medsocial.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyFactory;
import com.medsocial.model.Alert;
import com.medsocial.model.Comment;
import com.medsocial.model.GaeUser;

@Controller
@RequestMapping("/patient")
public class PatientController {

	@Autowired
	private ObjectifyFactory objectifyFactory;
	
	@RequestMapping("/{userId}/home")
	public String home(@PathVariable String userId) {
		return "patient/home";
	}
	
	@RequestMapping("/{userId}/alerts/add")
	public String addAlert(@PathVariable String userId, @RequestParam String comment, Authentication auth) {
		Objectify ofy = objectifyFactory.begin();
		
		Comment comm = new Comment();
		comm.setText(comment);
		
		GaeUser user = (GaeUser) auth.getPrincipal();
		comm.setAuthor(new Key<GaeUser>(GaeUser.class, user.getUserId()));
		Key<Comment> commentKey = ofy.put(comm);
		
		Alert alert = new Alert();
		alert.setComment(commentKey);
				
		ofy.put(alert);
		
		return "patient/home";
	}
}
