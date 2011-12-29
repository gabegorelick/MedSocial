// the Sencha docs say this should go above the MVC directory layout, but I think it's more of a controller

Ext.setup({
	onReady: function() {
		MedSocial.views.patient.viewport = new MedSocial.views.patient.PatientViewport();
		
		// work around bug in TouchCalendar, for some reason this only works after calendar is instantiated
		MedSocial.views.patient.viewport.calendar.setMode('day');
	}
});