<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
               <h2> Doctor Name </h2><br />
               <button> Edit Account Info </button>
            </div>
            <!-- middle panel -->
            <div id="middle">
               <h2> Messages </h2>
               
               <c:forEach var="alert" items="${alerts}">
               		<!-- single message box -->
               		<div class="message_wrapper">
                  	<div class="pic_label_wrapper"><img src="/resources/images/sample.png" /></div>
                  	<div class="inner_message_wrapper">
                    	<h3><a href="/doctor/${user.userId}/patients/${alert.patient.name}">${patientUserNames[alert.patient.name]}</a></h3>
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
               <h2 id="patients_title"> Patients </h2>
               <button id="add_remove_patients"> Add/Remove </button>
               <table>
               		<c:forEach var="patient" items="${patients}">
               			<tr>
                     		<td><img src="/resources/images/sample.png" /></td>
                     		<td><a href="/doctor/${user.userId}/patients/${patient.value.userId}">${patientUserNames[patient.key.name]}</a></td>
                  		</tr>	
               		</c:forEach>
               </table>
            </div>
         </div>
         
   </body>
</html>