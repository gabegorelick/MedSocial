package com.medsocial.controller;

import java.util.EnumSet;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.google.appengine.api.users.UserServiceFactory;
import com.medsocial.model.GaeUser;
import com.medsocial.security.AppRole;
import com.medsocial.security.GaeUserAuthentication;
import com.medsocial.security.UserRegistry;
import com.medsocial.validation.RegistrationForm;

@Controller
@RequestMapping(value = "/register")
public class RegistrationController {
 
   @Autowired
   private UserRegistry registry;
 
   @RequestMapping(method = RequestMethod.GET)
   public RegistrationForm registrationForm() {
       return new RegistrationForm();
   }
 
   @RequestMapping(method = RequestMethod.POST)
   public ModelAndView register(@Valid RegistrationForm form, BindingResult result) {	   
       if (result.hasErrors()) {
           return null;
       }
       
       ModelAndView mav = new ModelAndView("redirect:/home");
 
       Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
       GaeUser currentUser = (GaeUser) authentication.getPrincipal();
       Set<AppRole> roles = EnumSet.of(AppRole.USER);
 
       if (UserServiceFactory.getUserService().isUserAdmin()) {
           roles.add(AppRole.ADMIN);
       }
 
       GaeUser user = new GaeUser();
       user.setUserId(currentUser.getUserId());
       user.setNickname(currentUser.getNickname());
       user.setEmail(currentUser.getEmail());
       user.setForename(form.getForename());
       user.setSurname(form.getSurname());
       user.setAuthorities(roles);
       user.setEnabled(true);
 
       registry.registerUser(user);
 
       // Update the context with the full authentication
       SecurityContextHolder.getContext().setAuthentication(new GaeUserAuthentication(user, authentication.getDetails()));
 
       
       return mav;
   }
}
