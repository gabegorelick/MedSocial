Ext.namespace('MedSocial.stores');

Ext.ux.RestfulJsonWriter = Ext.extend(Ext.data.JsonWriter, {
	/**
	 * Write raw JSON data instead of wrapping everything in {records: [...]}
	 */
	writeRecords: function(request, data) {
		Ext.ux.RestfulJsonWriter.superclass.writeRecords.call(this, request, data);
		
		request.jsonData = request.jsonData[this.root];
		
		if (Ext.isArray(request.jsonData) && request.jsonData.length <= 1) {
			// don't need to wrap in array
			request.jsonData = request.jsonData[0];
		}
						
		return request;
	}
});

MedSocial.stores.MedicationStore = Ext.extend(Ext.data.Store, {
	constructor: function(config) {
						
		config = Ext.apply({
			model: 'MedSocial.models.Medication',
			proxy: {
				type: 'rest',
				url: config.url,
				writer: new Ext.ux.RestfulJsonWriter()
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
