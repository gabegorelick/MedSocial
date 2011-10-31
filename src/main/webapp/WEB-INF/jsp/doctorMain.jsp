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

        $("#button_3").click(function() {
          window.location = "editPrescriptions.html";
        });

        $(".annotation").tooltip({position: "bottom right", offset: [10, 10]});
      });
    </script>
  </head>
  <body class="body ui-widget ui-widget-content">
    <span class="tooltip">&nbsp;</span>
    <div id="content" class="content center" style="margin-top:20px;">
      <div id="main" class="main">
        <div class="wrapper" style="top:12px;left:-87px;">
          <div id="div_1" class="component div font_sans-serif" style="width:960px;min-width:960px;height:640px;border-style:none;">
            <div class="wrapper" style="top:24px;left:25px;">
              <h1 id="heading_1" class="component heading font_sans-serif" style="width:209px;min-width:209px;font-size:40px;">MedSocial</h1>
            </div>
            <div class="wrapper" style="top:42px;left:273px;">
              <input type="text" id="text_input_1" class="component text_input" size="20" value="Find Patients..." style="width:204px;min-width:204px;">
            </div>
            <div class="wrapper" style="top:45px;left:459px;">
              <img id="image_1" class="component image" src="/resources/images/magnifying-glass.jpg" style="width:19px;min-width:19px;height:17px;">
            </div>
            <div class="wrapper" style="top:74px;left:14px;">
              <div id="h_line_1" class="component h_line" style="width:938px;min-width:938px;border-top-width:3px;">
              </div>
            </div>
            <div class="wrapper" style="top:87px;left:14px;">
              <img id="image_2" class="component image" src="/resources/images/sample.png" style="width:193px;min-width:193px;height:245px;">
            </div>
            <div class="wrapper" style="top:340px;left:30px;">
              <h3 id="heading_2" class="component heading">Name Goes Here</h3>
            </div>
            <div class="wrapper" style="top:75px;left:220px;">
              <div id="v_line_1" class="component v_line" style="height:565px;border-left-width:3px;">
              </div>
            </div>
            <div class="wrapper" style="top:83px;left:236px;">
              <h2 id="heading_3" class="component heading">Messages</h2>
            </div>
            <div class="wrapper" style="top:76px;left:645px;">
              <div id="v_line_2" class="component v_line" style="height:563px;border-left-width:3px;">
              </div>
            </div>
            <div class="wrapper" style="top:41px;left:811px;">
              <a href="/home">Home</a>
            </div>
            <div class="wrapper" style="top:39px;left:887px;">
              <a href="/logout">Logout</a>
            </div>
            <div class="wrapper" style="top:84px;left:655px;">
              <h2 id="heading_4" class="component heading">Prescriptions</h2>
            </div>
            <div class="wrapper" style="top:114px;left:655px;">
              <a href="/doctor/${userId}/prescriptions/edit">Edit Prescriptions</a>
              <span class="marker"><img id="button_3_action" src="/resources/images/icons/action_small.png"></span>
            </div>
            <div class="wrapper" style="top:128px;left:235px;">
              <img id="image_3" class="component image" src="/resources/images/sample.png" style="width:65px;min-width:65px;height:62px;">
            </div>
            <div class="wrapper" style="top:155px;left:315px;">
              <p id="p_1" class="component p" style="width:267px;min-width:267px;border-width:1px;border-style:dashed;color:#cc0000;">Prescription:<br>Status:<br>Comment:</p>
            </div>
            <div class="wrapper" style="top:215px;left:316px;">
              <p id="p_2" class="component p" style="width:266px;min-width:266px;border-width:1px;border-style:dashed;color:#cc0000;">Suggestion:<br><br></p>
            </div>
            <div class="wrapper" style="top:130px;left:314px;">
              <h4 id="heading_5" class="component heading">Name</h4>
            </div>
            <div class="wrapper" style="top:263px;left:315px;">
              <input type="text" id="text_input_2" class="component text_input" size="20" value="Write suggestion..." style="width:264px;min-width:264px;">
            </div>
            <div class="wrapper" style="top:161px;left:663px;">
              <h4 id="heading_6" class="component heading">Prescription 1</h4>
            </div>
            <div class="wrapper" style="top:297px;left:667px;">
              <h4 id="heading_7" class="component heading">Prescription 2</h4>
            </div>
            <div class="wrapper" style="top:190px;left:670px;">
              <p id="p_3" class="component p" style="width:200px;min-width:200px;border-width:1px;border-style:dashed;color:#cc0000;">Description:<br><br><br>Notify me if:<br><br></p>
            </div>
            <div class="wrapper" style="top:325px;left:672px;">
              <p id="p_4" class="component p" style="width:200px;min-width:200px;border-width:1px;border-style:dashed;color:#cc0000;">Description: <br><br><br>Notify me if:<br><br></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table border="0" style="position: fixed; top: 0px; left: 50%; margin-left: -480px; width: 960px; background-color: #F7931E; color: white; font-size: 26px; vertical-align: middle;"><tr><td width="1%"></td><td width="5%"><a href="http://www.appsketcher.com"><img src="/resources/images/icons/sketcher.png" title="App Sketcher" border="0"></a></td><td width="66%"><a href="http://www.appsketcher.com" style="color: white;">App Sketcher Trial</a></td><td width="10%"><a href="http://www.appsketcher.com/support/" style="font-size: 16px;">Feedback</a></td><td width="7%"><a href="http://www.appsketcher.com/buy/" style="font-size: 16px;">Buy It</a></td></tr></table>
    <span style="position: fixed; top: 2px; right: 2px;"><a href="site.map.html"><img src="/resources/images/icons/sitemap.png" title="Site Map" width="23" height="23" border="0"></a></span>
  </body>
</html>