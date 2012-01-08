package com.medsocial.controller;

import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
	public Map<Integer, Medication> populateAllMedications() {
		Map<Integer, Medication> medications = new HashMap<>();
		
		// TODO store medications hashed by ID
		
		Medication m1 = new Medication();
		m1.setId(101);
		m1.setName("Altace");
		m1.setDirections("Take once a day");
		m1.setStart(new Date());
		m1.setEnd(new Date());
		medications.put(m1.getId(), m1);
		
		Medication m2 = new Medication();
		m2.setId(102);
		m2.setName("Warfarin");
		m2.setDirections("Take one pill every hour");
		m2.setStart(new Date());
		m2.setEnd(new Date());
		medications.put(m2.getId(), m2);
		
		return medications;
	}
	
	/**
	 * Get all the user's medications. Since this data is already on the model, this handler is not strictly
	 * necessary. It is provided for clients that want to use a more RESTful API.
	 */
	@RequestMapping(value = "/{userId}/medications", method = RequestMethod.GET)
	public @ResponseBody Collection<Medication> getAllMedications(@ModelAttribute("medications") Map<Integer, Medication> medications) {
		return medications.values(); // TODO ext expects a "standard" response with status and message
	}
	
	@RequestMapping(value = "/{userId}/medications", method = RequestMethod.PUT)
	public @ResponseBody Collection<Medication> putAllMedications(@ModelAttribute("medications") Map<Integer, Medication> medications) {
		medications.clear();
		return medications.values();
	}
	
	@RequestMapping(value = "/{userId}/medications/{medicationId}", method = RequestMethod.PUT)
	public @ResponseBody Medication putMedication(@PathVariable int medicationId, @RequestBody Medication medication, 
			@ModelAttribute("medications") Map<Integer, Medication> medications) {
		
		medications.put(medicationId, medication);
		return medication;
	}
	
	@RequestMapping(value = "/{userId}/doctors", method = RequestMethod.GET, headers = {"Accept=text/html"})
	public String getDoctorsPage() {
		return "patient/doctorList";
	}
	
}
