<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<link rel="stylesheet" type="text/css" href="/resources/style.css"></link>
</head>
<body>
<c:choose>
	<c:when test="${empty user}">
		<a href="${loginUrl}">Please login</a>
	</c:when>
	<c:otherwise>
		You are logged in as <c:out value="${user}"/>
	</c:otherwise>
</c:choose>

</body>
</html>