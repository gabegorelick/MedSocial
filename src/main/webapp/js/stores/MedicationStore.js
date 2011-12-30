Ext.namespace('MedSocial.stores');

MedSocial.stores.MedicationStore = Ext.extend(Ext.data.Store, {
	constructor: function(config) {
		config = Ext.apply({
			model: 'MedSocial.models.Medication',
			proxy: {
				type: 'rest',
				url: config.url
			}
		}, config);
				
		MedSocial.stores.MedicationStore.superclass.constructor.call(this, config);
	}
	
});

/**
 * MedicationStore for the current user
 */
MedSocial.stores.userMedicationStore = new MedSocial.stores.MedicationStore({
	url: MedSocial.contextPath + '/patient/' + MedSocial.userId + '/medications'
});
