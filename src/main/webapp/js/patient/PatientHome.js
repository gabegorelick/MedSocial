Ext.namespace('MedSocial.patient');

Ext.regModel('Event', {
	fields: [{
		name: 'title',
		type: 'string'
	}, {
		name: 'dose',
		type: 'string'
	}, {
		name: 'start',
		type: 'date',
		dateFormat: 'c'
	}, {
		name: 'end',
		type: 'date',
		dateFormat: 'c'
	}]
});

MedSocial.patient.PatientHome = Ext.extend(Ext.ux.TouchCalendarView, {
	id: 'calendar',
	mode: 'day',
	value: new Date(),
	eventStore: new Ext.data.Store({
		model: 'Event',
		data: [{ // TODO get real data from server
			title: 'Penicillin',
			dose: '2',
			start: new Date(),
			end: new Date()
		}]
	}),
	plugins: [new Ext.ux.TouchCalendarEvents()]
});