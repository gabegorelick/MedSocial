package com.medsocial.controller;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/doctor")
public class DoctorController {

	@RequestMapping({"", "/home"})
	public ModelAndView home(Authentication auth) {
		ModelAndView mav = new ModelAndView("doctorMain");
		
		// TODO HandlerInterceptor?
		mav.addObject("userId", auth.getName());
		return mav;
	}
	
	@RequestMapping("/patients/{patientId}")
	public ModelAndView getPatient(Authentication auth, @PathVariable String patientId) {
		ModelAndView mav = new ModelAndView("doctor/patient");
		
		mav.addObject("userId", auth.getName());
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
}
