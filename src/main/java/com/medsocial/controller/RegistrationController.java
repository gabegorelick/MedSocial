package com.medsocial.controller;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.medsocial.validation.RegistrationForm;

@Controller
@RequestMapping(value = "/register")
public class RegistrationController {

	private static final Logger logger = LoggerFactory.getLogger(RegistrationController.class);
	
	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView registrationForm() {
		ModelAndView mav = new ModelAndView("newUser/register");
		mav.addObject(new RegistrationForm());
		return mav;
	}

	@RequestMapping(method = RequestMethod.POST)
	public ModelAndView register(@Valid RegistrationForm form, BindingResult result) {
		if (result.hasErrors()) {
			logger.debug("RegistrationForm has errors.");
			return null;
		}

		ModelAndView mav = new ModelAndView("redirect:/home");

		// TODO implement this
		
//		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//		GaeUser currentUser = (GaeUser) authentication.getPrincipal();
//		Set<AppRole> roles = EnumSet.of(AppRole.USER);
//		roles.add(form.getAccountType().getRole());
//
//		if (UserServiceFactory.getUserService().isUserAdmin()) {
//			roles.add(AppRole.ADMIN);
//		}
//
//		GaeUser user = new GaeUser();
//		user.setUserId(currentUser.getUserId());
//		user.setNickname(currentUser.getNickname());
//		user.setEmail(currentUser.getEmail());
//		user.setForename(form.getForename());
//		user.setSurname(form.getSurname());
//		user.setAuthorities(roles);
//		user.setEnabled(true);
//		user.setDoctor(new Key<Doctor>(Doctor.class, form.getDoctorId()));
//
//		registry.registerUser(user);
//
//		// Update the context with the full authentication
//		SecurityContextHolder.getContext().setAuthentication(
//				new GaeUserAuthentication(user, authentication.getDetails()));

		return mav;
	}
}
