var hourCurrent = new Date().getHours(); 


var imgHolder = document.getElementById("lolcat");
var img;
var defaultImg = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg"; 
var messageText;
var partyTime = 17; //5pm 
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var napTime = lunchTime + 2; // 2PM
var timeEvent = document.getElementById("timeEvent");


var dateSpace =  document.getElementById('date');
dateSpace.innerHTML = new Date().toDateString();

 var clockInterval = setInterval(displayTime, 1000);
   var appCheck = setInterval(appCheck, 1000);
 function displayTime(){
 	var clock = document.getElementById("clock");
 	 var date = new Date();
 	 clock.innerHTML = date.toLocaleTimeString(); 
 	}


// function displayTime(){
// 	var clock = document.getElementById("clock");
// 	 var date = new Date();
// 	  var hour = date.getHours();
// 	 var minute = date.getMinutes();
// 	 var second = date.getSeconds();
// 	 var meridien = "AM";
// 	var timeDisplayWithSeconds;
// 		 if (hour >= 12){
// 		 	meridien = "PM";
// 		 }
// 		 if (hour > 12){
// 		 	hour = hour - 12;
// 		 }
// 		var hour;
// 		var meridien;
// 		 if (minute < 10){
// 			minute = "0" + minute;
// 		}
// 		 if (second < 10){
// 			second = "0" + second;
// 		}
// 		timeDisplayWithSeconds  = hour + ":" + minute + ":" + second + " " + meridien;
// 		clock.innerText = timeDisplayWithSeconds + " " + date.toLocaleTimeString(); 
// 	}
	
	var appInterval = setInterval(timeCheck, 5000); 
	function timeCheck(){
		updatePicAndMessage();
		setAppTime();
	}



var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
function wakeUpEvent(){
wakeUpTime = wakeUpTimeSelector.value;	
}
	
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
lunchTimeSelector.addEventListener("change", lunchEvent);
function lunchEvent(){
bghlunchTime = lunchTimeSelector.value;	
}

var napTimeSelector = document.getElementById("napTimeSelector");
napTimeSelector.addEventListener("change", napEvent);
function napEvent(){
napTime = napTimeSelector.value;	
}


var partyTimeButton = document.getElementById("partyTimeButton");
partyTimeButton.addEventListener("click", showPartyTime);

function showPartyTime(){
	partyTime = true;
    partyTimeButton.style.backgroundColor = "yellow";
	partyTimeButton.style.color = "#f16059";
	setTimeout(backToDefaultButton, 3000);
	}
function backToDefaultButton(){
		partyTimeButton.style.backgroundColor = "black";
	partyTimeButton.style.color = "white";
	partyTime = false;
}

var appTimeButton = document.getElementById("appTimeButton");
appTimeButton.addEventListener("click", setApp);
var appTime = false;
var appStartHourValue = 0;
var appStartMinuteValue = 0;
var appEndHourValue = 0;
var appEndMinuteValue = 0;
var appConfirmation;
var appStartTime;
var appEndTime
 function setApp(){
	 appStartHourValue = document.getElementById("appStartHourSelector").value;
     appStartMinuteValue = document.getElementById("appStartMinuteSelector").value;
	var appStartMeridienValue = document.getElementById("meridienStartSelector").value;
	converHourAndMinute(appStartMeridienValue, appStartHourValue, appStartMinuteValue);
	 appEndHourValue = document.getElementById("appEndHourSelector").value;
	appEndMinuteValue = document.getElementById("appEndMinuteSelector").value;
	var appEndMeridienValue = document.getElementById("meridienEndSelector").value;
	converHourAndMinute(appEndMeridienValue , appEndHourValue, appEndMinuteValue);
  appStartTime = appStartHourValue + ":" + appStartMinuteValue +"" + appStartMeridienValue;
 appEndTime = appEndHourValue + ":" + appEndMinuteValue + "" + appEndMeridienValue;
  updatePicAndMessage(appTime, appStartTime, appEndTime);
 setAppTime();
 }

 function setAppTime(){
	  appStartHourValue = appStartHourValue;
	  appStartMinuteValue = appStartMinuteValue;
	 appEndHourValue = appEndHourValue;
	 appEndMinuteValue = appEndMinuteValue;
	 var currentHour = new Date().getHours();
	 var currentMinute = new Date().getMinutes();
	  if (currentHour > 12 ){
	 	 currentHour = currentHour - 12;
	  }
	  if (currentMinute < 10){
	 	 currentMinute = "0" + currentMinute;
	  }
if (currentHour >= appStartHourValue && currentHour <= appEndHourValue){
	var appHour = true;
}
if (currentMinute >= appStartMinuteValue && currentMinute <= appEndMinuteValue){
	var appMinute = true;
}
if (appHour == true && appMinute == true){
	appTime = true;
}
else {
	appTime = false;
}
}



var alarmButton = document.getElementById("alarmButton");
alarmButton.addEventListener('click', setAlarm);
var alarmTime = false;
var alarmHourValue = 0;
var alarmMinuteValue = 0;
var alarmConfirmation;
function setAlarm(){
alarmHourValue = document.getElementById('alarmHourSelector').value;
alarmMinuteValue = document.getElementById('alarmMinuteSelector').value;
var alarmMeridienValue = document.getElementById('meridienAlarmSelector').value;
converHourAndMinute(alarmMeridienValue, alarmHourValue, alarmMinuteValue);
alarmConfirmation = alarmHourValue + ":" + alarmMinuteValue + "" + alarmMeridienValue;
// alert('your alarm is set for ' + alarmTimeDisplay)
updatePicAndMessage(alarmTime, alarmConfirmation);
setAlarmTime();

}

