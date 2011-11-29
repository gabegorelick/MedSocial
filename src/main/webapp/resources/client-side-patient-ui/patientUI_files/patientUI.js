var allnotes=getUrlVars()["n"];
var alldocs=getUrlVars()["d"];
var alldocinvs=getUrlVars()["di"];
var allprescs=getUrlVars()["p"];
var allalerts=getUrlVars()["a"];
var sessid=getUrlVars()["s"];
var prescname=getUrlVars()["pn"];
var prescdesc=getUrlVars()["pd"];
var prescstart=getUrlVars()["ps"];
var prescend=getUrlVars()["pe"];
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function changePage(url){
	changeTo = url + "?";
	if(!(allnotes == undefined)){
		changeTo = changeTo + "n=" + allnotes + "&";
	}
	if(!(alldocs == undefined) && !alldocs == ""){
		changeTo = changeTo + "d=" + alldocs + "&";
	}
	if(!(alldocinvs == undefined)&& !alldocinvs == ""){
		changeTo = changeTo + "di=" + alldocinvs + "&";
	}
	if(!(allprescs == undefined) && !allprescs == ""){
		changeTo = changeTo + "p=" + allprescs + "&";
	}
	if(!(allalerts == undefined) && !allalerts == ""){
		changeTo = changeTo + "a=" + allalerts + "&";
	}
	if(!(sessid == undefined)){
		changeTo = changeTo + "s=" + sessid + "&";
	}
	if(!(prescname == undefined)){
		changeTo = changeTo + "pn=" + prescname + "&";
	}
	if(!(prescdesc == undefined)){
		changeTo = changeTo + "pd=" + prescdesc + "&";
	}
	if(!(prescstart == undefined)){
		changeTo = changeTo + "ps=" + prescstart + "&";
	}
	if(!(prescend == undefined)){
		changeTo = changeTo + "pe=" + prescend + "&";
	}
	window.location = changeTo;

}
//saves form data
function startAddAlert(){
	if(sessid == "addprescription"){
	prescname=$("#prescriptionnameinput").val();
	}else{
		prescname=sessid.replace(/session$/, "");
	}
	prescdesc=$("#prescdescinput").val();
	prescstart=$("#startdate").val();
	prescend=$("#enddate").val();
	changePage('alertadd.html');
}

