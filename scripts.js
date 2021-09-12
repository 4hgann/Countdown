const bday = "9 Mar 2022";


const daysDisplay = document.getElementById("days");
const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");


function countdown() {
    const today = new Date();
    const birthdate = new Date(bday);

    const secondsDifference = (birthdate.getTime() - today.getTime()) / 1000;

    const seconds = Math.floor(secondsDifference) % 60;
    const minutes = Math.floor(secondsDifference/60) % 60;
    const hours = Math.floor(secondsDifference / 3600) % 24;
    const days = Math.floor(secondsDifference / (60*60*24));

    daysDisplay.innerHTML = days;
    hoursDisplay.innerHTML = hours;
    minutesDisplay.innerHTML = minutes;
    secondsDisplay.innerHTML = seconds;
}

//Every second call the countdown function to refresh the timer
countdown();
setInterval(countdown,1000)