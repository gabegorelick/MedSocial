MedSocial.views.patient.PatientMedicationDetail = Ext.extend(Ext.Panel, {
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Medication details',
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
});