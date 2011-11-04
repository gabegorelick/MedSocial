package com.medsocial.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.medsocial.model.GaeUser;

@Controller
@RequestMapping("/test")
public class TestController {

	private static final Logger logger = LoggerFactory.getLogger(TestController.class);
	
	@RequestMapping({"", "/home"})
	public String home() {
		return "test/home";
	}
	
	@RequestMapping("/patient/addComment")
	public String addPatientComment(@RequestParam String comment, Authentication auth) {
		logger.debug("Received comment {}", comment);
		
		GaeUser user = (GaeUser) auth.getPrincipal();
		
		return "forward:/patient/" + user.getUserId() + "/alerts/add";
	}
}
