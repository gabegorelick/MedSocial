package com.medsocial.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyFactory;
import com.medsocial.dao.MedSocialDao;
import com.medsocial.dao.UserRegistry;
import com.medsocial.model.Alert;
import com.medsocial.model.Doctor;
import com.medsocial.model.GaeUser;
import com.medsocial.model.Patient;

@Controller
@RequestMapping("/doctor")
public class DoctorController {
	
	private static final Logger logger = LoggerFactory.getLogger(DoctorController.class);

	// TODO do everything through DAO
	@Autowired
	private ObjectifyFactory objectifyFactory;
	
	@Autowired
	private UserRegistry userRegistry;
		
	@Autowired
	private MedSocialDao dao;
	
	@ModelAttribute("doctor")
	public Doctor getDoctor(Authentication auth) {
		Objectify ofy = objectifyFactory.begin();
		return ofy.get(new Key<Doctor>(Doctor.class, auth.getName()));
	}
	
	@ModelAttribute("alerts")
	public Collection<Alert> getAlerts() {
		Objectify ofy = objectifyFactory.begin();
		
		// TODO only get relevant messages
		List<Alert> alerts = ofy.query(Alert.class).list();
		logger.debug("Adding {} to alerts", alerts);
		
		return alerts;
	}
	
	@ModelAttribute("patientUserNames")
	public Map<String, String> getPatientUserNames(@ModelAttribute("doctor") Doctor doctor, 
			@ModelAttribute("alerts") Collection<Alert> alerts) {
		
		Map<String, String> patientUserNames = new HashMap<String, String>();
		Objectify ofy = objectifyFactory.begin();
		
		for (Key<Patient> p : doctor.getPatients()) {
			if (!patientUserNames.containsKey(p.getName())) {
				GaeUser user = userRegistry.findUser(p.getName());
				String name = user.getSurname() + " " + user.getForename();
				
				logger.debug("Adding ({}, {}) to patientUserNames", p.getName(), name);
				patientUserNames.put(p.getName(), name);
			}
		}
		
		// sometimes a (fake) alert doesn't have the right patient, so add their name too
		for (Alert a : alerts) {
			if (!patientUserNames.containsKey(a.getPatient().getName())) {
				GaeUser user = ofy.get(a.getPatient());
				String name = user.getSurname() + " " + user.getForename();
				
				logger.debug("Adding ({}, {}) to patientUserNames", user.getUserId(), name);
				patientUserNames.put(user.getUserId(), name);
			}
		}
		
		return patientUserNames;
	}
	
	@RequestMapping({"", "/home"})
	public ModelAndView home(Authentication auth, @ModelAttribute("doctor") Doctor doctor) {
		ModelAndView mav = new ModelAndView("doctor/doctorMain");
		
		Objectify ofy = objectifyFactory.begin();
						
		Map<Key<Patient>, Patient> patients = ofy.get(doctor.getPatients());
		mav.addObject("patients", patients);
						
		return mav;
	}
			
	@RequestMapping("/{userId}/patients") // TODO figure out this API
	public ModelAndView getPatients(Authentication auth) {
		ModelAndView mav = new ModelAndView("doctor/patient");
		return mav;
	}
	
	@RequestMapping("/{userId}/patients/{patientId}")
	public ModelAndView getPatient(@PathVariable("userId") String userId, @PathVariable("patientId") String patientId,
			@ModelAttribute("alerts") Collection<Alert> alerts) {
		
		ModelAndView mav = new ModelAndView("doctor/patient");
		
		// only get alerts that belong to this user
		List<Alert> userAlerts = new ArrayList<Alert>();
		for (Alert a : alerts) {
			if (a.getPatient().getName().equals(patientId)) {
				userAlerts.add(a);
			}
		}
		// overwrite existing alerts  
		mav.addObject("alerts", userAlerts);
		
		return mav;
	}
	
	@RequestMapping("/{userId}/prescriptions/edit")
	public String editPrescription() {
		return "doctor/editPrescription";
	}
	
	@RequestMapping({"/addPatient", "/{userId}/patients/add"})
	public String addPatient() {
		return "doctor/addPatient";
	}
	
	@RequestMapping(value = "/{userId}/alerts/{alertId}/respond", method = RequestMethod.POST)
	public ModelAndView respond(@PathVariable("userId") String userId, @PathVariable("alertId") Long alertId, 
			@RequestParam String response, @RequestParam(required = false) String location) {
		
		logger.debug("Got response {}", response);
		
		Alert alert = dao.getAlert(alertId);
		alert.setResponse(response);
		dao.putAlert(alert);				
		
		ModelAndView mav = new ModelAndView();
		if ("patient".equals(location)) {
			mav.setViewName("redirect:/doctor/"+ userId + "/patients/" + alert.getPatient().getName());
		} else {
			mav.setViewName("redirect:/doctor");
		}
		return mav;
	}
	
}
