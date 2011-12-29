Ext.namespace('MedSocial.controllers.patient');

MedSocial.controllers.patient.patientMedicationController = new Ext.Controller({
	edit: function(options) {
		var newView = new MedSocial.views.patient.PatientEditMedication();
		MedSocial.views.patient.viewport.setActiveItem(newView);
	}
});