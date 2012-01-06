Ext.namespace('MedSocial.views.patient');

// don't have TabPanel as root so that views can be "modal" and not have the tabs
MedSocial.views.patient.PatientViewport = Ext.extend(Ext.Panel, {
	fullscreen: true,
	layout: 'card',
	
	initComponent: function() {
		var patientHome = new MedSocial.views.patient.PatientHome(); 
		var calendar = new Ext.Panel({
			title: 'Calendar',
			iconCls: 'home',
			layout: 'fit',
			items: [patientHome]
		});
		
		Ext.apply(this, {
			// used by controllers to go from a modal view to a non-modal view
			tabPanel: new Ext.TabPanel({
				fullscreen: true,
				tabBar: {
					dock: 'bottom',
					layout: {
						pack: 'center'
					}
				}, items: [calendar, {
					title: 'Medications',
					iconCls: 'settings', // TODO use better icons
					items: [new MedSocial.views.patient.PatientMedicationList()]
				}, {
					title: 'Doctors',
					html: 'Doctors page goes here',
					iconCls: 'user'
				}, {
					title: 'Notes',
					html: 'Notes page goes here',
					iconCls: 'favorites'
				}]
			})
		});
		
		Ext.apply(this, {
			items: [this.tabPanel]
		});
		
		// Full Calendar doesn't re-render events unless they're already displayed,
		// so wait until calendar is active and then force a refresh
		this.on('cardswitch', function(me, newCard) {
			if (newCard === me.tabPanel) {
				if (me.tabPanel.getActiveItem() === calendar) {
					patientHome.refetchEvents();
				}
			}
		});
		
		this.tabPanel.on('cardswitch', function(me, newCard) {
			if (newCard === calendar) {
				patientHome.refetchEvents();
			}
		});
		
		MedSocial.views.patient.PatientViewport.superclass.initComponent.apply(this, arguments);
	},
});