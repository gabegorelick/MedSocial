Ext.FullCalendar = Ext.extend(Ext.Panel, {
	// unique id for  fullcalendar placeholder
	placeholder_id : Ext.id(),
	// placeholder_id : 'fullcalendar',
	defaultview : 'month',
	scroll : 'vertical',
		
	initComponent : function() {
		var me = this;

		// placeholder div for fullcalendar
		me.html = "<div id=" + me.placeholder_id + "></div>";

		//apply fullcalender when panel is rendered
		me.on('afterrender', function() {
			me.renderFullCalendar();
			me.applySwipeEvent();
			me.changeCalendarView(me.defaultview);

			me.scroller.on('scrollstart', function() {
				me.suspendEvents();
			});

			me.scroller.on('scrollend', function() {
				me.resumeEvents();
			});
		});

						
//		this.monthToolBar = new Ext.Panel({
//			dock : 'top',
//			id : 'monthtitle',
//			height : 25
//		});
//		
//		
		
		if (!me.dockedItems) {
			me.topToolBar = me.topToolBar || new Ext.Toolbar({
				dock : 'top',
				items : [ {
					text : 'Today',
					ui : 'action',
					handler : function() {
						me.viewToday();
					}
				} ]
			});
						
			me.bottomToolBar = me.bottomToolBar || new Ext.Toolbar({
				dock : 'bottom',
				items : [ {
					xtype : 'button',
					iconMask : true,
					ui : 'action',
					iconCls : 'arrow_left',
					handler : function() {
						me.navigateCalendar('left');
					}
				}, {
					xtype : 'spacer'
				}, {
					xtype: 'segmentedbutton',
					items : [ {
						text : 'Month',
						ui : 'action',
						pressed : (me.defaultview == "month") ? true : false,
						handler : function() {
							me.changeCalendarView('month');
						}
					}, {
						text : 'Week',
						ui : 'action',
						pressed : (me.defaultview == "agendaWeek") ? true : false,
						handler : function() {
							me.changeCalendarView('agendaWeek');
						}
					}, {
						text : 'Day',
						ui : 'action',
						pressed : (me.defaultview == "agendaDay") ? true : false,
						handler : function() {
							me.changeCalendarView('agendaDay');
						}
					} ]
				}, {
					xtype : 'spacer'
				}, {
					xtype : 'button',
					iconMask : true,
					ui : 'action',
					iconCls : 'arrow_right',
					handler : function() {
						me.navigateCalendar('right');
					}
				} ]
			});

			me.dockedItems = [ me.topToolBar, me.bottomToolBar ];
		}
		
		me.titleComponent = me.titleComponent || me.topToolBar;
		
		Ext.FullCalendar.superclass.initComponent.apply(this, arguments);
	},
	/**
	 * Get Full Calendar Placeholder Id
	 */
	getPlaceHolderId : function() {
		return this.placeholder_id;
	},
	/**
	 * Apply Fullcalendar widget to panel div
	 */
	renderFullCalendar : function() {
		var me = this;
		
//		this.eventStore.load();
		
		$('#' + me.placeholder_id).fullCalendar({
			hideHeaders : true, //new property to hide full calendar header
			editable : false,
			allDaySlot: false,
			events : this.calendarEvents,
			dayClick : function(date, allDay, jsEvent, view) {
				me.fireEvent('dayclick', date, allDay, jsEvent, view, this);
			},
			eventClick : function(calEvent, jsEvent, view) {
				me.fireEvent('eventclick', calEvent, jsEvent, view, this);
			},
			columnFormat : {
				month : 'ddd', // Mon
				week : (Ext.is.Phone) ? 'ddd' : 'ddd', // Mon 9/7
				agendaWeek : (Ext.is.Phone) ? 'ddd d' : 'ddd d', // Mon 9/7
				day : 'dddd M/d', // Monday 9/7
				agendaDay : 'dddd M/d' // Monday 9/7

			},
			titleFormat : {
				agendaDay : 'ddd MMM d, yyyy',
				agendaWeek : "MMM d[ yyyy]{ '&#8212;'[ MMM] d, yyyy}"
			}
		});
		me.changeTitle();
	},
	getBottomToolBar : function() {
		return this.bottomToolBar;
	},
	changeCalendarView : function(view) {
		var me = this;

		$('#' + me.placeholder_id).fullCalendar('changeView', view);

		// to fix issue regarding the scroll area of week and day not taking full height. 
		if (view == "month") {
			$(".fc-view-month").removeAttr("style");
			$(".fc-view-agendaWeek").css({
				"position" : 'relative'
			});
			$(".fc-view-agendaDay").css({
				"position" : 'relative'
			});
		} else if (view == "agendaWeek") {
			$(".fc-view-agendaWeek").removeAttr("style");
			$(".fc-view-agendaDay").css({
				"position" : 'relative'
			});
			$(".fc-view-month").css({
				"position" : 'relative'
			});
		} else if (view == "agendaDay") {
			$(".fc-view-agendaDay").removeAttr("style");
			$(".fc-view-agendaWeek").css({
				"position" : 'relative'
			});
			$(".fc-view-month").css({
				"position" : 'relative'
			});
		}
		me.scroller.scrollTo(0, false);
		me.changeTitle();
	},
	viewToday : function() {
		$('#' + this.placeholder_id).fullCalendar('today');
		this.changeTitle();
	},
	navigateCalendar : function(direction) {
		var me = this;
		if (direction == "left") {
			$('#' + me.placeholder_id).fullCalendar('next');
		} else if (direction == "right") {
			$('#' + me.placeholder_id).fullCalendar('prev');
		}
		me.changeTitle();
	},
	applySwipeEvent : function() {
		var me = this;
		me.mon(me.scrollEl, {
			swipe : function(directionobj) {
				me.navigateCalendar(directionobj.direction);
			}
		});
	},
	changeTitle : function() {
		var me = this;
		if (me.titleComponent) {
			me.titleComponent.setTitle($('#' + me.placeholder_id).fullCalendar('getView').title);
		}
	}

});

Ext.reg('fullcalendarpanel', Ext.FullCalendar);