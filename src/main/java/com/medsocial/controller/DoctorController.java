package com.medsocial.controller;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/doctor")
public class DoctorController {
	
	@RequestMapping({"", "/home"})
	public ModelAndView home(Authentication auth) {
		// TODO implement this
		ModelAndView mav = new ModelAndView("doctor/doctorMain");								
		return mav;
	}
			
	@RequestMapping("/{userId}/patients") // TODO figure out this API
	public ModelAndView getPatients(Authentication auth) {
		ModelAndView mav = new ModelAndView("doctor/patient");
		return mav;
	}
	
	@RequestMapping("/{userId}/patients/{patientId}")
	public ModelAndView getPatient(@PathVariable("userId") String userId, @PathVariable("patientId") String patientId) {
		
		// TODO implement this
		ModelAndView mav = new ModelAndView("doctor/patient");		
		return mav;
	}
	
	@RequestMapping("/{userId}/prescriptions/edit")
	public String editPrescription() {
		return "doctor/editPrescription";
	}
	
	@RequestMapping({"/addPatient", "/{userId}/patients/add"})
	public String addPatient() {
		return "doctor/addPatient";
	}
	
	@RequestMapping(value = "/{userId}/alerts/{alertId}/respond", method = RequestMethod.POST)
	public ModelAndView respond(@PathVariable("userId") String userId, @PathVariable("alertId") Long alertId, 
			@RequestParam String response, @RequestParam(required = false) String location) {
		
		// TODO implement this
		
		ModelAndView mav = new ModelAndView("redirect:/doctor");
		return mav;
	}
	
}
