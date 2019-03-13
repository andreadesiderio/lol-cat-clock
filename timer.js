var timerOutput = document.getElementById("timerOutput");
var timerStartPauseButtonText = document.getElementById("timerStartPauseText");

var timerRunning = 0;
//when the timerSet button gets clicked
//take the second  
//take the minute
//take the hour 
//display the timer container
//store the hour, min and sec in the output


///remenber to put the object on top so others can access
function Timer (second , minute, hour){
    this.timerSecond = second;
    this.timerMinute = minute;
    this.timerHour = hour;
    this.setTimer = function(){
       return this.timerHour + " : " + this.timerMinute  + " : " + this.timerSecond;}
    }   
    
var timer;

var timerContainer = document.getElementById("timerContainer");
var timerSetButton = document.getElementById("timerSetButton");
timerSetButton.addEventListener("click", showTimer);
function showTimer(){
    timerContainer.style.display = "block"; 
    var second = document.getElementById("timerSecondSelector").value;
    var minute = document.getElementById("timerMinuteSelector").value;
     var hour = document.getElementById("timerHourSelector").value;
      timer = new Timer(second, minute, hour);
    timerOutput.innerHTML = timer.setTimer()};


var timerCloseButton = document.getElementById("timerCloseButton");
timerCloseButton.addEventListener("click", function(){
    timerContainer.style.display = 'none';
});


 var timerResetButton = document.getElementById("timerResetButton");
 timerResetButton.addEventListener("click", function (){showTimer; timerResetButton.style.display = "none"});

// //when the timer startPause button is pressed
var timerStartPauseButton = document.getElementById("timerStartPauseButton");
timerStartPauseButton.addEventListener("click", startPauseTimer);



function startPauseTimer(){
//if the time is not already running 
if (timerRunning == 0){
    //start running the timer
    timerRunning = 1;
//the start button turns to pause
timerStartPauseButtonText.innerHTML = "Pause";
timerStartPauseButton.style.borderColor = "red";
timerStartPauseButton.style.color = "red";
timerResetButton.style.display = "inline-block";
    //decrement the time
  decerementTime();
}
//if the tme is arleady running
else{
    // stop running
    timerRunning = 0;
    //the pause button turns to resume
    timerStartPauseButtonText.innerHTML = "Resume";
    timerStartPauseButton.style.borderColor = "green";
timerStartPauseButton.style.color = "green";
}
}



function decerementTime(){
    var date = new Date();
                var deadlineHour= date.getHours()+ timer.timerHour;
                var deadlineMinute= date.getMinutes() + timer.timerMinute;
                var deadlineSecond = date.getSeconds() + timer.timerSecond;
                var deadlineDate = date.setHours(deadlineHour, deadlineMinute, deadlineSecond);
    //if the timer is running
    if (timerRunning == 1){
        //do this in intevals var interval 
        var timerInterval = function (){
                //this is in milliseconds
                
                //this is in millisecods
                
                var deadlineTime = deadlineDate.getTime(); 
                var startTime = new Date().getTime();
                var remTime = deadlineTime - startTime;
                //  var remHour = Math.floor((remTime%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));  
                //  var remMinute = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
                //  var remSecond = Math.floor((remTime % (1000 * 60)) / 1000); 
 
//                 var countDownStart = new Date().setHours(timer.timerHour, timer.timerMinute, timer.timerSecond);
//                 // the thime that the timer starts (right now) in miiliseconds
//                 var countDownEnd = new Date().setHours(0,0,0);
//                 //..in milliseconds
//                 var remainingTime = countDownStart - countDownEnd; 
                

                //convert the time in milllsec to user friendly time
              var remSecond = Math.floor(remTime / 1000);
              var remMinute = Math.floor(remSecond / 60); 
              var remHour = Math.floor(remMinute / 60); 
var remDay = Math.floor(remHour/24); 
                remHour = remHour % 24;
                 remMinute %= 60;
                remSecond %=60; 
                
            timerOutput.innerHTML = remHour + " : " + remMinute + " : " + remSecond;
            }
timerInterval();
        }

}




//calculate the time that the time begins running (now )
//now = new date().getTime() this is in milliseconds
//calculate the ramining time
//remaining time = deadline - now  ..in milliseconds
//convert the time in milllsec to user friendly time 
//remaing hour is
//remaining minute is 
///remaining second is
//show te remainig time in output
//do this every second
// if remaining time == 0 , stop the interval
//say timer stopped in output




//for every time it decrements
//the remaining second is 
//the remaining second is second/
