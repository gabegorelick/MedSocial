Ext.setup({
	onReady: function() {
		calendarView = new Ext.ux.TouchCalendarView({
			mode: 'day'
		});
				
		var calendarPanel = new Ext.Panel({
			fullscreen: true,
			layout: 'fit',
			items: [calendarView]
		});
		
		calendarView.setMode('day');
	}
});






//Ext.setup({
//	onReady: function() {
//		
//		// TODO figure out why TouchCalendar doesn't work
//		Ext.reg('calendar', Ext.ux.TouchCalendarView);
//		
//		Ext.regModel('Event', {
//		    fields: [{
//		        name: 'title',
//		        type: 'string'
//		    }, {
//		        name: 'dose',
//		        type: 'string'
//		    }, {
//		        name: 'start',
//		        type: 'date',
//		        dateFormat: 'c'
//		    }, {
//		        name: 'end',
//		        type: 'date',
//		        dateFormat: 'c'
//		    }]
//		});
//		
//		new Ext.Application({
//		    launch: function() {
//		        new Ext.TabPanel({
//		            tabBar: {
//		            	dock: 'bottom',
//		            	layout: {
//		            		pack: 'center'
//		            	}
//		            },
//		            fullscreen: true,
//		            items: [{
//		            	title: 'Calendar',
//		            	id: 'calendar',
//		            	iconCls: 'home',
//		            	xtype: 'panel',
//		            	layout: 'fit',
//		            	scroll: 'vertical',
//		            	items: [{
//		            		xtype: 'calendar',
//		            		mode: 'day',
//			                value: new Date(),
//			                minDate: (new Date()).add(Date.DAY, -40),
//	                        maxDate: (new Date()).add(Date.DAY, 55),
//			                eventStore: new Ext.data.Store({
//		            			model: 'Event',
//		            		    data: [{
//		            		        title: 'Penicillin',
//		            		        dose: '2',
//		            		        start: new Date(),
//		            		        end: new Date()
//		            		    }]
//		            		}),
//		            		plugins: [new Ext.ux.TouchCalendarEvents()]
//		            	}]
//		            }, {
//		            	title: 'Medications',
//		            	html: 'Prescriptions page goes here',
//		            	iconCls: 'settings' // TODO use better icons
//		            }, {
//		            	title: 'Doctors',
//		            	html: 'Doctors page goes here',
//		            	iconCls: 'user'
//		            }, {
//		            	title: 'Notes',
//		            	html: 'Notes page goes here',
//		            	iconCls: 'favorites'
//		            }]
//		        });
//		    }
//		});
//	}
//});