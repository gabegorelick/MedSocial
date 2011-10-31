package com.medsocial.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/patient")
public class PatientController {

	@RequestMapping("/{userId}/home")
	public String home(@PathVariable String userId) {
		return "patientHome";
	}
}
