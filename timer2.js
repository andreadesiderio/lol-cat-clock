function Timer(){
    //will be set to now and used to calclate the time passed//
        var offsetTime;
    
        //current time to display in Millisec (this is the start time)//
        var time = 0;
        
        //this is a var so that it can be cleared later and then used again//
        var interval;
    
    function update(){
        //displayTime  = the time that has passed since timer started//
        time += calculateTimePassed();
        var formattedTime = formatTime(time);
        console.log(formattedTime);
    }
    
    function calculateTimePassed(){
        var now = Date.now();
        //the current time - the time when the timer was started//
        var timePassed = now - offsetTime;
        //this will make it calcutale the time between now - the last time this function was ran (10 millsec ago)//
        offsetTime = now;
        return timePassed; 
    }
    
    function formatTime(timeInMilliseconds){
    var time = new Date(timeInMilliseconds);
    
    //toString allows us to check the length, a number type won't///
     var hours = time.setHours(0);
     var minutes = time.getMinutes().toString();
     var seconds = time.getSeconds().toString(); 
     var milleseconds = time.getMilliseconds().toString();
    
    // var hours = time.getHours();
    //  var minutes = time.getMinutes();
    //  var seconds = time.getSeconds(); 
    //  var milleseconds = time.getMilliseconds();
    
    
    if ( hours.length < 2 ){
        hours = "0" + hours;
    }
    
    if ( minutes.length < 2 ){
        minutes = "0" + minutes;
    }
    
    if ( seconds.length < 2 ){
        seconds = "0" + seconds;
    }
    
    //why while instead if if?///
    //this allows millsec to return two digits or three digits//
    while (milleseconds.length < 3){
        milleseconds = "0" + milleseconds;
    }
    
    return hours + " : " + minutes + " : " + seconds + " . " + milleseconds;
    }
    
    
    this.isOn = false;
    this.start = function(){
        //if this.isOn != true (english: do this only if timer is off)// 
        if (!this.isOn){
           interval = setInterval(update, 10);
    
           //this is the time when the timer starts//
           offsetTime = Date.now();
    
           //the time is now on//
           this.isOn = true;
        }
    }; 
    
    this.stop = function(){
        //if isOn = true (english: do this only if timer is on)
        if (this.isOn)
        clearInterval(interval);
    
        //makes sure interval is off//
        interval = null; 
        //the timer is now off//
        this.isOn = false;
    };
    
    this.reset = function(){
        time = 0;
    };
    
    }