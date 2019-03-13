//var stopWatchStartPauseButton button
//when the sWStartPauseButton button is pressed 
//do startPuse ()
var sWStartPauseButton = document.getElementById("stopWatchStartPauseButton");
sWStartPauseButton.addEventListener("click", startPauseSW);

//text inside the stopWatchStartPauseButton button
var sWStartPauseButtonText = document.getElementById("sWStartPauseButtonText");

//var reset button
var sWResetButton = document.getElementById("stopWatchResetButton");
sWResetButton.addEventListener('click', resetSW);

//obj timer ... 
//should meda into an obeject later and vars turned to this
// function timer(){  //should the vars be this?
//startPauseButtonText value of stopWatch = 0;
var sWTime = 0;

//is it stopWatch? 0=false,  1 =true ... should i change to boolean??
var sWRunning = 0;

//var stopWatchOutput
var stopWatchOutput = document.getElementById('stopWatchOutput');

function startPauseSW(){
    //if its not already running
    if (sWRunning == 0){
    //start running
        sWRunning = 1;
        //startPauseButtonText button becomes pause button
        sWStartPauseButtonText.innerHTML = "Pause";
        sWStartPauseButton.style.color = "red";
        sWStartPauseButton.style.borderColor = "red";
        // sWResetButton.style.display= "none";
        //increment the stopWatch
        incrementTime();
    }
    //if it is alerady stopWatch 
    else{
        //stop running
        sWRunning = 0;
        //pause button becomes resume
        sWStartPauseButtonText.innerHTML = "Resume";
        sWStartPauseButton.style.color = "green";
        sWStartPauseButton.style.borderColor = "green";
        sWResetButton.style.display= "inline-block";
        }
    
}

//when reset button gets pressed 
function resetSW(){
    // the stopWatch is no longer running
    sWRunning = 0;
    //stopWatch time is reset to 0
    sWTime = 0;
    stopWatchOutput.innerHTML = "00 : 00 : 00 . 000";
    sWStartPauseButtonText.innerHTML = "Start";
    sWStartPauseButton.style.color = "initial";
    sWStartPauseButton.style.borderColor = "initial";
    stopWatchResetButton.style.display= "none";
 
 }

//increment stopWatch()
function incrementTime(){
    //if the timer is stopWatch 
    if (sWRunning == 1){
        setTimeout (function (){
//sWTime ++
sWTime ++;
//stopWatch = the number if times it has incremented
//hour 
//min
//sec
//millisec
//devided by 10 why????
//every 8 mmiliseconds: increment number/ devideved by 100 to make it a 3 digit decimal
//devideved by 60 so that it stops at 60 (60 min in an hour)
//divided by 60 again (60 seconds in a min)
var hour = Math.floor(sWTime / 100 / 60 / 60);
var minute = Math.floor(sWTime / 100 / 60);
var second = Math.floor(sWTime / 100 % 60);
//amount of increments devided by 1000 to make it 3 digits, return the remainder 
// millisecond.toString() so that we can use length
var millisecond = (sWTime % 1000).toString();

if (hour < 10){
    hour = "0" + hour;
}
if (minute < 10 ){
    minute = "0" + minute;
}
if (second < 10){
    second = "0" + second;
}
while (millisecond.length < 3){
millisecond = "0" + millisecond;
}
//stopWatchOutput = hour + min + sec + millisec
stopWatchOutput.innerHTML = hour + " : " + minute + " : " + second + " . " + millisecond;
//increment Time every 10 millisec
incrementTime();
    }, 8)
}
}






