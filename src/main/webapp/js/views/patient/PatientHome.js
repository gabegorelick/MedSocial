Ext.namespace('MedSocial.patient');

MedSocial.patient.PatientHome = Ext.extend(Ext.ux.TouchCalendarView, {
	id: 'calendar',
	mode: 'day',
	value: new Date(),
	plugins: [new Ext.ux.TouchCalendarEvents()],
	
	initComponent: function() {
		// FIXME TouchCalendar doesn't respect times
		var time = new Date();
		time.setHours(7);
		
		Ext.apply(this, {
			eventStore: new Ext.data.Store({
				model: 'MedSocial.models.Medication',
				data: [{ // TODO get real data from server
					title: 'Penicillin',
					dose: '2',
					start: time,
					end: time
				}]
			})
		});
		MedSocial.patient.PatientHome.superclass.initComponent.apply(this, arguments);
	}
});