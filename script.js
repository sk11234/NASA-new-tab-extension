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