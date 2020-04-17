// analog clock
const clockDegrees = 6;
const hour = document.querySelector(".hour")
const min = document.querySelector(".min")
const sec = document.querySelector(".sec")


setInterval( function() {
    let day= new Date()
    let hr = day.getHours() * 30
    let  mn = day.getMinutes() * clockDegrees
    let sc = day.getSeconds() * clockDegrees
    hour.style.transform = 'rotateZ(' +(hr+(mn/12)) + 'deg)';
    min.style.transform = 'rotateZ(' + mn + 'deg)';
    sec.style.transform = 'rotateZ(' + sc + 'deg)'; 
})
setInterval(digitalTime, 100)

// digital clock
function digitalTime(){ 
let digitalDay = new Date()
let digitalHour = digitalDay.getHours()
let digitalMin = digitalDay.getMinutes()
let digitalSec = digitalDay.getSeconds()

function twoDigits(n){
    return (n < 10 ? "0" : "" ) + n
}
document.querySelector('#digital-hours').innerHTML = twoDigits(digitalHour) 
document.querySelector('#digital-mins').innerHTML = twoDigits(digitalMin)
document.querySelector('#digital-secs').innerHTML = twoDigits(digitalSec)
}

//Date
let days = new Date();
let realDate = days.getDate();

//Day of the month
let typeOfDay = new Array()
typeOfDay[0] = '31st'
typeOfDay[1] = '1st' 
typeOfDay[2] = '2nd' 
typeOfDay[3] = '3rd' 
typeOfDay[4] = '4th' 
typeOfDay[5] = '5th' 
typeOfDay[6] = '6th' 
typeOfDay[7] = '7th' 
typeOfDay[8] = '8th' 
typeOfDay[9] = '9th' 
typeOfDay[10] = '10th' 
typeOfDay[11] = '11th' 
typeOfDay[12] = '12th' 
typeOfDay[13] = '13th' 
typeOfDay[14] = '14th' 
typeOfDay[15] = '15th' 
typeOfDay[16] = '16th' 
typeOfDay[17] = '17th' 
typeOfDay[18] = '18th' 
typeOfDay[19] = '19th' 
typeOfDay[20] = '20th' 
typeOfDay[21] = '21st' 
typeOfDay[22] = '22nd' 
typeOfDay[23] = '23rd' 
typeOfDay[24] = '24th' 
typeOfDay[25] = '25th' 
typeOfDay[26] = '26th' 
typeOfDay[27] = '27th' 
typeOfDay[28] = '28th' 
typeOfDay[29] = '29th' 
typeOfDay[30] = '30th' 
typeOfDay[31] = '31st' 

let realTypeOfDay =days.getDate();

//Day of the week
let dayOfWeek = new Array();
dayOfWeek[0] = "Sunday";
dayOfWeek[1] = "Monday";
dayOfWeek[2] = "Tuesday";
dayOfWeek[3] = "Wednesday";
dayOfWeek[4] = "Thursday";
dayOfWeek[5] = "Friday";
dayOfWeek[6] = "Saturday";

//Month
let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

let realDay = dayOfWeek[days.getDay()]
let realMonth = month[days.getMonth()];
let realYear= days.getFullYear();

document.querySelector("#date-display").innerHTML =`${realDay}, ${realMonth} ${realTypeOfDay}, ${realYear}` 



//   function getOrdinal(n) {
//     var s=["th","st","nd","rd"],
//         v=n%100;
//     return n+(s[(v-20)%10]||s[v]||s[0]);
//  }