//used when editing prescriptions to match alerts to prescriptions
function startSession(prescription, url){
	sessid=prescription;
	if(!(sessid == "addprescription")){

		prescsarray=allprescs.split(";");
		for(var i = 0; i < prescsarray.length; i++){
			var prescattr = prescsarray[i].split(",");
			var name = prescattr[0];
			var alertson = prescattr[1];
			var description = prescattr[2];
			var start = prescattr[3];
			var end = prescattr[4];
			if(name == sessid.replace(/session$/,"")){
				prescdesc=description;
				prescstart=start;
				prescend=end;
			}
		}
		
	}
	changePage(url);
}
//used when finished editing prescription
function stopSession(url){
	sessid="";
	prescname="";
	prescdesc="";
	prescstart="";
	prescend="";
	changePage(url);
}
function cancelSession(url){
	if(!(allalerts == undefined)){
		allalerts = unescape(allalerts.replace(/\+/g, " "));
		alertsarray=allalerts.split(";");
		
		for(var i = 0; i < alertsarray.length; i++){
			
			var alertattr = alertsarray[i].split(",");
			
			var presc = alertattr[0];
			if(presc==sessid){
				allalerts=allalerts.replace(alertsarray[i], "");
				allalerts=allalerts.replace(";;", ";");
				allalerts=allalerts.replace(/^;/, "");
				allalerts=allalerts.replace(/;$/, "");
			}
		}
	
		allalerts=allalerts.replace(/remove,/g, ",");
	
	}
	stopSession(url);
}
function saveSession(url){
	if(sessid == "addprescription"){
		if($("#prescriptionnameinput").val() == ""){
			alert("Name field cannot be empty");
			return;
		}
		if($("#prescdescinput").val() == ""){
			alert("Description field cannot be empty");
			return;
		}
		if($("#startdate").val() == ""){
			alert("Start date field cannot be empty");
			return;
		}
		if($("#enddate").val() == ""){
			alert("End date field cannot be empty");
			return;
		}
		
		prescToAdd = $("#prescriptionnameinput").val() + ",On";
		prescToAdd = prescToAdd + "," + $("#prescdescinput").val() ;
		prescToAdd = prescToAdd + "," + $("#startdate").val() ;
		prescToAdd = prescToAdd + "," + $("#enddate").val() ;
		
		if(allprescs == undefined) {
			allprescs = prescToAdd;
		} else {
			allprescs = allprescs + ";" + prescToAdd;
		}
		if(!(allalerts == undefined)) {
		allalerts=allalerts.replace(/addprescription/g, $("#prescriptionnameinput").val());
		}
	} else {
		if($("#prescdescinput").val() == ""){
			alert("Description field cannot be empty");
			return;
		}
		if($("#startdate").val() == ""){
			alert("Start date field cannot be empty");
			return;
		}
		if($("#enddate").val() == ""){
			alert("End date field cannot be empty");
			return;
		}
		if(!(allalerts == undefined)) {
		allalerts=allalerts.replace(/session/g, "");
		
		alertsarray=allalerts.split(";");
		
		for(var i = 0; i < alertsarray.length; i++){
			
			var alertattr = alertsarray[i].split(",");
			
			var presc = alertattr[0];
			if(presc.match(/remove$/)){
				allalerts=allalerts.replace(alertsarray[i], "");
				allalerts=allalerts.replace(";;", ";");
				allalerts=allalerts.replace(/^;/, "");
				allalerts=allalerts.replace(/;$/, "");
			}
		}
	}
		prescsarray=allprescs.split(";");
		newpresc = sessid.replace(/session$/,"");
		
		newpresc = newpresc + ",On," + $("#prescdescinput").val() + "," + $("#startdate").val() + "," + $("#enddate").val();
	
		for(var i = 0; i < prescsarray.length; i++){
			var prescattr = prescsarray[i].split(",");
			var name = prescattr[0];
			
			if(name == sessid.replace(/session$/,"")){
				
				allprescs=allprescs.replace(prescsarray[i], newpresc);
				
			}
		}
	
		
		
	}
	
	stopSession(url);
}
function removePresc(toRemove){
	
	var prescription = toRemove.split(",")[0];
	if(!(allalerts == undefined)){
	alertsarray=allalerts.split(";");
		
		for(var i = 0; i < alertsarray.length; i++){
			
			var alertattr = alertsarray[i].split(",");
			
			var presc = alertattr[0];
			if(presc == prescription){
				allalerts=allalerts.replace(alertsarray[i], "");
				allalerts=allalerts.replace(";;", ";");
				allalerts=allalerts.replace(/^;/, "");
				allalerts=allalerts.replace(/;$/, "");
			}
		}
	}
	allprescs=allprescs.replace(toRemove, "");
	allprescs=allprescs.replace(";;", ";");
	allprescs=allprescs.replace(/^;/, "");
	allprescs=allprescs.replace(/;$/, "");
	changePage("prescriptions.html");
}
function addNote(){
	var d=new Date();
	noteToAdd = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear() + " : "
	noteToAdd = noteToAdd + $("#textarea_1").val();
	if(allnotes == undefined) {
		allnotes = noteToAdd;
	} else {
		allnotes = allnotes + ";" + noteToAdd;
	}
	changePage("notes.html");
}
function populateNotes(){
	
	if(!(allnotes == undefined)){
		allnotes = unescape(allnotes.replace(/\+/g, " "));
		notesarray=allnotes.split(";");
		for(var i = 0; i < notesarray.length; i++){
			
		    $("#noteswindow").append('<p id='+notesarray[i]+'>'+notesarray[i]+'</p>');
		}
	}
}
function addDoc(){
	if($("#adname").val() == ""){
		alert("Name field is empty");
		return;
	}
	if($("#ademail").val() == ""){
		alert("Email field is empty");
		return;
	}
	if($("#addesc").val() == ""){
		alert("Description field is empty");
		return;
	}
	var docToAdd = $("#adname").val() + "," + $("#ademail").val() +"," +$("#addesc").val();
	if(alldocs == undefined) {
		alldocs = docToAdd;
	} else {
		alldocs = alldocs + ";" + docToAdd;
	}
	changePage("doctor.html");
}
function removeDoc(toRemove){

	alldocs=alldocs.replace(toRemove, "");
	alldocs=alldocs.replace(";;", ";");
	alldocs=alldocs.replace(/^;/, "");
	alldocs=alldocs.replace(/;$/, "");
	changePage("doctor.html");
}
function acceptDocInv(toAccept){
	if(alldocs == undefined) {
		alldocs = toAccept;
	} else {
		alldocs = alldocs + ";" + toAccept;
	}
	removeDocInv(toAccept);
}
function removeDocInv(toRemove){
	
	alldocinvs=alldocinvs.replace(toRemove, "");
	alldocinvs=alldocinvs.replace(";;", ";");
	alldocinvs=alldocinvs.replace(/^;/, "");
	alldocinvs=alldocinvs.replace(/;$/, "");
	changePage("doctor.html");
}
function addAlert(){
	if($("#timeinput").val()  == ""){
		alert("Time input cannot be empty");
		return;
	}
	alertToAdd = sessid;
	alertToAdd = alertToAdd + "," + $("#timeinput").val();
	if($("#ampmdropdown").val() == 1){
	alertToAdd = alertToAdd+ ",AM";
	} else{
		alertToAdd = alertToAdd+ ",PM";
	}
	var checked = false;
	var days="";
	if($("#mon").is(':checked')){
		checked=true;
		days=days+"M";
		
	}
	if($("#tues").is(':checked')){
		checked=true;
		days=days+"T";
		
	}
	if($("#wed").is(':checked')){
		checked=true;
		days=days+"W";
		
	}
	if($("#thurs").is(':checked')){
		checked=true;
		days=days+"Th";
		
	}
	if($("#fri").is(':checked')){
		checked=true;
		days=days+"F";
		
	}
	if($("#sat").is(':checked')){
		checked=true;
		days=days+"Sa";
		
	}
	if($("#sun").is(':checked')){
		checked=true;
		days=days+"Su";
		
	}
	if(checked){
		alertToAdd = alertToAdd + "," + days;
	} else {
		alert("At least one day must be selected");
		return;
	}
	if(allalerts == undefined) {
		allalerts = alertToAdd;
	} else {
		allalerts = allalerts + ";" + alertToAdd;
	}
	if(sessid == "addprescription"){
	changePage("prescriptionsadd.html");
	} else {
		changePage("prescriptionsedit.html");
	}
	
}
function cancelAlert(){
	if(sessid == "addprescription"){
	changePage("prescriptionsadd.html");
	} else {
		changePage("prescriptionsedit.html");
	}
}
function removeAlert(toRemove){
	var removeArray = toRemove.split(",");
	var name = removeArray[0];
	if(name.match(/session$/) || name.match(/addprescription/)){
	allalerts=allalerts.replace(toRemove, "");
	allalerts=allalerts.replace(";;", ";");
	allalerts=allalerts.replace(/^;/, "");
	allalerts=allalerts.replace(/;$/, "");
	} else{
		sessionRemove = toRemove.replace(name, name+"remove");
		allalerts=allalerts.replace(toRemove, sessionRemove);
	}
	changePage("prescriptionsadd.html");
}
function populateDoctors(){
	
	if(!(alldocs == undefined)){
		alldocs = unescape(alldocs.replace(/\+/g, " "));
		docsarray=alldocs.split(";");
		for(var i = 0; i < docsarray.length; i++){
			var docattr = docsarray[i].split(",");
			var name = docattr[0];
			name = name.replace(/[.|\s]/g,"");
			var email = docattr[1];
			var desc = docattr[2];
			$("#docswindow").append('<div class="doctorBlock" id="' + name + 'start">');
			$("#"+name+"start").append('<div>Name: '+name+'</div>')
				.append('<div>E-mail: '+email+'</div>')
				.append('<div>Description: '+desc+'</div>')
				.append("<input type='button' style='float:right;' value='Remove' onClick=removeDoc('"+docsarray[i]+"'); />");			
		}
	}
}
function populateDoctorInvites(){
	if(!(alldocinvs == undefined)){
		alldocinvs = unescape(alldocinvs.replace(/\+/g, " "));
		docinvsarray=alldocinvs.split(";");
		for(var i = 0; i < docinvsarray.length; i++){
			var docinvattr = docinvsarray[i].split(",");
			var name = docinvattr[0];
			name = name.replace(/[.|\s]/g,"");
			var email = docinvattr[1];
			var desc = docinvattr[2];
			
			$("#docinvswindow").append('<div class="docInvitesBlock" id="' + name + 'di">');
			$("#"+name+"di").append('<div>Name: '+name+'</div>')
				.append('<div>E-mail: '+email+'</div>')
				.append('<div>Description: '+desc+'</div>')
				.append("<input type='button' style='float:right;' value='Accept' onClick=acceptDocInv('"+docinvsarray[i]+"'); />")
				.append("<input type='button' style='float:right;' value='Decline' onClick=removeDocInv('"+docinvsarray[i]+"'); />");
		}
	}
}
function populatePrescriptions(){
	if(!(allprescs == undefined)){
		allprescs = unescape(allprescs.replace(/\+/g, " "));
		prescsarray=allprescs.split(";");
		for(var i = 0; i < prescsarray.length; i++){
			var prescattr = prescsarray[i].split(",");
			var name = prescattr[0];
			
			name = name.replace(/[.|\s]/g,"");
			var alertson = prescattr[1];
			var startId = name + 'pstart';
			$("#prescswindow").append('<div class="addPrescriptionBlock" style="border:1px solid black;" id="' + name + 'p">' + '<div id="' + startId + '"/> </div>');
			$("#"+ startId).append("<input type='button' style='float:right;' value='details' onClick=startSession('"+name+"','prescriptionsedit.html'); />");
			
			$("#"+ startId).append("<input type='button' style='float:right;' value='remove' onClick=removePresc('"+prescsarray[i]+"'); />");
			$("#"+ startId).append('<p>name: '+name+'</p>');
			$("#"+ startId).append('<p>alerts: '+alertson+'</p>');
		}
	}
}
function populatePrescriptionsForEdit(){
	if(!(allprescs == undefined)){
		allprescs = unescape(allprescs.replace(/\+/g, " "));
		prescsarray=allprescs.split(";");
		for(var i = 0; i < prescsarray.length; i++){
			var prescattr = prescsarray[i].split(",");
			var name = prescattr[0];
			
			name = name.replace(/[.|\s]/g,"");
			var alertson = prescattr[1];
			var startId = name + 'pstart';
			$("#prescswindow").append('<div class="addPrescriptionBlock" id="' + name + 'p">');
			$('#' + name + 'p').append('<div>Name: '+name+'</div>')
				.append('<div>Alerts: '+alertson+'</div>')
				.append("<input type='button' style='float:right;' value='details' onClick=startSession('"+name+"','prescriptionsedit.html'); />")
				.append("<input type='button' style='float:right;' value='remove' onClick=removePresc('"+prescsarray[i]+"'); />")
		}
	}
}
function populateAlerts(){
	if(!(sessid == "addprescription")){
		var prescription = sessid.replace(/session$/,"");
		$("#editprescname").append(prescription);
		
		
	}
	if(!(allalerts == undefined)){
		allalerts = unescape(allalerts.replace(/\+/g, " "));
		alertsarray=allalerts.split(";");
		
		for(var i = 0; i < alertsarray.length; i++){
			
			var alertattr = alertsarray[i].split(",");
			
			var presc = alertattr[0];
			if(presc==sessid){
				
			presc = presc.replace(/[.|\s]/g,"");
			var time = alertattr[1];
			var ampm = alertattr[2];
			var days = alertattr[3];
			
			$("#alertswindow").append("<div id="+presc + "a> <div id="+presc+"astart/> </div>");
		   	$("#"+presc + "astart").append('<span>__________________________</span>');
			
			$("#"+presc+"astart").append("<input type='button' style='float:right;' value='remove' onClick=removeAlert('"+alertsarray[i]+"'); />");
			$("#"+presc + "astart").append('<p>'+time + ampm + ' ' + days + '</p>');
			}
			else if(presc==sessid.replace(/session$/, "")){
				presc = presc.replace(/[.|\s]/g,"");
			var time = alertattr[1];
			var ampm = alertattr[2];
			var days = alertattr[3];
			
			$("#alertswindow").append("<div id="+presc + "a> <div id="+presc+"astart/> </div>");
		   	$("#"+presc + "astart").append('<span>__________________________</span>');
			
			$("#"+presc+"astart").append("<input type='button' style='float:right;' value='remove' onClick=removeAlert('"+alertsarray[i]+"'); />");
			$("#"+presc + "astart").append('<p>'+time + ampm + ' ' + days + '</p>');
			}
		}
	}
	
	$("#prescriptionnameinput").val(prescname);
	$("#prescdescinput").val(unescape(prescdesc.replace(/\+/g, " ")));
	$("#startdate").val(prescstart);
	$("#enddate").val(prescend);
}
function populateAddAlert(){
	$("#addalertpn").append(prescname);
}
