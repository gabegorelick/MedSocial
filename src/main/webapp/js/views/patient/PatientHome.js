Ext.namespace('MedSocial.patient');

Ext.override(Ext.ux.TouchCalendarView, {
	
});

MedSocial.views.patient.PatientHome = Ext.extend(Ext.ux.TouchCalendarView, {
	// FIXME TouchCalendar doesn't respect times
	id: 'calendar',
	mode: 'day',
	value: new Date(),
	eventStore: MedSocial.stores.userMedicationEvents,
	plugins: [new Ext.ux.TouchCalendarEvents({
		eventBarTpl: new Ext.XTemplate('{name}')
	})]
});