function setAlarmTime(){
alarmHourValue = alarmHourValue;
alarmMinuteValue = alarmMinuteValue;
var currentHour = new Date().getHours();
var currentMinute = new Date().getMinutes();
if (currentHour > 12 ){
	currentHour = currentHour - 12;
}
if (currentMinute < 10){
	currentMinute = "0" + currentMinute;
}
if (currentHour == alarmHourValue && currentMinute == alarmMinuteValue){
	alarmTime = true;
}
else {
	alarmTime = false;
}
return alarmTime;
}

var modal = document.getElementById('modalHolder');
function showModal(){
	setAlarmTime();
	if(alarmTime == true){
		modal.style.display = "block";
	} 
	if (alarmTime == false){
		modal.style.display = "none";
	}
}
var alarmInterval= setInterval(showModal, 3000);

function clearModal(){
	modal.style.display = "none";
	 clearInterval(alarmInterval);
}
var modalOkButton = document.getElementById("modalOkButton");
modalOkButton.addEventListener("click", clearModal);

var modalSnoozeButton = document.getElementById("modalSnoozeButton");
modalSnoozeButton.addEventListener("click", () => modal.style.display = "none" );



// function Timer(hour, minute, second) {
// 	this.timerHour = hour;
// 	this.timerMinute = minute;
// 	this.timerSecond = second;
// 	this.eventDate = new Date();
// 	this.zeroTime = new Date().setHours(0, 0 ,0);
// 	this.eventDate.setHours(this.timerHour, this.timerMinute,  this.timerSecond); 
// 	this.eventTime = this.eventDate.getTime();
// 	// this.timeStart = 
// 	this.displayTimer = function (){
	
// var remTime = this.eventTime - this.zeroTime;

// var remSec = Math.floor(remTime/1000);
// var remMin = Math.floor(remSec/60);
// var remHour = Math.floor(remMin/60);

// remHour %= 24;
// remMin %= 60;
// remSec %=60;

// document.getElementById('hour').innerHTML = remHour; 
// document.getElementById('min').innerHTML = remMin; 
// document.getElementById('sec').innerHTML = remSec; 

// setTimeout (this.displayTimer, 1000);

// // return this.remTime;
// 		// return this.timerHour + " : " +  this.timerMinute + " : " + this.timerSecond;
// };
// // 	this.startCountdown = function (){
// // 		setInterval(function(){
			

// // 		} , 1000 );
// // }
// }
// // var countDownTimer = new Timer();

// function setTimer(){
// 	var hour = document.getElementById('timerHourSelector').value;
// 	var minute = document.getElementById('timerMinuteSelector').value;
// 	var second = document.getElementById('timerSecondSelector').value;
//   var countDownTimer = new Timer(hour, minute, second);
// 	// var timerDisplayHolder = document.getElementById('timerDisplayHolder');
// // var	stopWatchDisplay = document.getElementById('stopWatchDisplay');
// countDownTimer.displayTimer();
// timerDisplayHolder.style.display = "block";

// }


// // var timerStartButton = document.getElementById('timerStartButton');
// // timerStartButton.addEventListener('click', function (){
// // 	countDownTimer.startCountdown();
// // function startTimer(countDownTimer){
// // 	alert(countDownTimer.displayTimer());
// // }




// var timerSetButton = document.getElementById('timerSetButton');
// timerSetButton.addEventListener('click', setTimer);













function converHourAndMinute(meridienValue, hourValue, minuteValue){
	var meridienValue = meridienValue;
	var hourValue = Number(hourValue);
	var minuteValue = Number(minuteValue);
	if (meridienValue == "PM" && hourValue !=12 || meridienValue == "AM" && hourValue == 12){
		hourValue +=12;
	}
	if (minuteValue < 10 ){
		minuteValue = "0" + minuteValue;
	}
	return hourValue + minuteValue;
}

//open and stopWatchCloseButton stop watch
var stopWatchCaller = document.getElementById('stopWatchCaller');
stopWatchCaller.addEventListener("click", function(){
	document.getElementById("stopWatchContainer").style.display = "block";
	document.getElementById("stopWatchDisplay").style.display = "block";
})
var stopWatchCloseButton = document.getElementById("stopWatchCloseButton");
stopWatchCloseButton.addEventListener("click", function(){
	document.getElementById("stopWatchContainer").style.display = "none";
	document.getElementById("stopWatchDisplay").style.display = "none";
})





function updatePicAndMessage(param){
	var arg = param;
	img = defaultImg;
	if (hourCurrent == partyTime || partyTime == true || arg == partyTime){
		messageText = "IZ PARTEE TIME!!";
		img = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	}
	else if (appTime == true){
		messageText = "Its time for your appointment";
	}
	  else if (hourCurrent == napTime) {
		 messageText = "IZ NAP TIME…";
		 img = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	 }
	  else if (hourCurrent == lunchTime) {
		 messageText = "IZ NOM NOM NOM TIME!!";
		 img = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	 } 
	 else if (hourCurrent == wakeUpTime) {
		 messageText = "IZ TIME TO GETTUP.";
		 img = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	 }
	  else if (hourCurrent < noon) {
		 messageText = "Good morning!";
	 }
	  else if (hourCurrent > evening) {
		 messageText = "Good Evening!";
	 }
	 else if (arg == appTime){
		messageText = "You have an appoinment from " + appStartTime + " to " + appEndTime;
	}
	else if (arg == alarmTime){
		messageText = 'your alarm is set for ' + alarmConfirmation;
	}
	  else {
		 messageText = "Good afternoon!";
	}
	timeEvent.innerHTML = messageText;
	imgHolder.src = img;
	}
