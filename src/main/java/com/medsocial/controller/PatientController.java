package com.medsocial.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.medsocial.model.Medication;

@Controller
@RequestMapping("/patient")
public class PatientController {
	
	@RequestMapping("/{userId}/home")
	public String home(@PathVariable String userId) {
		return "patient/home";
	}
	
	@RequestMapping("/{userId}/alerts/add")
	public String addAlert(@PathVariable String userId, @RequestParam String comment, @RequestParam String medication, @RequestParam Boolean took, 
			Authentication auth) {
									
		// TODO implement this
		
		return "patient/main";
	}
	
	@ModelAttribute("medications")
	public Collection<Medication> populateAllMedications() {
		List<Medication> medications =  new ArrayList<Medication>();
		
		Medication m1 = new Medication();
		m1.setId("101");
		m1.setName("Altace");
		m1.setDirections("Take once a day");
		m1.setStart(new Date());
		m1.setEnd(new Date());
		medications.add(m1);
		
		Medication m2 = new Medication();
		m2.setId("102");
		m2.setName("Warfarin");
		m2.setDirections("Take one pill every hour");
		m2.setStart(new Date());
		m2.setEnd(new Date());
		medications.add(m2);
		
		return medications;
	}
	
	/**
	 * Get all the user's medications. Since this data is already on the model, this handler is not strictly
	 * necessary. It is provided for clients that want to use a more RESTful API.
	 */
	@RequestMapping(value = "/{userId}/medications", method = RequestMethod.GET)
	public @ResponseBody Collection<Medication> getAllMedications(@ModelAttribute("medications") Collection<Medication> medications) {
		return medications;
	}
	
}
