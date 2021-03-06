Ext.namespace('MedSocial.views.patient');

MedSocial.views.patient.PatientMedicationList = Ext.extend(Ext.Panel, {
	layout: 'card',
	fullscreen: true,
	
	items: [{
		xtype: 'list',
		itemTpl: '{name}: {directions}', // TODO use html for fancier items
		store: MedSocial.stores.userMedicationStore,
		onItemDisclosure: function(record, btn, index) {
			Ext.dispatch({
				controller: MedSocial.controllers.patient.patientMedicationController,
				action: 'show',
				record: record
			});
		}
	}],
	
	initComponent: function() {
		// store is loaded by calendar
		MedSocial.stores.userMedicationStore.sort('name', 'ASC');
		MedSocial.views.patient.PatientMedicationList.superclass.initComponent.apply(this, arguments);
	}
});