MedSocial.views.patient.PatientEditMedication = Ext.extend(MedSocial.views.patient.PatientMedicationDetail, {
	defaults: {
		disabled: false
	},
	
	initComponent: function() {
		Ext.applyIf(this, {
			leftButton: {
				text: 'Cancel',
				ui: 'back',
				listeners: {
					scope: this,
					tap: function() {
						Ext.dispatch({
							controller: MedSocial.controllers.patient.patientMedicationController,
							action: 'show',
							animation: {
								type: 'slide', 
								direction: 'right'
							},
							record: this.record
						});
					}
				}
			},
			rightButton: {
				text: 'Done',
				ui: 'action',
				listeners: {
					scope: this,
					tap: function() {
						this.updateRecord(this.record, true);
						
						// TimePicker stores everything as strings, so manually convert to Date
						this.record.set('alertTime', Date.parseDate(this.getValues()['alertTime'], 'H:i'));
						
						this.record.set('repeatAlert', []);
												
						// don't use model.save() since that uses model's implicit proxy
						this.record.store.sync();
						
						Ext.dispatch({
							controller: MedSocial.controllers.patient.patientMedicationController,
							action: 'show',
							view: this,
							record: this.record
						}); 
					}
				}
			}
		});
		MedSocial.views.patient.PatientEditMedication.superclass.initComponent.apply(this, arguments);
	}
});