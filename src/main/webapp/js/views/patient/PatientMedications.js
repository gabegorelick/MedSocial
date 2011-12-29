Ext.namespace('MedSocial.views.patient');

MedSocial.views.patient.PatientMedications = Ext.extend(Ext.List, {
	itemTpl: '{name}: {dose}', // TODO use html for fancier items
	store: MedSocial.stores.medicationStore,
	onItemDisclosure: function(record, btn, index) {
		Ext.dispatch({
			controller: MedSocial.controllers.patient.patientMedicationController,
			action: 'edit'
		});
	}
});