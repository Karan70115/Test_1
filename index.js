//data types in js
//number, string, obejcts, booleans
//  1- premitive data type : undefined, null, number, string, boolean, symbol
// 2- Reference data type : arrays and objects

// var arr = (1,2,3,4,5)
// console.log (arr);

// operaters in javascript - Arithmetic , assignment comparison ==,>=,<=,<,>, logical operators && - ture, || logical note - !
// operators & oprents 

// function avg(a,b){
//     return (a+b)/2;
// }

// a1 = avg(4,6);
// a2 = avg(14,16);
// // console.log(a1,a2);

const display = document.querySelector('.display');
const setAlarmButton = document.querySelector('.set-alarm');

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zero to minutes and seconds if they are less than 10
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;

  // Convert hours to 12-hour format and add leading zero if needed
  const amPm = (hours < 12) ? 'AM' : 'PM';
  hours = (hours > 12) ? hours - 12 : hours;
  hours = (hours === 0) ? 12 : hours;
  hours = (hours < 10) ? `0${hours}` : hours;

  // Update the time display
  display.innerHTML = `<span class="hours">${hours}</span> : <span class="minutes">${minutes}</span> : <span class="seconds">${seconds}</span> ${amPm}`;
}

// Call updateTime function every second to update the clock display
setInterval(updateTime, 1000);

// Add click event listener to set alarm button
setAlarmButton.addEventListener('click', function() {
  // Replace this alert with your own alarm logic
  alert('Alarm set!');
});
