package com.medsocial.controller;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.medsocial.security.AppRole;

@Controller
@RequestMapping("/home")
public class HomeController {
	
	@RequestMapping
	public ModelAndView home(Authentication authentication) {
		ModelAndView mav = new ModelAndView();
				
//		mav.addObject("userName", user.getNickname());
				
		if (authentication.getAuthorities().contains(AppRole.DOCTOR)) {
			mav.setViewName("redirect:/doctor");
		} else {
			mav.setViewName("redirect:/patient/" + authentication.getName() + "/home");
		}
		
		return mav;
	}

}
