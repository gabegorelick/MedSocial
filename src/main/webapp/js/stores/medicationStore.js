Ext.namespace('MedSocial.stores');

MedSocial.stores.medicationStore = (function() {
	// FIXME TouchCalendar doesn't respect times
	var time = new Date();
	time.setHours(7);
		
	return new Ext.data.Store({
		model: 'MedSocial.models.Medication',
		data: [{ // TODO get real data from server
			name: 'Penicillin',
			dose: '2',
			start: time,
			end: time
		}, {
			name: 'Altace',
			dose: '1 daily',
			start: time,
			end: time
		}]
	});
})();
