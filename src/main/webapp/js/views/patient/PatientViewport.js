Ext.namespace('MedSocial.views.patient');

// don't have TabPanel as root so that views can be "modal" and not have the tabs
MedSocial.views.patient.PatientViewport = Ext.extend(Ext.Panel, {
	fullscreen: true,
	layout: 'card',
	
	initComponent: function() {
		Ext.apply(this, {
			// need calendar higher up in call stack (this is where IoC would be helpful)
			calendar: new MedSocial.views.patient.PatientHome()
		});
		Ext.apply(this, {
			items: [{
				xtype: 'tabpanel',
				fullscreen: true,
				tabBar: {
					dock: 'bottom',
					layout: {
						pack: 'center'
					}
				}, items: [{
					title: 'Calendar',
					iconCls: 'home',
					xtype: 'panel',
					layout: 'fit',
					items: [this.calendar]
				}, {
					title: 'Medications',
					iconCls: 'settings', // TODO use better icons
					items: [new MedSocial.views.patient.PatientMedications()]
				}, {
					title: 'Doctors',
					html: 'Doctors page goes here',
					iconCls: 'user'
				}, {
					title: 'Notes',
					html: 'Notes page goes here',
					iconCls: 'favorites'
				}]
			}]
		});
		
		MedSocial.views.patient.PatientViewport.superclass.initComponent.apply(this, arguments);
	},
});