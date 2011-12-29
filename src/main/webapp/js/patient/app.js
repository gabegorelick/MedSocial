Ext.setup({
	onReady: function() {
		var viewport = new MedSocial.patient.PatientViewport();
		
		// work around bug in TouchCalendar
		viewport.calendar.setMode('day');
	}
});