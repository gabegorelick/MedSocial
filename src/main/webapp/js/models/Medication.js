Ext.namespace('MedSocial.models');

MedSocial.models.Medication = Ext.regModel('MedSocial.models.Medication', {
	fields: [{
		name: 'name',
		type: 'string'
	}, {
		name: 'dose',
		type: 'string'
	}, {
		name: 'start',
		type: 'date',
		dateFormat: 'c'
	}, {
		name: 'end',
		type: 'date',
		dateFormat: 'c'
	}]
});