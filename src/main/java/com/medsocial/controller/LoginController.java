package com.medsocial.controller;

import java.io.IOException;
import java.security.Principal;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping({"", "/login"})
public class LoginController {

	@RequestMapping
	public String login(Principal principal, HttpServletResponse response) throws IOException {
		return "forward:patient/18580476422013912411/home"; // TODO real redirect logic
		
//		ModelAndView mav = new ModelAndView("login");
//		mav.addObject("user", principal);
		
//		String loginUrl = UserServiceFactory.getUserService().createLoginURL("/home");
//		mav.addObject("loginUrl", loginUrl);
//		
//		if (principal == null) {
//			response.sendRedirect(loginUrl);
//		} else {
//			response.sendRedirect("/home");
//		}
	}
	
}
