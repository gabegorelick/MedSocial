package com.medsocial.controller;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping({"", "/home"})
public class HomeController {
	
	@RequestMapping
	public ModelAndView home() {
		ModelAndView mav = new ModelAndView("/home");
		mav.addObject("userName", SecurityContextHolder.getContext().getAuthentication().getName());
		
		return mav;
	}

}
