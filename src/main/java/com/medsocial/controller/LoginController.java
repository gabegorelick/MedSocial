package com.medsocial.controller;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.google.appengine.api.users.UserServiceFactory;

@Controller
@RequestMapping("/login")
public class LoginController {

	@RequestMapping
	public ModelAndView login(Principal principal) {
		ModelAndView mav = new ModelAndView("login");
		mav.addObject("user", principal);
		
		String loginUrl = UserServiceFactory.getUserService().createLoginURL("/home");
		mav.addObject("loginUrl", loginUrl);
		
		return mav;
	}
	
}
