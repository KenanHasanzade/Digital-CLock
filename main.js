
var time = new Date();
var hoursPlace = document.getElementById("hourstime");
var minutesPlace = document.getElementById("minutestime");
var secondsPlace = document.getElementById("secondstime")
var weekDayPlace = document.getElementById("weekday")
var weekDay = time.getDay();
var dayDate = time.getDate();
var monthDate = time.getMonth();
var yearDate = time.getFullYear();
var fulldatePlace = document.getElementById("fulldate")
var moon = document.getElementById("moon");
var sun = document.getElementById("sun");



var hours = time.getHours();
if(hours > 0 && hours < 7){
    moon.style.display = "block";
    sun.style.display = "none"
}
else if(hours > 18 && hours < 24) {
    moon.style.display = "block";
    sun.style.display = "none"
}
else{
    console.log(hours)
    moon.style.display = "none";
    sun.style.display = "block"
}

switch(monthDate){
    case 0: monthDate = "January";
    break;
    case 1: monthDate = "February";
    break;
    case 2: monthDate = "March";
    break;
    case 3: monthDate = "April";
    break;
    case 4: monthDate = "May";
    break;
    case 5: monthDate = "June";
    break;
    case 6: monthDate = "July";
    break;
    case 7: monthDate = "August";
    break;
    case 8: monthDate = "September";
    break;
    case 9: monthDate = "October";
    break;
    case 10: monthDate = "November";
    break;
    case 11: monthDate = "December";
    break;
    
}
var fullDate = dayDate + " " + monthDate + " " + yearDate
console.log(fullDate)
fulldatePlace.innerHTML = fullDate
switch(weekDay){
    case 0 :weekDayPlace.innerHTML = "Sunday";
    break;
    case 1: weekDayPlace.innerHTML = "Monday";
    break;
    case 2: weekDayPlace.innerHTML = "Tuesday";
    break;
    case 3: weekDayPlace.innerHTML = "Wednesday";
    break;
    case 4: weekDayPlace.innerHTML = "Thursday";
    break;
    case 5:weekDayPlace.innerHTML = "Friday";
    break;
    case 6:weekDayPlace.innerHTML = "Saturday";

}


function setTimeAction(){
var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();
hours<10?hoursPlace.innerText = "0"+hours:hoursPlace.innerHTML = hours 
minutes<10?minutesPlace.innerText = "0"+minutes:minutesPlace.innerHTML = minutes;
seconds<10?secondsPlace.innerText = "0"+seconds:secondsPlace.innerHTML = seconds;
}

setInterval(setTimeAction, 1000);

