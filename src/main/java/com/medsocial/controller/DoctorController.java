package com.medsocial.controller;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyFactory;
import com.medsocial.model.Message;

@Controller
@RequestMapping("/doctor")
public class DoctorController {
	
	private static final Logger logger = LoggerFactory.getLogger(DoctorController.class);

	 @Autowired
	 private ObjectifyFactory objectifyFactory;
	
	@RequestMapping({"", "/home"})
	public ModelAndView home(Authentication auth) {
		ModelAndView mav = new ModelAndView("doctorMain");
		
		Objectify ofy = objectifyFactory.begin();
		Collection<Message> messages = ofy.get(Message.class).values();
		mav.addObject("messages", messages);
		return mav;
	}
		
	@RequestMapping("/{userId}/patients") // TODO figure out this API
	public ModelAndView getPatients(Authentication auth) {
		ModelAndView mav = new ModelAndView("doctor/patient");
		return mav;
	}
	
	@RequestMapping("/{userId}/prescriptions/edit")
	public String editPrescription() {
		return "editPrescription";
	}
	
	@RequestMapping({"/addPatient", "/{userId}/patients/add"})
	public String addPatient() {
		return "addPatient";
	}
	
	@RequestMapping(value = "/addSuggestion", method = RequestMethod.POST)
	public ModelAndView addSuggestion(@RequestParam String suggestion) {
		ModelAndView mav = new ModelAndView("redirect:doctorMain");
		
		logger.debug("Got suggestion {}", suggestion);
		
		Message message = new Message();
		message.setSuggestion(suggestion);
		
		Objectify objectify = objectifyFactory.begin();
		objectify.put(message);
		
		return mav;
	}
}
