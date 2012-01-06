Ext.ux.FullCalendar = Ext.extend(Ext.Panel, {
	// unique id for  fullcalendar placeholder
	placeholder_id : Ext.id(),
	
	scroll : 'vertical',
				
	initComponent : function() {
		var me = this;
		
		this.fullCalendar = this.fullCalendar || {};
		this.fullCalendar.defaultView = this.fullCalendar.defaultView || 'month';
				
		// placeholder div for fullcalendar
		me.html = "<div id=" + me.placeholder_id + "></div>";

		//apply fullcalender when panel is rendered
		me.on('afterlayout', function() {
			// cache the element so we don't have to always traverse DOM
			me.fc = $('#' + me.placeholder_id);
						
			me.renderFullCalendar();
			me.applySwipeEvent();
			
			// so css fixes get applied
			me.changeCalendarView(me.fullCalendar.defaultView);

			me.scroller.on('scrollstart', function() {
				me.suspendEvents();
			});

			me.scroller.on('scrollend', function() {
				me.resumeEvents();
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
						pressed : (me.fullCalendar.defaultView == "month") ? true : false,
						handler : function() {
							me.changeCalendarView('month'); // TODO scroll to 0 after change
						}
					}, {
						text : 'Week',
						ui : 'action',
						pressed : (me.fullCalendar.defaultView == "agendaWeek") ? true : false,
						handler : function() {
							me.changeCalendarView('agendaWeek');
						}
					}, {
						text : 'Day',
						ui : 'action',
						pressed : (me.fullCalendar.defaultView == "agendaDay") ? true : false,
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
		
		Ext.ux.FullCalendar.superclass.initComponent.apply(this, arguments);
	},
	refetchEvents: function() {
		this.fc.fullCalendar('refetchEvents');
	},
	/**
	 * Get Full Calendar Placeholder Id
	 */
	getPlaceHolderId : function() {
		return this.placeholder_id;
	},
	/**
	 * Get a Full Calendar Event Object for a given model.
	 * See http://arshaw.com/fullcalendar/docs/event_data/Event_Object/
	 */
	getCalendarEvent: function(model) {
		if (Ext.isFunction(model.toCalendarEvent)) {
			var calEvent = model.toCalendarEvent();
			if (Ext.isDefined(model.persistanceProperty)) {
				// get raw data
				return calEvent[calEvent.persistanceProperty];
			} else {
				return calEvent;
			}
		} else {
			return model;
		}
	},
	/**
	 * Apply Fullcalendar widget to panel div
	 */
	renderFullCalendar : function() {
		var me = this;
		
		this.draggables = [];
		this.viewName = this.fullCalendar.defaultView;
		
		var fullCalendarConfig = Ext.applyIf(me.fullCalendar, {
			hideHeaders : true, //new property to hide full calendar header
			editable : false, // drag & drop through sencha, NOT jQuery
			dayClick : function(date, allDay, jsEvent, view) {
				me.fireEvent('dayclick', date, allDay, jsEvent, view, this);
			},
			eventClick : function(calEvent, jsEvent, view) {
				if (!me.isDraggingCalendarEvent()) {
					me.fireEvent('eventclick', calEvent, jsEvent, view, this);
				}
			},
			eventsClear: function() {
				// custom callback to prevent the list of draggables getting too big
				me.clearDraggables();
			},
			events: function(start, end, callback) {
				if (!me.store) {
					throw 'Must specify a store for events or else override events property';
				}
				
				var processEvents = function(rawEvents) {
					var calEvents = [];
					Ext.each(rawEvents, function(item) {
						calEvents.push(me.getCalendarEvent(item));
					});
					
					callback(calEvents);
				};
				
				if (me.forceStoreLoad || !me.storeLoaded) {
					me.store.load(function(records, operation, success) {
						me.storeLoaded = true;
						processEvents.call(me, records);
					});
				} else {
					processEvents.call(me, me.store.getRange());
				}
			},
			viewDisplay: function(view) {
				me.viewName = view.name;
				
				// force update of events if they've changed
				if (me.shouldRefetchEvents) {
					me.fc.fullCalendar('refetchEvents');
					me.shouldRefetchEvents = false;
				}
				
				me.slots = [];
				if (me.viewName === 'agendaDay') {
					Ext.each(Ext.DomQuery.select('.fc-view-agendaDay .fc-agenda-slots tr'), function(item) {
						me.slots.push(new Ext.Element(item));
					});
				} else if (me.viewName === 'agendaWeek') {
					Ext.each(Ext.DomQuery.select('.fc-view-agendaWeek .fc-agenda-slots tr'), function(item) {
						me.slots.push(new Ext.Element(item));
					});
					
					me.weekHeaders = [];
					var headers = Ext.DomQuery.select('.fc-view-agendaWeek .fc-first th.fc-widget-header').splice(1, 7);
					Ext.each(headers, function(item) {
						me.weekHeaders.push(new Ext.Element(item));
					});
				} else if (me.viewName === 'month') {
					me.monthRows = [];
					Ext.each(Ext.DomQuery.select('.fc-view-month tbody tr'), function(item) {
						me.monthRows.push(new Ext.Element(item));
					});
				}
								
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
		
		if (this.draggableEvents) {
			fullCalendarConfig.eventRender = function(calEvent, element, view) {
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
							// TODO use center of region instead of corner
							var newTime = me.getTimeForLocation(draggable.region.left, draggable.region.top, calEvent.start);							
							calEvent.start = newTime;
							me.fc.fullCalendar('updateEvent', calEvent);
							
							if (me.store) {
								// update original model
								var record = me.store.getById(calEvent.id);
								record.set('start', calEvent.start);
								record.set('end', calEvent.start);
							}

							// events sometimes have artifacts on the left border after update,
							// seems to be a Chrome issue, b/c it looks fine in mobile browsers

							// FIXME dragend isn't always triggered on Android (often need to swipe after drag)
						}
					}
				});

				me.draggables.push(draggable);
			};
		}
		
		me.fc.fullCalendar(fullCalendarConfig);
				
		me.changeTitle();
	},
	/**
	 * Get a time that corresponds to the given location on the calendar.
	 * E.g. 100px might correspond to 8:35 am. If passed a date object,
	 * uses said date as a template for the resulting value. E.g. this
	 * function may not be able to determine month, but passing it a correctly
	 * initialized Date ensures the return value of this function is accurate.
	 */
	getTimeForLocation: function(x, y, origDate) {
		if (this.viewName === 'month') {
			return this.getTimeForLocationMonth(x, y, origDate);
		}
		
		var slots = this.slots;
		
		var index = 0;
		Ext.each(slots, function(item, i) {
			if (item.getY() > y) {
				return false;
			} else {
				// set index to index of greatest slot <= y
				index = i;
			}
		});
		
		// correct time is somewhere between top and bottom
		var top = slots[index].getY();
		var bottom = slots[index + 1].getY();
		
		var minutesPerPixel = 30 / (bottom - top);
		var minutes = (y - top) * minutesPerPixel;
		
		var time = new Date();
		if (Ext.isDefined(origDate)) {
			time.setTime(origDate.valueOf());
		}
		
		// slot0 = 0 , slot1 = 0.5, etc.
		var hour = /fc-slot(\d+)/.exec(slots[index].dom.className)[1] / 2;
		time.setHours(hour);
		
		if (hour % 1 === 0) {
			time.setMinutes(minutes);
		} else {
			// top is half hour marker
			time.setMinutes(minutes + 30);
		}
		
		if (this.viewName === 'agendaWeek' || this.viewName === 'month') {
			time.setDate(this.getDayForLocation(x));
		}
		
		return time;
	},
	/**
	 * If the calendar is in month view, get the time given a location.  
	 */
	getTimeForLocationMonth: function(x, y, origDate) {
		if (this.viewName !== 'month') {
			throw "must be month view";
		}
		
		var index = -1;
		Ext.each(this.monthRows, function(item) {
			if (item.getY() > y) {
				return false;
			} else {
				index++;
			}
		});
		var week = this.monthRows[index];
		
		// iterate over days
		var dayElement = null;
		Ext.each(week.query('td'), function(item) {
			item = new Ext.Element(item);
			if (item.getX() > x) {
				return false;
			} else {
				dayElement = item;
			}
		});

		// get day of month
		var day = dayElement.query('.fc-day-number')[0].innerText;

		// get month
		var month = this.fc.fullCalendar('getDate').getMonth();
		if (/fc-other-month/.test(dayElement.dom.className)) {
			// in another month on this calendar
			if (/fc-week0/.test(week.dom.className)) {
				// if this is the first week, it must be the month before
				month--;
			} else {
				month++;
			}
		}
				
		var time = new Date();
		if (Ext.isDefined(origDate)) {
			time.setTime(origDate.valueOf());
		}
		
		time.setMonth(month);
		time.setDate(day);
		
		// don't set hour or minute, that's too fine-grained
		
		return time;
	},
	getDayForLocation: function(x) {
		if (this.viewName === 'agendaWeek') {
			var index = -1;
			Ext.each(this.weekHeaders, function(item) {
				if (item.getX() > x) {
					return false;
				} else {
					index++;
				}
			});
			
			return /\d+/.exec(this.weekHeaders[index].dom.innerText);
		}				
	},
	getBottomToolBar : function() {
		return this.bottomToolBar;
	},
	changeCalendarView : function(view) {
		var me = this;
		
		this.fc.fullCalendar('changeView', view);

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
		this.fc.fullCalendar('today');
		this.changeTitle();
	},
	navigateCalendar : function(direction) {
		if (direction == "left") {
			this.fc.fullCalendar('prev');
		} else if (direction == "right") {
			this.fc.fullCalendar('next');
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
			me.titleComponent.setTitle(this.fc.fullCalendar('getView').title);
		}
	}

});

Ext.reg('fullcalendarpanel', Ext.ux.FullCalendar);

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