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

        $("#jquery_button_2").click(function() {
          window.location = "home.html";
        });

        $(".annotation").tooltip({position: "bottom right", offset: [10, 10]});
      });
    </script>
  </head>
  <body class="body ui-widget ui-widget-content">
    <span class="tooltip">&nbsp;</span>
    <div id="content" class="content center" style="margin-top:20px;">
      <div id="main" class="main">
        <div class="wrapper" style="top:26px;left:33px;">
          <div id="div_4" class="component div" style="width:893px;min-width:893px;height:569px;">
            <div class="wrapper" style="top:1px;left:0px;">
              <div id="div_5" class="component div" style="width:892px;min-width:892px;height:106px;">
                <div class="wrapper" style="top:40px;left:16px;">
                  <h1 id="heading_2" class="component heading">MedSocial434</h1>
                </div>
                <div class="wrapper" style="top:44px;left:202px;">
                  <input type="text" id="text_input_2" class="component text_input" size="20" value="Find Patients..." style="width:178px;min-width:178px;color:#999999;">
                </div>
                <div class="wrapper" style="top:46px;left:361px;">
                  <img id="image_1" class="component image" src="/resources/images/magnifying-glass.jpg" style="width:23px;min-width:23px;height:18px;">
                </div>
                <div class="wrapper" style="top:40px;left:748px;">
                  <a href="/home">Home</a>
                </div>
                <div class="wrapper" style="top:40px;left:821px;">
                  <a href="/logout">Logout</a>
                </div>
              </div>
            </div>
            <div class="wrapper" style="top:108px;left:1px;">
              <div id="h_line_2" class="component h_line" style="width:892px;min-width:892px;">
              </div>
            </div>
            <div class="wrapper" style="top:109px;left:1px;">
              <div id="div_6" class="component div" style="width:891px;min-width:891px;height:460px;">
                <div class="wrapper" style="top:0px;left:0px;">
                  <div id="div_7" class="component div" style="width:214px;min-width:214px;height:458px;">
                    <div class="wrapper" style="top:17px;left:16px;">
                      <img id="image_2" class="component image" src="/resources/images/sample_2.png" style="width:182px;min-width:182px;height:234px;">
                    </div>
                    <div class="wrapper center" style="top:263px;margin-left:0px;">
                      <h3 id="heading_3" class="component heading">Dr. Bandekar</h3>
                    </div>
                    <div class="wrapper" style="top:297px;left:8px;">
                      <span id="label_5" class="component label">Email</span>
                    </div>
                    <div class="wrapper" style="top:323px;left:8px;">
                      <span id="label_6" class="component label">Password</span>
                    </div>
                    <div class="wrapper" style="top:347px;left:9px;">
                      <span id="label_7" class="component label">Confirm<br>Password</span>
                    </div>
                    <div class="wrapper" style="top:294px;left:88px;">
                      <input type="text" id="text_input_4" class="component text_input" size="20" style="width:114px;min-width:114px;">
                    </div>
                    <div class="wrapper" style="top:320px;left:88px;">
                      <input type="password" id="password_1" class="component password" size="20" value="passwd" style="width:114px;min-width:114px;">
                    </div>
                    <div class="wrapper" style="top:346px;left:88px;">
                      <input type="password" id="password_2" class="component password" size="20" value="passwd" style="width:114px;min-width:114px;">
                    </div>
                    <div class="wrapper center" style="top:387px;margin-left:61px;">
                      <input type="button" id="jquery_button_4" class="component jquery_button" value="Submit">
                    </div>
                    <div class="wrapper center" style="top:388px;margin-left:-39px;">
                      <input type="button" id="jquery_button_7" class="component jquery_button" value="Change Picture">
                    </div>
                  </div>
                </div>
                <div class="wrapper" style="top:-1px;left:214px;">
                  <div id="v_line_1" class="component v_line" style="height:461px;">
                  </div>
                </div>
                <div class="wrapper" style="top:0px;left:215px;">
                  <div id="div_8" class="component div" style="width:445px;min-width:445px;height:459px;">
                    <div class="wrapper" style="top:7px;left:8px;">
                      <h2 id="heading_4" class="component heading">Messages</h2>
                    </div>
                    <div class="wrapper" style="top:43px;left:9px;">
                      <div id="div_16" class="component div" style="width:427px;min-width:427px;height:185px;border-width:1px;border-style:solid;">
                        <div class="wrapper" style="top:12px;left:11px;">
                          <img id="image_3" class="component image" src="/resources/images/sample_2.png" style="width:50px;min-width:50px;height:50px;">
                        </div>
                        <div class="wrapper" style="top:11px;left:70px;">
                          <h3 id="heading_5" class="component heading">George Sovechkin</h3>
                        </div>
                        <div class="wrapper" style="top:12px;right:14px;">
                          <span id="label_8" class="component label italic">October 31, 2011</span>
                        </div>
                        <div class="wrapper" style="top:36px;left:69px;">
                          <div id="div_22" class="component div" style="width:349px;min-width:349px;height:63px;border-width:1px;border-style:solid;">
                            <div class="wrapper" style="top:0px;left:0px;">
                              <div id="div_25" class="component div" style="width:85px;min-width:85px;height:22px;border-style:none;">
                                <div class="wrapper" style="top:3px;left:3px;">
                                  <span id="label_9" class="component label" style="border-style:none;">Prescription:</span>
                                </div>
                              </div>
                            </div>
                            <div class="wrapper" style="top:42px;left:0px;">
                              <div id="div_27" class="component div" style="width:85px;min-width:85px;height:21px;border-style:none;">
                                <div class="wrapper" style="top:3px;left:2px;">
                                  <span id="label_11" class="component label">Comment:</span>
                                </div>
                              </div>
                            </div>
                            <div class="wrapper" style="top:21px;left:0px;">
                              <div id="div_28" class="component div" style="width:85px;min-width:85px;height:22px;border-style:none;">
                                <div class="wrapper" style="top:3px;left:2px;">
                                  <span id="label_10" class="component label">Status:</span>
                                </div>
                              </div>
                            </div>
                            <div class="wrapper" style="top:0px;left:85px;">
                              <div id="div_30" class="component div" style="width:264px;min-width:264px;height:22px;border-style:none;">
                                <div class="wrapper" style="top:3px;left:3px;">
                                  <span id="label_13" class="component label">Altace</span>
                                </div>
                              </div>
                            </div>
                            <div class="wrapper" style="top:21px;left:85px;">
                              <div id="div_31" class="component div" style="width:264px;min-width:264px;height:22px;border-style:none;">
                                <div class="wrapper" style="top:3px;left:2px;">
                                  <span id="label_14" class="component label">Did not take</span>
                                </div>
                              </div>
                            </div>
                            <div class="wrapper" style="top:42px;left:84px;">
                              <div id="div_32" class="component div" style="width:265px;min-width:265px;height:21px;border-style:none;">
                                <div class="wrapper" style="top:2px;left:3px;">
                                  <p id="p_5" class="component p" style="width:200px;min-width:200px;">It makes my heart hurt.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="wrapper" style="top:109px;left:69px;">
                          <div id="div_24" class="component div" style="width:349px;min-width:349px;height:39px;border-width:1px;border-style:solid;">
                            <div class="wrapper" style="top:0px;left:0px;">
                              <div id="div_26" class="component div" style="width:85px;min-width:85px;height:22px;border-style:none;">
                                <div class="wrapper" style="top:3px;left:2px;">
                                  <span id="label_12" class="component label">Suggestion:</span>
                                </div>
                              </div>
                            </div>
                            <div class="wrapper" style="top:0px;left:85px;">
                              <div id="div_33" class="component div" style="width:265px;min-width:265px;height:39px;border-style:none;">
                                <div class="wrapper" style="top:3px;left:2px;">
                                  <p id="p_4" class="component p" style="width:232px;min-width:232px;">Stop taking it immediately. That&apos;s a rare and dangerous side effect.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="wrapper" style="top:155px;left:69px;">
                          <input type="text" id="text_input_7" class="component text_input" size="20" value="Write a suggestion..." style="width:345px;min-width:345px;color:#999999;">
                        </div>
                      </div>
                    </div>
                    <div class="wrapper" style="top:249px;left:9px;">
                      <div id="div_34" class="component div" style="width:427px;min-width:427px;height:142px;border-width:1px;border-style:solid;">
                        <div class="wrapper" style="top:12px;left:11px;">
                          <img id="image_4" class="component image" src="/resources/images/sample_2.png" style="width:50px;min-width:50px;height:50px;">
                        </div>
                        <div class="wrapper" style="top:12px;left:69px;">
                          <h3 id="heading_6" class="component heading">Evelyn Baldwin</h3>
                        </div>
                        <div class="wrapper" style="top:11px;right:11px;">
                          <span id="label_16" class="component label italic">October 29, 2011</span>
                        </div>
                        <div class="wrapper" style="top:37px;left:69px;">
                          <div id="div_35" class="component div" style="width:347px;min-width:347px;height:63px;border-width:1px;border-style:solid;">
                            <div class="wrapper" style="top:0px;left:0px;">
                              <div id="div_36" class="component div" style="width:85px;min-width:85px;height:22px;border-style:none;">
                                <div class="wrapper" style="top:3px;left:3px;">
                                  <span id="label_17" class="component label">Prescription:</span>
                                </div>
                              </div>
                            </div>
                            <div class="wrapper" style="top:42px;left:0px;">
                              <div id="div_37" class="component div" style="width:85px;min-width:85px;height:21px;border-style:none;">
                                <div class="wrapper" style="top:3px;left:2px;">
                                  <span id="label_18" class="component label">Comment:</span>
                                </div>
                              </div>
                            </div>
                            <div class="wrapper" style="top:21px;left:0px;">
                              <div id="div_38" class="component div" style="width:85px;min-width:85px;height:22px;border-style:none;">
                                <div class="wrapper" style="top:3px;left:2px;">
                                  <span id="label_19" class="component label">Status:</span>
                                </div>
                              </div>
                            </div>
                            <div class="wrapper" style="top:0px;left:85px;">
                              <div id="div_39" class="component div" style="width:262px;min-width:262px;height:22px;border-style:none;">
                                <div class="wrapper" style="top:3px;left:3px;">
                                  <span id="label_20" class="component label">Sonata</span>
                                </div>
                              </div>
                            </div>
                            <div class="wrapper" style="top:21px;left:85px;">
                              <div id="div_40" class="component div" style="width:262px;min-width:262px;height:22px;border-style:none;">
                                <div class="wrapper" style="top:3px;left:2px;">
                                  <span id="label_21" class="component label">Took</span>
                                </div>
                              </div>
                            </div>
                            <div class="wrapper" style="top:42px;left:84px;">
                              <div id="div_41" class="component div" style="width:263px;min-width:263px;height:21px;border-style:none;">
                                <div class="wrapper" style="top:2px;left:3px;">
                                  <p id="p_6" class="component p" style="width:201px;min-width:201px;">I&apos;m hallucinating!</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="wrapper" style="top:109px;left:68px;">
                          <input type="text" id="text_input_8" class="component text_input" size="20" value="Write a suggestion..." style="width:344px;min-width:344px;color:#999999;">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wrapper" style="top:0px;left:660px;">
                  <div id="v_line_2" class="component v_line" style="height:458px;">
                  </div>
                </div>
                <div class="wrapper" style="top:0px;left:662px;">
                  <div id="div_9" class="component div" style="width:229px;min-width:229px;height:459px;">
                    <div class="wrapper" style="top:9px;left:9px;">
                      <h2 id="heading_8" class="component heading">Patients</h2>
                    </div>
                    <div class="wrapper" style="top:43px;left:15px;">
                      <img id="image_6" class="component image" src="/resources/images/sample_2.png" style="width:50px;min-width:50px;height:50px;">
                    </div>
                    <div class="wrapper" style="top:102px;left:15px;">
                      <img id="image_7" class="component image" src="/resources/images/sample_2.png" style="width:50px;min-width:50px;height:50px;">
                    </div>
                    <div class="wrapper" style="top:6px;left:121px;">
                      <a href="/doctor/${userId}/patients">Edit Patients</a>
                    </div>
                    <div class="wrapper" style="top:58px;left:71px;">
                      <h3 id="heading_9" class="component heading">George Sovechkin</h3>
                    </div>
                    <div class="wrapper" style="top:115px;left:72px;">
                      <h3 id="heading_10" class="component heading">Evelyn Baldwin</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span style="position: fixed; top: 2px; right: 2px;"><a href="site.map.html"><img src="/resources/images/icons/sitemap.png" title="Site Map" width="23" height="23" border="0"></a></span>
  </body>
</html>