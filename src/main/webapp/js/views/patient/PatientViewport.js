Ext.namespace('MedSocial.patient');

MedSocial.patient.PatientViewport = Ext.extend(Ext.TabPanel, {
	tabBar: {
		dock: 'bottom',
		layout: {
			pack: 'center'
		}
	},
	fullscreen: true,
	initComponent: function() {
		Ext.apply(this, {
			// need calendar higher up in call stack (this is where IoC would be helpful)
			calendar: new MedSocial.patient.PatientHome()
		});
		Ext.apply(this, {
			items: [{
				title: 'Calendar',
				iconCls: 'home',
				xtype: 'panel',
				layout: 'fit',
				items: [this.calendar]
			}, {
				title: 'Medications',
				html: 'Prescriptions page goes here',
				iconCls: 'settings' // TODO use better icons
			}, {
				title: 'Doctors',
				html: 'Doctors page goes here',
				iconCls: 'user'
			}, {
				title: 'Notes',
				html: 'Notes page goes here',
				iconCls: 'favorites'
			}]
		});
		
		MedSocial.patient.PatientViewport.superclass.initComponent.apply(this, arguments);
	},
});