MedSocial.views.patient.PatientEditMedication = Ext.extend(Ext.form.FormPanel, {
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'textfield',
				name: 'medicationName',
				label: 'Name'
			}, {
				xtype: 'textareafield',
				name: 'directions',
				label: 'Directions'
			}, {
				xtype: 'datepickerfield',
				name: 'start',
				label: 'Start date'
			}, {
				xtype: 'datepickerfield',
				name: 'end',
				label: 'End date'
			}]
		});
		
		MedSocial.views.patient.PatientEditMedication.superclass.initComponent.apply(this, arguments);
	}
});