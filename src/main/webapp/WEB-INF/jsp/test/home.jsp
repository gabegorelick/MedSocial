<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

</head>

<body>
<form action="/test/patient/addComment" method="post">
	<label for="comment">Comment</label>
	<textarea id="comment" name="comment"></textarea>
	
	<input type="submit"/>
</form>
</body>
</html>