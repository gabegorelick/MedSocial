// the Sencha docs say this should go above the MVC directory layout, but I think it's more of a controller

Ext.setup({
	onReady: function() {
		MedSocial.views.patient.viewport = new MedSocial.views.patient.PatientViewport();
	}
});