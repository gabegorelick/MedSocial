MedSocial.views.patient.PatientMedicationDetail = Ext.extend(Ext.form.FormPanel, {
	
	constructor: function(config) {
		if (!Ext.isDefined(config) || !Ext.isDefined(config.record)) {
			throw 'Must pass record in config';
		}
						
		MedSocial.views.patient.PatientMedicationDetail.superclass.constructor.call(this, config);
	},
	
	initComponent: function() {
		var me = this;
		
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
			scroll: 'vertical'
		});
		
		var items = [{
			xtype: 'textfield', // TODO tap field to edit instead of having to tap "Edit" button
			name: 'name',
			label: 'Name',
			value: this.record.get('name')
		}, {
			xtype: 'textareafield',
			name: 'directions',
			label: 'Directions',
			value: this.record.get('directions')
		}, {
			xtype: 'datepickerfield',
			name: 'start',
			label: 'Start date',
			value: this.record.get('start')
		}, {
			xtype: 'datepickerfield',
			name: 'end',
			label: 'End date',
			value: this.record.get('end')
		}, {
			xtype: 'timepickerfield',
			name: 'alertTime',
			label: 'Alert time',
			value: {
				hour: this.record.get('alertTime').getHours(),
				minute: this.record.get('alertTime').getMinutes()
			}
		}, {
			xtype: 'multiselectfield',
			name: 'alertRepetitions',
			label: 'Repeat alert',
			itemType: 'list',
			value: (function() {
				var result = [];
				me.record.alertRepetitions().each(function(rec) {
					result.push(rec.get('day'));
				});
				return result;
			})(),
			displayField: 'day',
			valueField: 'day',
			store: new Ext.data.Store({
				model: Ext.regModel('DayOfWeek', {
					fields: [{
						name: 'day',
						type: 'string'
					}]
				}),
				data: [{
					day: 'Sun'
				}, {
					day: 'Mon'
				}, {
					day: 'Tue'
				}, {
					day: 'Wed'
				}, {
					day: 'Thu'
				}, {
					day: 'Fri'
				}, {
					day: 'Sat'
				}]
			})
		}];
		
		Ext.applyIf(this, {
			items: items
		});
		
		MedSocial.views.patient.PatientMedicationDetail.superclass.initComponent.apply(this, arguments);
	}
});