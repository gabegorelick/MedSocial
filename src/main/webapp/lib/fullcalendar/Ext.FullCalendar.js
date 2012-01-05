Ext.FullCalendar = Ext.extend(Ext.Panel, {
	// unique id for  fullcalendar placeholder
	placeholder_id : Ext.id(),
	
	scroll : 'vertical',
		
	// TODO pass all client values to fullcalendar 
		
	initComponent : function() {
		var me = this;
		
		this.defaultView = this.defaultView || 'month';
				
		// placeholder div for fullcalendar
		me.html = "<div id=" + me.placeholder_id + "></div>";

		//apply fullcalender when panel is rendered
		me.on('afterlayout', function() {
			me.renderFullCalendar();
			me.applySwipeEvent();
			
			// so css fixes get applied
			me.changeCalendarView(me.defaultView);

			me.scroller.on('scrollstart', function() {
				me.suspendEvents();
			});

			me.scroller.on('scrollend', function() {
				me.resumeEvents();
			});
			
			me.slots = [];
			Ext.each(Ext.DomQuery.select('.fc-view-agendaDay .fc-agenda-slots tr'), function(item) {
				me.slots.push(new Ext.Element(item));
			});
		});
		
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
						pressed : (me.defaultView == "month") ? true : false,
						handler : function() {
							me.changeCalendarView('month');
						}
					}, {
						text : 'Week',
						ui : 'action',
						pressed : (me.defaultView == "agendaWeek") ? true : false,
						handler : function() {
							me.changeCalendarView('agendaWeek');
						}
					}, {
						text : 'Day',
						ui : 'action',
						pressed : (me.defaultView == "agendaDay") ? true : false,
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
		
		me.fullCalendar = $('#' + me.placeholder_id);
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
		
		this.draggables = [];
		this.viewName = this.defaultView;
		this.ignoreEventClick = false;
		
		$('#' + me.placeholder_id).fullCalendar({
			hideHeaders : true, //new property to hide full calendar header
			editable : false, // drag & drop through sencha, NOT jQuery
			allDaySlot: false,
			defaultView: me.defaultView, // not really default view, just switches view immediately after render
			events : this.calendarEvents,
			dayClick : function(date, allDay, jsEvent, view) {
				me.fireEvent('dayclick', date, allDay, jsEvent, view, this);
			},
			eventClick : function(calEvent, jsEvent, view) {
				if (!me.isDraggingCalendarEvent()) {
					me.fireEvent('eventclick', calEvent, jsEvent, view, this);
				}
			},
			eventRender: function(calEvent, element, view) {
				var fcContent = Ext.DomQuery.selectNode('.fc-content');
				var region = Ext.util.Region.getRegion(fcContent);
				
				// FIXME this only works for day (not month or week)
				
				var slot0 = new Ext.Element(Ext.DomQuery.selectNode('.fc-view-agendaDay .fc-slot0 .fc-agenda-axis'));
				region.top = slot0.getY();
				region.left = slot0.getWidth() + slot0.getX();
				
				// TODO allow scrolling while dragging by dynamically updating region on scroll
				
				var draggable = new Ext.util.Draggable(element[0], {
					constrain: new Ext.ux.ElementRegion(region),
					listeners: {
						// listening for offsetchange would give us live updates, but that's
						// way too expensive TODO check if more efficient in Touch 2.0
						dragend: function(draggable, offset) {
							var newTime = me.getTimeForLocation(this.region.top, calEvent.start);
							if (newTime.valueOf() !== calEvent.start.valueOf) {
								// updateEvent is very expensive, so avoid it at all costs
								calEvent.start = newTime;
								$('#' + me.placeholder_id).fullCalendar('updateEvent', calEvent);
								
								// events sometimes have artifacts on the left border after update,
								// seems to be a Chrome issue, b/c it looks fine in mobile browsers
							}
							// FIXME this isn't always triggered on Android (often need to swipe after drag)
						}
					}
				});

				me.draggables.push(draggable);
			},
			eventsClear: function() {
				// custom callback to prevent the list of draggables getting too big
				me.clearDraggables();
			},
			viewDisplay: function(view) {
				me.viewName = view.name;
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
	/**
	 * Get a time that corresponds to the given location on the calendar.
	 * E.g. 100px might correspond to 8:35 am. If passed a date object,
	 * uses said date as a template for the resulting value. E.g. this
	 * function may not be able to determine month, but passing it a correctly
	 * initialized Date ensures the return value of this function is accurate.
	 */
	getTimeForLocation: function(y, origDate) {
		var index = 0;
		Ext.each(this.slots, function(item, i) {
			if (item.getY() > y) {
				return false;
			} else {
				// set index to index of greatest slot <= y
				index = i;
			}
		});
		
		// correct time is somewhere between top and bottom
		var top = this.slots[index].getY();
		var bottom = this.slots[index + 1].getY();
		
		var minutesPerPixel = 30 / (bottom - top);
		var minutes = (y - top) * minutesPerPixel;
		
		var time = new Date();
		if (Ext.isDefined(origDate)) {
			time.setTime(origDate.valueOf());
		}
		
		// slot0 = 0 , slot1 = 0.5, etc.
		var hour = /fc-slot(\d+)/.exec(this.slots[index].dom.className)[1] / 2;
		time.setHours(hour);
		
		if (hour % 1 === 0) {
			time.setMinutes(minutes);
		} else {
			// top is half hour marker
			time.setMinutes(minutes + 30);
		}
		
		return time;
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
		if (direction == "left") {
			$('#' + this.placeholder_id).fullCalendar('next');
		} else if (direction == "right") {
			$('#' + this.placeholder_id).fullCalendar('prev');
		}
		this.changeTitle();
	},
	
	/**
	 * Clear the array of Ext.Draggables. Used when calendar events are destroyed
	 * so the array doesn't needlessly accumulate duplicate draggables.
	 */
	clearDraggables: function() {
		this.draggables = [];
	},
	
	/**
	 * Returns true if user is currently dragging a calendar event.
	 * Useful for canceling spurious events, e.g. a click while
	 * the calendar event is being dragged. 
	 */
	isDraggingCalendarEvent: function() {
		var dragging = false;
		Ext.each(this.draggables, function(item) {
			// don't swipe if we're in the middle of a drag
			if (item.isDragging()) {
				dragging = true;
				return false;
			}
		});
		return dragging;
	},
	applySwipeEvent : function() {
		var me = this;
		me.mon(me.scrollEl, {
			swipe : function(directionobj) {
				if (!me.isDraggingCalendarEvent()) {
					me.navigateCalendar(directionobj.direction);
				}
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

/**
 * Element whose only purpose is to contain a custom region returned by getPageBox().
 */
Ext.ux.ElementRegion = Ext.extend(Ext.Element, {
	constructor: function(region) {
		this.region = region;
	},	
	getPageBox: function() {
		return this.region;
	}
});