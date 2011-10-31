<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <title>Home</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="a HTML prototype page created with App Sketcher">
    <link href="/resources/styles/default/jquery-ui.css" rel="stylesheet" type="text/css">
    <link href="/resources/styles/page.css" rel="stylesheet" type="text/css">
    <script language="javascript" src="/resources/scripts/jquery.min.js" type="text/javascript"></script>
    <script language="javascript" src="/resources/scripts/jquery-ui.min.js" type="text/javascript"></script>
    <!--[if IE]><script language="javascript" src="/resources/scripts/excanvas.min.js" type="text/javascript"></script><![endif]-->
    <script language="javascript" src="/resources/scripts/jquery.jqplot.min.js" type="text/javascript"></script>
    <script language="javascript" src="/resources/scripts/jqplot.barRenderer.min.js" type="text/javascript"></script>
    <script language="javascript" src="/resources/scripts/jqplot.categoryAxisRenderer.min.js" type="text/javascript"></script>
    <script language="javascript" src="/resources/scripts/jqplot.pieRenderer.min.js" type="text/javascript"></script>
    <script language="javascript" src="/resources/scripts/jquery.tools.min.js" type="text/javascript"></script>
    <script language="javascript" src="/resources/scripts/page.js" type="text/javascript"></script>
    <style type="text/css">
      .tooltip {display:none;color:black;background-color:#ffa;border:1px solid #cc9;max-width: 300px; padding:3px;font-size:13px;-moz-box-shadow: 2px 2px 11px #666;-webkit-box-shadow: 2px 2px 11px #666;}
    </style>
    <script>
      $(function() {
        $(".date_field").datepicker({
          showOn: "button",
          buttonImage: "/resources/images/icons/calendar.png",
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
    <div id="content" class="content center" style="margin-top:20px;">
      <div id="main" class="main">
        <div class="wrapper" style="top:97px;left:86px;">
          <h1 id="heading_1" class="component heading font_sans-serif" style="width:209px;min-width:209px;font-size:40px;">MedSocial</h1>
        </div>
        <div class="wrapper" style="top:115px;left:310px;">
          <input type="text" id="text_input_2" class="component text_input" value="Find Patients..." size="20" style="width:204px;min-width:204px;">
        </div>
        <div class="wrapper" style="top:153px;left:83px;">
          <div id="h_line_1" class="component h_line" style="width:786px;min-width:786px;border-top-width:2px;">
          </div>
        </div>
        <div class="wrapper" style="top:118px;left:496px;">
          <img id="image_1" class="component image" src="/resources/images/magnifying-glass.jpg" style="width:22px;min-width:22px;height:18px;">
        </div>
        <div class="wrapper" style="top:114px;left:715px;">
          <input type="button" id="button_1" class="component button" value="Home" style="font-size:15.8px;">
        </div>
        <div class="wrapper" style="top:112px;left:797px;">
          <input type="button" id="button_2" class="component button" value="Logout" style="width:60px;min-width:60px;height:28px;font-size:15.8px;">
        </div>
        <div class="wrapper" style="top:424px;left:200px;">
          <h3 id="heading_2" class="component heading">Is your patient not on the list? Send an invitation to his/her email!</h3>
        </div>
        <div class="wrapper" style="top:464px;left:203px;">
          <h4 id="heading_3" class="component heading">Patient&apos;s email:</h4>
        </div>
        <div class="wrapper" style="top:461px;left:314px;">
          <input type="text" id="text_input_3" class="component text_input" size="20" style="width:236px;min-width:236px;">
        </div>
        <div class="wrapper" style="top:459px;left:574px;">
          <input type="button" id="button_3" class="component button" value="Send Invitation" style="width:112px;min-width:112px;">
        </div>
        <div class="wrapper" style="top:250px;left:212px;">
          <p id="p_2" class="component p" style="width:470px;min-width:470px;border-width:1px;border-style:dashed;color:#cc0000;">Patient search results here...<br><br><br><br><br><br><br><br><br></p>
        </div>
        <div class="wrapper" style="top:193px;left:213px;">
          <h2 id="heading_4" class="component heading" style="width:194px;min-width:194px;">Kevin Baldwin</h2>
        </div>
        <div class="wrapper" style="top:196px;left:580px;">
          <input type="button" id="button_4" class="component button" value="Send Invitation">
        </div>
      </div>
    </div>
    <table border="0" style="position: fixed; top: 0px; left: 50%; margin-left: -480px; width: 960px; background-color: #F7931E; color: white; font-size: 26px; vertical-align: middle;"><tr><td width="1%"></td><td width="5%"><a href="http://www.appsketcher.com"><img src="/resources/images/icons/sketcher.png" title="App Sketcher" border="0"></a></td><td width="66%"><a href="http://www.appsketcher.com" style="color: white;">App Sketcher Trial</a></td><td width="10%"><a href="http://www.appsketcher.com/support/" style="font-size: 16px;">Feedback</a></td><td width="7%"><a href="http://www.appsketcher.com/buy/" style="font-size: 16px;">Buy It</a></td></tr></table>
    <span style="position: fixed; top: 2px; right: 2px;"><a href="site.map.html"><img src="/resources/images/icons/sitemap.png" title="Site Map" width="23" height="23" border="0"></a></span>
  </body>
</html>