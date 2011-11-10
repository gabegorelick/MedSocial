<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
   <head>
      <title> Doctor Homepage </title>
      <link rel="stylesheet" type="text/css" href="/resources/styles/doctor/doctor_style.css">
   </head>
   <body>  
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
            <!-- left panel -->
            <div id="left">
               <img src="/resources/images/profile.png" />
               <h2> Patient Name </h2><br />
            </div>
            <!-- middle panel -->
            <div id="middle">
               <h2> Messages </h2>
               
               <c:forEach var="alert" items="${alerts}">
               		<!-- single message box -->
               		<div class="message_wrapper">
                  	<div class="pic_label_wrapper"><img src="/resources/images/sample.png" /></div>
                  	<div class="inner_message_wrapper">
                    	<h3><a href=""> ${patientUserNames[alert.patient.name]} </a></h3>
                     	<div class="patient_message_wrapper">
                        	<div class="label_wrapper"> Date: </div>
                        	<div>${alert.date}</div>
                        	<div class="label_wrapper"> Prescription: </div>
                        	<div>${alert.medication}</div>
                        	<div class="label_wrapper"> Status: </div>
                        	<div>${alert.took}</div>
                        	<div class="label_wrapper"> Comment: </div>
                        	<div>${alert.comment}</div>
                     	</div>
                     	<div class="suggestion_wrapper">
                        	<div class="label_wrapper"> Suggestion: </div>
                        	<div>${alert.response}</div>
                     	</div>
                     	<form action="/doctor/${user.userId}/alerts/${alert.id}/respond" method="post">
                     		<input type="hidden" name="location" value="patient"/> <!-- tells server to redirect back to this page -->
                     		<div class="suggestion_input_wrapper">
                     			<textarea name="response" onclick="this.value='';" onfocus="this.select()" onblur="this.value=!this.value?'Write a suggestion...':this.value;" value="Write a suggestion..."></textarea>
                     		</div>
                     		<div><input type="submit" value="Send suggestion" class="send_suggestion"/></div>
                     	</form>   
                  </div>
               </div>
               </c:forEach>
               
               
            </div>
            <!-- right panels -->
            <div id="right">
               <h2 id="patients_title"> Prescriptions </h2>
               <button id="add_remove_patients"> Edit Prescriptions </button>
               <table>
                  <tr><td>
                     <a href=""> Altace </a>
                     <div class="patient_message_wrapper">
                        <div class="label_wrapper"> Directions: </div>
                        <div> Take 200ml once every 12 hours for 1 week </div>
                        <div class="label_wrapper"> Notify Me If: </div>
                        <div> Patient misses 1 dosage by 3 hours </div>
                     </div>
                     </td>
                  </tr>
                  <tr><td>
                     <h3><a href=""> Warfarin </a></h3>
                     <div class="patient_message_wrapper">
                        <div class="label_wrapper"> Directions: </div>
                        <div> Take 1 pill once per day for 1 month </div>
                        <div class="label_wrapper"> Notify Me If: </div>
                        <div> Do not notify </div>
                     </div></td>
                  </tr>
               </table>
            </div>
         </div>
         
   </body>
</html>