<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
   <head>
      <title> Edit Prescriptions </title>
      <link rel="stylesheet" type="text/css" href="/resources/styles/doctor/doctor_editRx_style.css" />
      <link rel="stylesheet" type="text/css" href="/resources/styles/default/jquery-ui.css" />
      <script type="text/javascript" src="/resources/scripts/jquery.min.js"></script>
      <script type="text/javascript" src="/resources/scripts/jquery-ui.min.js"></script>
      <script type="text/javascript">
         var currPrescription = 0;
         // Disable/Enable fields according to what is currenly selected
         //Disables all notification elements
         function doNotNotifyMe(curr){
            $("#toggle_disabled_wrapper_"+curr).attr("disabled", true);
            $('[name = "notify_when_'+curr+'"]').prop("checked", false);            
            $("#consecutive_input_"+curr).val('');
            $("#total_input_"+curr).val('');
            $("#fraction_numerator_"+curr).val('');
            $("#fraction_denominator_"+curr).val('');
            $("#missed_time_input_"+curr).val('');
         }
         //enables all notification elements (excluding checkbox text input fields)
         function notifyMe(curr){
            $("#toggle_disabled_wrapper_"+curr).attr("disabled", false);
            $("#consecutive_input_"+curr).attr("disabled", true);
            $("#total_input_"+curr).attr("disabled", true);
            $("#fraction_numerator_"+curr).attr("disabled", true);
            $("#fraction_denominator_"+curr).attr("disabled", true);
         }
         //enables and disabled numerical entry fields depending on whether checkbox is selected
         function consecutive(curr){
            if ($("#consecutive_select_"+curr).is(':checked'))
               $("#consecutive_input_"+curr).attr("disabled", false);
            else {
               $("#consecutive_input_"+curr).attr("disabled", true);
               $("#consecutive_input_"+curr).val('');
            }
         }
         function total(curr){
            if ($("#total_select_"+curr).is(':checked'))
               $("#total_input_"+curr).attr("disabled", false);
            else {
               $("#total_input_"+curr).attr("disabled", true);
               $("#total_input_"+curr).val('');
            }
         }
         function fraction(curr){
            if ($("#fraction_select_"+curr).is(':checked')){
               $("#fraction_numerator_"+curr).attr("disabled", false);
               $("#fraction_denominator_"+curr).attr("disabled", false);
            }else{
               $("#fraction_numerator_"+curr).attr("disabled", true);
               $("#fraction_numerator_"+curr).val('');
               $("#fraction_denominator_"+curr).attr("disabled", true);
               $("#fraction_denominator_"+curr).val('');
            }
         }
         //Validation
         //Accordion
         function addPrescription(){
            currPrescription++;
            var currID = currPrescription.toString();
            $("#button_bar").before('<div class="rx_data_wrapper" id="rx_data_wrapper_' +currID+'">\
               <div class="left">\
                  <h3> Prescription Name: </h3>\
                  <input type="text" class="rx_name_input" id="rx_name_input_'+currID+'"></input>\
                  <h3> Directions: </h3>\
                  <textarea class="directions_input" id="directions_input_'+currID+'"></textarea>\
                  <button id="removeButton_'+currID+'" onclick="removePrescription('+currID+')"> Remove Prescription </button>\
               </div>\
               <div class="right">\
                  <h3> Notification Preferences </h3>\
                  <input type="radio" name="notify_'+currID+'" value="notify_false" onclick="doNotNotifyMe('+currID+')"> Do not notify me </input><br />\
                  <input type="radio" name="notify_'+currID+'" value="notify_true" onclick="notifyMe('+currID+')"> Notify me </input><br />\
                  <fieldset class="toggle_disabled_wrapper" id="toggle_disabled_wrapper_'+currID+'" disabled=true>\
                     <fieldset class="notify_wrapper" id="notify_wrapper_'+currID+'">\
                        <legend> <h3>Notify me when patient misses:</h3> </legend>\
                        <input type="checkbox" class="consecutive_select" id="consecutive_select_'+currID+'" class="notify_when" name="notify_when_'+currID+'" value="consecutive" onclick="consecutive('+currID+')">\
                           <input type="text" class="consecutive_input" id="consecutive_input_'+currID+'" class="num_input"></input>\
                           consecutive doses\
                        </input><br />\
                        <input type="checkbox" id="total_select_'+currID+'" class="notify_when" name="notify_when_'+currID+'" value="total" onclick="total('+currID+')">\
                           <input type="text" id="total_input_'+currID+'" class="num_input"></input>\
                           total doses\
                        </input><br />\
                        <input type="checkbox" id="fraction_select_'+currID+'" class="notify_when" name="notify_when_'+currID+'" value="fraction" onclick="fraction('+currID+')">\
                           <input type="text" id="fraction_numerator_'+currID+'" class="num_input" ></input>\
                           doses out of\
                           <input type="text" id="fraction_denominator_'+currID+'" class="num_input"></input>\
                        </input><br />\
                     </fieldset>\
                     <h3> Consider missed dosage if late by: </h3>\
                     <input type="text" id="missed_time_input_'+currID+'" class="num_input"></input>\
                     <select>\
                        <option value="minutes"> minutes </option>\
                        <option value="hours"> hours </option>\
                        <option value="days"> days </option>\
                     </select>\
                  </fieldset>\
               </div>\
            </div>');
         }
         
         //Remove Rx from accordion
         function removePrescription(curr){
            $("#rx_data_wrapper_" + curr).remove();
         }
         
         $(document).ready(function(){
            addPrescription();
         })
      </script>
   </head>
   <body>
      <form id="doctor_editRx_form" name=doctor_editRx_form method="post" name="input" action="">
         
         <!-- header -->
         <div id="header">
            <div id="title_wrapper">
               <h1> MedSocial </h1>
            </div>
            <div id="search_wrapper">
               <input type="text" value="Find patients..." onclick="this.value='';" onfocus="this.select()" onblur="this.value=!this.value?'Find patients...':this.value;" />
               <input type="button" value="Search" />
            </div>
            <div id="default_btns">   
               <a href="/home">Home</a>
               <a href="/logout">Logout</a>
            </div>
         </div>
         
         <!-- main content -->
         <div id="main_wrapper">
            <h2> Edit Prescriptions </h2>
            <!-- Edit Prescription divs dynamically added here -->
            <div id="button_bar">
               <input type="button" value="Save changes" onclick="window.location='/home'"/>
               <input type="button" value="Add" id="add" onclick="addPrescription()"/>
               <input type="button" value="Cancel" id="cancel"/>
            </div>
         </div>
      </form>
   </body>
</html>