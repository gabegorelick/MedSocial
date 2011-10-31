package com.medsocial.controller;

import java.io.IOException;
import java.security.Principal;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.google.appengine.api.users.UserServiceFactory;

@Controller
@RequestMapping({"", "/login"})
public class LoginController {

	@RequestMapping
	public void login(Principal principal, HttpServletResponse response) throws IOException {
		ModelAndView mav = new ModelAndView("login");
		mav.addObject("user", principal);
		
		String loginUrl = UserServiceFactory.getUserService().createLoginURL("/home");
		mav.addObject("loginUrl", loginUrl);
		
		if (principal == null) {
			response.sendRedirect(loginUrl);		
		} else {
			response.sendRedirect("/home");
		}
	}
	
}
