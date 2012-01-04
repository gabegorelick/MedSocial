Ext.namespace('MedSocial.patient');

MedSocial.views.patient.PatientHome = Ext.extend(Ext.FullCalendar, {
//	eventStore: MedSocial.stores.userMedicationStore,	
	
	defaultview: 'agendaDay',
	
	initComponent: function() {
		
		// TODO use store instead of manually loading events
		var calendarEvents = [];
		Ext.each(MedSocial.stores.userMedicationEvents.getRange(), function(item) {
			var calendarEvent = item.toCalendarEvent();
			calendarEvents.push(calendarEvent[calendarEvent.persistanceProperty]);
		});
		
		this.calendarEvents = calendarEvents;
		
		MedSocial.views.patient.PatientHome.superclass.initComponent.apply(this, arguments);
	},
	
	// TODO drag & drop support for events
	
	listeners : {
//		dayclick : function(date, allDay, jsEvent, view, fc) {
//			
//		},
		eventclick : function(calEvent, jsEvent, view, fc) {
			Ext.dispatch({
				controller: MedSocial.controllers.patient.patientMedicationController,
				action: 'show',
				record: MedSocial.stores.userMedicationEvents.getById(calEvent.id)
			});
		}
	}

});