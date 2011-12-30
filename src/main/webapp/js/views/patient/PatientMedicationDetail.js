MedSocial.views.patient.PatientMedicationDetail = Ext.extend(Ext.Panel, {
	
	constructor: function(config) {
		config = Ext.apply({
			dockedItems: [{
				xtype: 'toolbar',
				title: config.record.get('name'),
				items: [{
					text: 'Back',
					ui: 'back',
					listeners: {
						tap: function() {
							Ext.dispatch({
								controller: MedSocial.controllers.patient.patientMedicationController,
								action: 'index',
								animation: {
									type: 'slide', 
									direction: 'right' // for a nice "undo" feeling
								}
							});
						}
					}
				}, {
					xtype: 'spacer'
				}, {
					text: 'Edit',
					ui: 'action',
					listeners: {
						tap: function() {
							Ext.dispatch({
								controller: MedSocial.controllers.patient.patientMedicationController,
								action: 'edit',
								id: this.record.getId()
							});
						}
					}
				}]
			}]
		}, config);
		
		MedSocial.views.patient.PatientMedicationDetail.superclass.constructor.call(this, config);
	}
	
});