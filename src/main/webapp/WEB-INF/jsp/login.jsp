<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%-- 
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
--%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <title>Home</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="a HTML prototype page created with App Sketcher">
    <link href="resources/styles/default/jquery-ui.css" rel="stylesheet" type="text/css">
    <link href="resources/styles/page.css" rel="stylesheet" type="text/css">
    <script language="javascript" src="resources/scripts/jquery.min.js" type="text/javascript"></script>
    <script language="javascript" src="resources/scripts/jquery-ui.min.js" type="text/javascript"></script>
    <!--[if IE]><script language="javascript" src="resources/scripts/excanvas.min.js" type="text/javascript"></script><![endif]-->
    <script language="javascript" src="resources/scripts/jquery.jqplot.min.js" type="text/javascript"></script>
    <script language="javascript" src="resources/scripts/jqplot.barRenderer.min.js" type="text/javascript"></script>
    <script language="javascript" src="resources/scripts/jqplot.categoryAxisRenderer.min.js" type="text/javascript"></script>
    <script language="javascript" src="resources/scripts/jqplot.pieRenderer.min.js" type="text/javascript"></script>
    <script language="javascript" src="resources/scripts/jquery.tools.min.js" type="text/javascript"></script>
    <script language="javascript" src="resources/scripts/page.js" type="text/javascript"></script>
    <style type="text/css">
      .tooltip {display:none;color:black;background-color:#ffa;border:1px solid #cc9;max-width: 300px; padding:3px;font-size:13px;-moz-box-shadow: 2px 2px 11px #666;-webkit-box-shadow: 2px 2px 11px #666;}
    </style>
    <script>
      $(function() {
        $(".date_field").datepicker({
          showOn: "button",
          buttonImage: "resources/images/icons/calendar.png",
          buttonImageOnly: true
        });

        $(".accordion").accordion({
          autoHeight: false,
          navigation: true
        });

        $(".tabs").tabs();

        $(".slider").slider({value: 30});

        $(".v_slider").slider({orientation: "vertical", value: 30});

        $(".jquery_button").button();

        $(".annotation").tooltip({position: "bottom right", offset: [10, 10]});
      });
    </script>
  </head>
  <body class="body ui-widget ui-widget-content">
    <span class="tooltip">&nbsp;</span>
    <div id="content" class="content center">
      <div id="main" class="main">
        <div class="wrapper" style="top:138px;left:403px;">
          <input type="text" id="text_input_1" class="component text_input" size="20">
        </div>
        <div class="wrapper" style="top:138px;left:758px;">
          <input type="button" id="button_1" class="component button" value="Login" style="width:63px;min-width:63px;">
        </div>
        <div class="wrapper" style="top:183px;left:38px;">
          <div id="h_line_1" class="component h_line" style="width:788px;min-width:788px;">
          </div>
        </div>
        <div class="wrapper" style="top:118px;left:403px;">
          <span id="label_1" class="component label">Email</span>
        </div>
        <div class="wrapper" style="top:118px;left:580px;">
          <span id="label_2" class="component label">Password</span>
        </div>
        <div class="wrapper" style="top:216px;left:38px;">
          <img id="image_2" class="component image" src="resources/images/sample.png" style="width:336px;min-width:336px;height:369px;">
        </div>
        <div class="wrapper" style="top:369px;left:403px;">
          <span id="label_3" class="component label">Email:</span>
        </div>
        <div class="wrapper" style="top:445px;left:403px;">
          <span id="label_4" class="component label">Confirm Password:</span>
        </div>
        <div class="wrapper" style="top:292px;left:403px;">
          <span id="label_5" class="component label">First Name:</span>
        </div>
        <div class="wrapper" style="top:328px;left:403px;">
          <span id="label_6" class="component label">Last Name:</span>
        </div>
        <div class="wrapper" style="top:407px;left:403px;">
          <span id="label_7" class="component label">Password:</span>
        </div>
        <div class="wrapper" style="top:208px;left:403px;">
          <span id="label_8" class="component label bold" style="font-size:300%;">Sign Up</span>
        </div>
        <div class="wrapper" style="top:118px;left:38px;">
          <span id="label_9" class="component label bold" style="font-size:300%;">MedSocial</span>
        </div>
        <div class="wrapper" style="top:267px;left:403px;">
          <div id="h_line_2" class="component h_line" style="width:421px;min-width:421px;">
          </div>
        </div>
        <div class="wrapper" style="top:289px;left:531px;">
          <input type="text" id="text_input_3" class="component text_input" size="20">
        </div>
        <div class="wrapper" style="top:324px;left:531px;">
          <input type="text" id="text_input_4" class="component text_input" size="20">
        </div>
        <div class="wrapper" style="top:362px;left:531px;">
          <input type="text" id="text_input_5" class="component text_input" size="20">
        </div>
        <div class="wrapper" style="top:404px;left:531px;">
          <input type="text" id="text_input_6" class="component text_input" size="20">
        </div>
        <div class="wrapper" style="top:442px;left:531px;">
          <input type="text" id="text_input_7" class="component text_input" size="20">
        </div>
        <div class="wrapper" style="top:487px;left:403px;">
          <span id="label_10" class="component label">Account Type:</span>
        </div>
        <div class="wrapper" style="top:138px;left:580px;">
          <input type="password" id="password_1" class="component password" value="" size="20">
        </div>
        <div class="wrapper" style="top:488px;left:531px;">
          <span id="v_radio_bar_1" class="component v_radio_bar">
            <div class="wrapper">
              <label class="component radio nowrap"><input type="radio" id="radio_3" name="v_radio_bar_1"><span class="input_label">Doctor</span></label>
            </div>
            <br>
            <div class="wrapper">
              <label class="component radio nowrap"><input type="radio" id="radio_4" name="v_radio_bar_1"><span class="input_label">Patient</span></label>
            </div>
            <br>
          </span>
        </div>
        <div class="wrapper" style="top:561px;left:403px;">
          <input type="button" id="button_5" class="component button" value="Submit">
        </div>
      </div>
    </div>
    <span style="position: fixed; top: 2px; right: 2px;"><a href="site.map.html"><img src="resources/images/icons/sitemap.png" title="Site Map" width="23" height="23" border="0"></a></span>
  </body>
</html>