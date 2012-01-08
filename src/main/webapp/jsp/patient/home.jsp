<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<title>MedSocial</title>
			
	<script src="<c:url value='/lib/sencha/sencha-touch/sencha-touch-debug.js'/>" type="text/javascript"></script>
	<link href="<c:url value='/lib/sencha/sencha-touch/resources/css/sencha-touch.css'/>" rel="stylesheet" type="text/css">
	
	<%-- TODO use minified versions of everything when we're done debugging --%>
		
	<script src="<c:url value='/lib/fullcalendar/jquery-1.5.2.js'/>" type="text/javascript"></script>
	<script src="<c:url value='/lib/fullcalendar/fullcalendar152/fullcalendar.js'/>" type="text/javascript"></script>
	<script src="<c:url value='/lib/fullcalendar/Ext.ux.FullCalendar.js'/>" type="text/javascript"></script>
	<link rel="stylesheet" href="<c:url value='/lib/fullcalendar/fullcalendar152/fullcalendar.css'/>" type="text/css">
    <link rel="stylesheet" href="<c:url value='/lib/fullcalendar/extended.css'/>" type="text/css">
    <link rel="stylesheet" href="<c:url value='/lib/fullcalendar/ical.css'/>" type="text/css">
	
	<script src="<c:url value='/js/overrides.js'/>" type="text/javascript"></script>
	
	<%-- write javascript variables to page --%>	
	<script type="text/javascript">
		Ext.namespace('MedSocial');
		MedSocial.contextPath = "${pageContext.request.contextPath}";
		MedSocial.userId = '18580476422013912411'; <%-- TODO get from model --%>
	</script>
	
	<%-- TODO compress all JS together --%>
	<script src="<c:url value='/js/models/CalendarEvent.js'/>" type="text/javascript"></script>
	<script src="<c:url value='/js/models/Medication.js'/>" type="text/javascript"></script>
	<script src="<c:url value='/js/stores/MedicationStore.js'/>" type="text/javascript"></script>
	<script src="<c:url value='/js/views/patient/PatientViewport.js'/>" type="text/javascript"></script>
	<script src="<c:url value='/js/views/patient/PatientMedicationList.js'/>" type="text/javascript"></script>
	<script src="<c:url value='/js/views/patient/PatientMedicationDetail.js'/>" type="text/javascript"></script>
	<script src="<c:url value='/js/views/patient/PatientEditMedication.js'/>" type="text/javascript"></script>
	<script src="<c:url value='/js/views/patient/PatientHome.js'/>" type="text/javascript"></script>
	<script src="<c:url value='/js/views/patient/DoctorList.js'/>" type="text/javascript"></script>
	<script src="<c:url value='/js/controllers/patient/app.js'/>" type="text/javascript"></script>
	<script src="<c:url value='/js/controllers/patient/patientMedicationController.js'/>" type="text/javascript"></script>
	
	<link href="<c:url value='/css/page.css'/>" rel="stylesheet" type="text/css">
	
</head>
<body>

</body>
</html>