package com.medsocial.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/doctor")
public class DoctorController {

	@RequestMapping({"", "/home"})
	public String home() {
		return "doctorMain";
	}
	
	@RequestMapping("/{userId}/prescriptions/edit")
	public String editPrescription() {
		return "editPrescription";
	}
}
