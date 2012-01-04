Ext.ns('MedSocial.models');

MedSocial.models.CalendarEvent = Ext.regModel('MedSocial.models.CalendarEvent', {
	fields: [{
		name: 'id',
		type: 'auto'
	}, {
		name: 'title',
		type: 'string'
	}, {
		name: 'allDay',
		type: 'boolean'
	}, {
		name: 'start',
		type: 'date',
		dateFormat: 'u'
	}, {
		name: 'end',
		type: 'date',
		dateFormat: 'u'
	}]
});