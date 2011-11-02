<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
      #v_checkbox_bar_1 .wrapper {margin-top:17px;}
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
    <div id="content" class="content center">
      <div id="main" class="main">
        <div class="wrapper" style="top:20px;left:53px;">
          <div id="div_1" class="component div" style="width:842px;min-width:842px;height:72px;border-width:1px;border-style:double;">
            <div class="wrapper" style="top:19px;left:9px;">
              <span id="label_1" class="component label bold" style="font-size:300%;">MedSocial</span>
            </div>
            <div class="wrapper" style="top:41px;right:32px;">
              <span id="button_bar_1" class="component button_bar">
                <div class="wrapper">
                  <a href="/home">Home</a>
                </div>
                <div class="wrapper">
                  <a href="/logout">Logout</a>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="wrapper" style="top:113px;left:53px;">
          <div id="div_2" class="component div" style="width:842px;min-width:842px;height:435px;border-width:1px;border-style:solid;">
            <div class="wrapper" style="top:4px;left:9px;">
              <span id="label_2" class="component label bold" style="font-size:300%;">Edit Prescriptions</span>
            </div>
            <div class="wrapper" style="top:53px;left:12px;">
              <div id="div_3" class="component div" style="width:817px;min-width:817px;height:336px;border-width:1px;border-style:solid;">
                <div class="wrapper" style="top:8px;left:10px;">
                  <div id="div_4" class="component div" style="width:363px;min-width:363px;height:317px;border-style:none;">
                    <div class="wrapper" style="top:13px;left:6px;">
                      <span id="label_3" class="component label" style="font-size:150%;">Prescription Name</span>
                    </div>
                    <div class="wrapper" style="top:42px;left:6px;">
                      <input type="text" id="text_input_1" class="component text_input" size="20" style="width:339px;min-width:339px;">
                    </div>
                    <div class="wrapper" style="top:96px;left:6px;">
                      <span id="label_4" class="component label" style="font-size:150%;">Directions</span>
                    </div>
                    <div class="wrapper" style="top:128px;left:6px;">
                      <textarea id="textarea_1" class="component textarea" rows="3" cols="20" style="width:339px;min-width:339px;height:103px;"></textarea>
                    </div>
                  </div>
                </div>
                <div class="wrapper" style="top:8px;left:382px;">
                  <div id="div_5" class="component div" style="width:415px;min-width:415px;height:317px;border-style:none;">
                    <div class="wrapper" style="top:13px;left:15px;">
                      <span id="label_5" class="component label" style="font-size:150%;">Notification Preferences</span>
                    </div>
                    <div class="wrapper" style="top:42px;left:15px;">
                      <span id="v_radio_bar_1" class="component v_radio_bar">
                        <div class="wrapper">
                          <label class="component radio nowrap"><input type="radio" id="radio_1" name="v_radio_bar_1" checked="true"><span class="input_label">Do Not Notify Me</span></label>
                        </div>
                        <br>
                        <div class="wrapper">
                          <label class="component radio nowrap"><input type="radio" id="radio_2" name="v_radio_bar_1"><span class="input_label">Notify Me</span></label>
                        </div>
                        <br>
                      </span>
                    </div>
                    <div class="wrapper" style="top:96px;left:15px;">
                      <fieldset id="fieldset_2" class="component fieldset" style="width:390px;min-width:390px;height:139px;font-size:150%;">
                        <legend>Notify Me If the Patient Misses:</legend>
                        <div class="wrapper" style="top:16px;left:15px;">
                          <span id="v_checkbox_bar_1" class="component v_checkbox_bar">
                            <div class="wrapper">
                              <label class="component checkbox nowrap"><input type="checkbox" id="checkbox_1" name="v_checkbox_bar_1"><span class="input_label">Consecutive Doses:</span></label>
                            </div>
                            <br>
                            <div class="wrapper">
                              <label class="component checkbox nowrap"><input type="checkbox" id="checkbox_2" name="v_checkbox_bar_1"><span class="input_label">Total Doses</span></label>
                            </div>
                            <br>
                            <div class="wrapper">
                              <label class="component checkbox nowrap"><input type="checkbox" id="checkbox_3" name="v_checkbox_bar_1"><span class="input_label">Doses Out of:</span></label>
                            </div>
                            <br>
                          </span>
                        </div>
                      </fieldset>
                    </div>
                    <div class="wrapper" style="top:247px;left:15px;">
                      <span id="label_6" class="component label" style="font-size:150%;">Consider missed dosage if late by:</span>
                    </div>
                    <div class="wrapper" style="top:281px;left:15px;">
                      <input type="text" id="text_input_3" class="component text_input" size="20" style="width:33px;min-width:33px;height:15px;font-size:12.4px;">
                    </div>
                    <div class="wrapper" style="top:281px;left:69px;">
                      <select id="dropdown_1" class="component dropdown">
                        <option value="1">hours</option>
                        <option value="2">days</option>
                        <option value="3">months</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wrapper" style="top:402px;left:12px;">
              <span id="button_bar_2" class="component button_bar">
                <div class="wrapper">
                  <input type="button" id="button_4" class="component button" value="Add Prescription">
                </div>
                <div class="wrapper">
                  <input type="button" id="button_5" class="component button" value="Save">
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="wrapper" style="top:104px;left:53px;">
          <div id="h_line_1" class="component h_line" style="width:841px;min-width:841px;">
          </div>
        </div>
      </div>
    </div>
    <span style="position: fixed; top: 2px; right: 2px;"><a href="site.map.html"><img src="/resources/images/icons/sitemap.png" title="Site Map" width="23" height="23" border="0"></a></span>
  </body>
</html>