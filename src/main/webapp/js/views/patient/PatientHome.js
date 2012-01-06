Ext.namespace('MedSocial.patient');

MedSocial.views.patient.PatientHome = Ext.extend(Ext.ux.FullCalendar, {
	draggableEvents: true,
	store: MedSocial.stores.userMedicationStore,
	fullCalendar: {
		defaultView: 'agendaDay',
		allDaySlot: false
	},
	
	initComponent: function() {
		this.on('eventclick', function(calEvent, jsEvent, view, fc) {
			Ext.dispatch({
				controller: MedSocial.controllers.patient.patientMedicationController,
				action: 'show',
				record: this.store.getById(calEvent.id)
			});
		}, this);
		MedSocial.views.patient.PatientHome.superclass.initComponent.apply(this, arguments);
	}
});