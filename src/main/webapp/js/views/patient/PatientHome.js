Ext.namespace('MedSocial.patient');

MedSocial.views.patient.PatientHome = Ext.extend(Ext.ux.TouchCalendarView, {
	id: 'calendar',
	mode: 'day',
	value: new Date(),
	eventStore: MedSocial.stores.medicationStore,
	plugins: [new Ext.ux.TouchCalendarEvents()]
});