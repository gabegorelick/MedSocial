Ext.namespace('MedSocial.controllers.patient');

MedSocial.controllers.patient.patientMedicationController = new Ext.Controller({
	
	/**
	 * Show all medications
	 */
	index: function(options) {
		// non-modal, include tabs
		MedSocial.views.patient.viewport.setActiveItem(MedSocial.views.patient.viewport.tabPanel);
		
		// TabPanel is smart enough to remember what tab was active
	},
	
	/**
	 * Show single medication
	 */
	show: function(options) {
		var newView = new MedSocial.views.patient.PatientMedicationDetail();
		MedSocial.views.patient.viewport.setActiveItem(newView);
	},
	
	/**
	 * Edit single medication
	 */
	edit: function(options) {
		var newView = new MedSocial.views.patient.PatientEditMedication();
		MedSocial.views.patient.viewport.setActiveItem(newView);
	}
});