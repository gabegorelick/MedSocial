Ext.namespace('MedSocial.models');

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
	}]
});