MedSocial.views.patient.PatientEditMedication = Ext.extend(Ext.form.FormPanel, {
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'textfield',
				name: 'medicationName'
			}, {
				xtype: 'textareafield',
				name: 'directions'
			}, {
				xtype: 'datepickerfield',
				name: 'start'
			}, {
				xtype: 'datepickerfield',
				name: 'end'
			}]
		});
		
		MedSocial.views.patient.PatientEditMedication.superclass.initComponent.apply(this, arguments);
	}
});