Ext.namespace('MedSocial.models');

Ext.regModel('MedSocial.models.AlertRepetition', {
	fields: [{
		name: 'day'
	}],
	belongsTo: ['MedSocial.models.Medication']
});

MedSocial.models.Medication = Ext.regModel('MedSocial.models.Medication', {
	fields: [{
		name: 'id',
		type: 'int'
	}, {
		name: 'name',
		type: 'string'
	}, {
		name: 'directions',
		type: 'string'
	}, {
		name: 'start',
		type: 'date',
		dateFormat: 'U' // Unix time, see http://docs.sencha.com/touch/1-1/#!/api/Date
	}, {
		name: 'end',
		type: 'date',
		dateFormat: 'U'
	}, {
		name: 'alertTime',
		type: 'date',
		dateFormat: 'H:i:s.u'
	}],
	
	hasMany: {
		model: 'MedSocial.models.AlertRepetition',
		name: 'alertRepetitions'
	},

	toCalendarEvent: function() {
		var me = this;
		
		return Ext.ModelMgr.create({
			id : me.get('id'),
			title: me.get('name'),
			start: me.get('start'),
			end: me.get('end')
		}, 'MedSocial.models.CalendarEvent');
	}
});