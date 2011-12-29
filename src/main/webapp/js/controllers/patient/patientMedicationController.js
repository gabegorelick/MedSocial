Ext.namespace('MedSocial.controllers.patient');

MedSocial.controllers.patient.patientMedicationController = new Ext.Controller({
	edit: function(options) {
		var view = new MedSocial.views.patient.PatientEditMedication();
		MedSocial.views.patient.viewport.setActiveItem(view);
	}
});