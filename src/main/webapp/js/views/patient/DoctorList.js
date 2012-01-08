MedSocial.views.patient.DoctorList = Ext.extend(Ext.Panel, {
	
	initComponent: function() {
		var me = this;
		this.on('render', function() {
			// remote load content
			Ext.Ajax.request({
				url: MedSocial.contextPath + '/patient/' + MedSocial.userId + '/doctors',
				headers: {
					'Accept': 'text/html'
				},
				success: function(response) {
					me.update(response.responseText);
				}
			});
		});
		
		MedSocial.views.patient.DoctorList.superclass.initComponent.apply(this, arguments);
	}
});