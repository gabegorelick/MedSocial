package com.medsocial.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.appengine.api.users.UserServiceFactory;

@Controller
@RequestMapping("/logout")
public class LogoutController {
	
	private static final Logger logger = LoggerFactory.getLogger(LogoutController.class);

	@RequestMapping
	public void logout(HttpServletRequest request, HttpServletResponse response) throws IOException {
		request.getSession().invalidate();

		String logoutUrl = UserServiceFactory.getUserService().createLogoutURL("/login");
		
		logger.debug("Redirecting user to logoutUrl {}", logoutUrl);
		response.sendRedirect(logoutUrl);
	}
}
