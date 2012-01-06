Ext.namespace('MedSocial.patient');

MedSocial.views.patient.PatientHome = Ext.extend(Ext.ux.FullCalendar, {
//	eventStore: MedSocial.stores.userMedicationStore,	
	
	draggableEvents: true,
	fullCalendar: {
		defaultView: 'agendaDay',
		allDaySlot: false
	},	
	
	initComponent: function() {
		
		// TODO use store instead of manually loading events
		var calendarEvents = [];
		Ext.each(MedSocial.stores.userMedicationEvents.getRange(), function(item) {
			var calendarEvent = item.toCalendarEvent();
			calendarEvents.push(calendarEvent[calendarEvent.persistanceProperty]);
		});
		
		this.fullCalendar.events = calendarEvents;
		
		MedSocial.views.patient.PatientHome.superclass.initComponent.apply(this, arguments);
	},
	
	// TODO drag & drop support for events
	
	listeners : {
		eventclick : function(calEvent, jsEvent, view, fc) {
			Ext.dispatch({
				controller: MedSocial.controllers.patient.patientMedicationController,
				action: 'show',
				record: MedSocial.stores.userMedicationEvents.getById(calEvent.id)
			});
		}
	}

});