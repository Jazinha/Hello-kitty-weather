function init() {
    var searchBtn = document.getElementById("search-btn");
    var inputTxt = document.getElementById("search").value;
    var APIKEY = '3d90c1ba80e1377a6db30bdf0b2f1488'

    console.log(inputTxt);

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputTxt}&appid=${APIKEY}`)
        .then((response) => response.json())
        .then((data) => {

        });

}

// 3d90c1ba80e1377a6db30bdf0b2f1488

// api.openweathermap.org/data/2.5/forecast?q=California&appid=3d90c1ba80e1377a6db30bdf0b2f1488

init()