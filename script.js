let d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1; 
let day = d.getDate();

let d1 = new Date();
let hours1 = d1.getHours();
let minutes1 = d1.getMinutes();

if (hours1 > 12) {
    hours1 = hours1 - 12;
}

if (minutes1 < 10) {
    minutes1 = "0" + minutes1
}

document.querySelector('.clock').innerHTML = `${hours1}:${minutes1}`;

function getTime() {
    let d2 = new Date();
    let hours2 = d2.getHours();
    let minutes2 = d2.getMinutes();

    if (hours2 > 12) {
        hours2 = hours2 - 12;
    }

    if (minutes2 < 10) {
        minutes2 = "0" + minutes2
    }

    document.querySelector('.clock').innerHTML = `${hours2}:${minutes2}`;
    console.log(`${hours2}:${minutes2}`);
};

setInterval(getTime, 1000);

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
//Fastest way to display image
getImage();