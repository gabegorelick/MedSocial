MedSocial.views.patient.PatientMedicationDetail = Ext.extend(Ext.form.FormPanel, {
	
	constructor: function(config) {
		if (!Ext.isDefined(config) || !Ext.isDefined(config.record)) {
			throw 'Must pass record in config';
		}
		
		config = Ext.applyIf(config, {
			
		});
				
		MedSocial.views.patient.PatientMedicationDetail.superclass.constructor.call(this, config);
	},
	
	initComponent: function() {
		Ext.applyIf(this, {
			leftButton: {
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
			},
			rightButton: {
				text: 'Edit',
				ui: 'action',
				listeners: {
					scope: this,
					tap: function() {
						Ext.dispatch({
							controller: MedSocial.controllers.patient.patientMedicationController,
							action: 'edit',
							view: this,
							record: this.record
						}); 
					}
				}
			}
		});
		
		Ext.applyIf(this, {
			defaults: {
				disabled: true
			},
			submitOnAction: false,
			dockedItems: [{
				xtype: 'toolbar',
				title: this.record.get('name'),
				items: [this.leftButton, {
					xtype: 'spacer'
				}, this.rightButton]
			}],
			styleHtmlContent: true,
			scroll: 'vertical',
			items: [{
				xtype: 'textfield',
				name: 'name',
				label: 'Name',
				value: this.record.data.name
			}, {
				xtype: 'textareafield',
				name: 'directions',
				label: 'Directions',
				value: this.record.data.directions
			}, {
				xtype: 'datepickerfield',
				name: 'start',
				label: 'Start date',
				value: this.record.data.start
			}, {
				xtype: 'datepickerfield',
				name: 'end',
				label: 'End date',
				value: this.record.data.end
			}]
		});
		
		MedSocial.views.patient.PatientMedicationDetail.superclass.initComponent.apply(this, arguments);
	},
	
	setEditable: function(editable) {
		Ext.each(this.items.items, function(item) {
			item.setDisabled(!editable);
		});		
	}
	
//	listeners: {
//		// update template data
//		// have to wait until after templates are instantianted as components
//		render: function(me) {
//			Ext.each(me.items.items, function(item) {
//				item.update(me.record.data);
//			}, me);
//			
//		}
//	}	
});