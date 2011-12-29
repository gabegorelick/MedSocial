// the Sencha docs say this should go above the MVC directory layout, but I think it's more of a controller

Ext.setup({
	onReady: function() {
		var viewport = new MedSocial.patient.PatientViewport();
		
		// work around bug in TouchCalendar
		viewport.calendar.setMode('day');
	}
});