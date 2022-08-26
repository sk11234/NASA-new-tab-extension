let d1 = new Date();
let hours1 = d1.getHours();
let minutes1 = d1.getMinutes();

if (hours1 > 12) {
    hours1 = hours1 - 12;
}

if (minutes1 < 10) {
    minutes1 = "0" + minutes1
}

document.querySelector('.time').innerHTML = `${hours1}:${minutes1}`;

function getTime() {
    let d2 = new Date();
    let hours2 = d2.getHours();
    let minutes2 = d2.getMinutes();
    let session = "AM";

    if (hours2 > 12) {
        session = "PM";
        hours2 = hours2 - 12;
    }

    if (minutes2 < 10) {
        minutes2 = "0" + minutes2
    }

    document.querySelector('.time').innerHTML = `${hours2}:${minutes2} ${session}`;

    setTimeout(getTime, 1000);
}

getTime();

function getFullDate() {
    let d3 = new Date();
    let dayOfWeek = d3.getDay();
    let month1 = d3.getMonth();
    let day1 = d3.getDate();
    let year1 = d3.getFullYear();
    
    if (dayOfWeek == 0) {
        dayOfWeek = "Sunday";
    }
    else if (dayOfWeek == 1) {
        dayOfWeek = "Monday";
    }
    else if (dayOfWeek == 2) {
        dayOfWeek = "Tuesday";
    }
    else if (dayOfWeek == 3) {
        dayOfWeek = "Wednesday";
    }
    else if (dayOfWeek == 4) {
        dayOfWeek = "Thursday";
    }
    else if (dayOfWeek == 5) {
        dayOfWeek = "Friday";
    }
    else {
        dayOfWeek = "Saturday";
    }

    if (month1 == 0) {
        month1 = "January";
    }
    else if (month1 == 1) {
        month1 = "February";
    }
    else if (month1 == 2) {
        month1 = "March";
    }
    else if (month1 == 3) {
        month1 = "April";
    }
    else if (month1 == 4) {
        month1 = "May";
    }
    else if (month1 == 5) {
        month1 = "June";
    }
    else if (month1 == 6) {
        month1 = "July";
    }
    else if (month1 == 7) {
        month1 = "August";
    }
    else if (month1 == 8) {
        month1 = "September";
    }
    else if (month1 == 9) {
        month1 = "October";
    }
    else if (month1 == 10) {
        month1 = "November";
    }
    else {
        month1 = "December";
    }

    document.querySelector('.date').innerHTML = `${dayOfWeek}, ${month1} ${day1}, ${year1}`;
    
    setTimeout(getFullDate, 1000);
}

getFullDate();

let d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1; 
let day = d.getDate();

function getImage() {
    fetch(`https://api.nasa.gov/planetary/apod?date=${year + "-" + month + "-" + day}&api_key=${config.apiKey}`)
        .then((response) => response.json())
        .then(function(data) {
            const {media_type} = data;
            const {hdurl} = data;
            if (media_type != "image") {
                if (day >= 1) {
                    day = day - 1;
                }
                else {
                    if (month == 0) {
                        month = 11;
                        day = 25;
                    }
                    else {
                        month = month - 1;
                        day = 25;
                    }
                }
                getImage();
            }
            else {
                document.body.style.backgroundImage = `url(${hdurl})`;
            }
        })
}

getImage();