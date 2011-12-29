<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<title>MedSocial</title>
		
	<script src="<c:url value='/lib/sencha/sencha-touch/sencha-touch.js'/>" type="text/javascript"></script>
	<link href="<c:url value='/lib/sencha/sencha-touch/resources/css/sencha-touch.css'/>" rel="stylesheet" type="text/css">
	
	<%-- TODO use minified versions when we're done debugging --%>
	<script src="<c:url value='/lib/sencha/Ext.ux.TouchCalendar/js/Ext.ux.TouchCalendarView.js'/>" type="text/javascript"></script>
	<link href="<c:url value='/lib/sencha/Ext.ux.TouchCalendar/css/Ext.ux.TouchCalendarView.css'/>" rel="stylesheet" type="text/css"/>
	<script src="<c:url value='/lib/sencha/Ext.ux.TouchCalendar/js/Ext.ux.TouchCalendarEvents.js'/>" type="text/javascript"></script>
	<link href="<c:url value='/lib/sencha/Ext.ux.TouchCalendar/css/Ext.ux.TouchCalendarEvents.css'/>" rel="stylesheet" type="text/css"/>
	
	<script src="<c:url value='/js/patient/PatientViewport.js'/>" type="text/javascript"></script>
	<script src="<c:url value='/js/patient/PatientHome.js'/>" type="text/javascript"></script>
	<script src="<c:url value='/js/patient/app.js'/>" type="text/javascript"></script>
	
</head>
<body>

</body>
</html>