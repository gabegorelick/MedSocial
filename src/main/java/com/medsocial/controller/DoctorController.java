package com.medsocial.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyFactory;
import com.medsocial.dao.MedSocialDao;
import com.medsocial.dao.UserRegistry;
import com.medsocial.model.Alert;

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
	
	@RequestMapping({"", "/home"})
	public ModelAndView home(Authentication auth) {
		ModelAndView mav = new ModelAndView("doctor/doctorMain");
		
		Objectify ofy = objectifyFactory.begin();
		
		// TODO only get relevant messages
		List<Alert> alerts = ofy.query(Alert.class).list();
		
		
		logger.debug("Adding {} to alerts", alerts);
		mav.addObject("alerts", alerts);
		
		Map<String, String> patientUserNames = new HashMap<String, String>();
		for (Alert a : alerts) {
			String id = a.getPatient().getName();
			if (!patientUserNames.containsKey(id)) {
				String name = userRegistry.findUser(id).getNickname();
				patientUserNames.put(id, name);
			}
		}
		mav.addObject("patientUserNames", patientUserNames);
						
		return mav;
	}
		
	@RequestMapping("/{userId}/patients") // TODO figure out this API
	public ModelAndView getPatients(Authentication auth) {
		ModelAndView mav = new ModelAndView("doctor/patient");
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
	public ModelAndView respond(@PathVariable(value = "alertId") Long alertId, @RequestParam String response) {		
		logger.debug("Got response {}", response);
		
		Alert alert = dao.getAlert(alertId);
		alert.setResponse(response);
		dao.putAlert(alert);				
		
		ModelAndView mav = new ModelAndView("redirect:/doctor");
		return mav;
	}
	
}
