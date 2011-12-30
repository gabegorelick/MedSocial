package com.medsocial.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class UserHandlerInterceptor extends HandlerInterceptorAdapter {

	private final Logger logger = LoggerFactory.getLogger(UserHandlerInterceptor.class);
	
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) {
//		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//		Object principal = auth.getPrincipal();
//		if (principal instanceof GaeUser && modelAndView != null) {
//			GaeUser user = (GaeUser) auth.getPrincipal();
//			modelAndView.addObject("user", user);
//		}
		
		if (modelAndView == null) {
			logger.debug("ModelAndView is null, skipping adding user to model");
		} else {
			// TODO implement this
			
//			GaeUser user = new GaeUser();
//			User user = new User();
//			user.setAuthorities(EnumSet.of(AppRole.DOCTOR, AppRole.PATIENT));
//			user.setForename("Jon");
//			user.setSurname("Everyman");
//			// matches an old user from the datastore
//			user.setUserId("18580476422013912411");
//			user.setEmail("jon@example.com");
//			user.setEnabled(true);
//			modelAndView.addObject("user", user);
		}
	}
}
