function init() {
    console.log("dd");
    var searchBtn = document.getElementById("search-btn");
    var inputTxt = document.getElementById("search");
    var APIKEY = '3d90c1ba80e1377a6db30bdf0b2f1488'
    searchBtn.addEventListener("click", () => {
        var inptTextValue = inputTxt.value;
        // console.log(inptTextValue);

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inptTextValue}&appid=${APIKEY}`)
            .then((response) => response.json())
            .then((data) => {
                var weathers = data.list;
                for (var i = 0; i < weathers.length; i+=8) {
                    console.log(weathers[i]);
                    var condition = weathers[i].weather[0].main;
                    var temperature = weathers[i].main.temp;
                    var humidity = weathers[i].humidity; 
                    var windSpeed = weathers[i].wind.speed;
                }

                
            });


        })
    // setTimeout(
    //     () => {
    //         console.log(inputTxt)
    //     }
    // , 1000); 


  

   

}

// 3d90c1ba80e1377a6db30bdf0b2f1488

// api.openweathermap.org/data/2.5/forecast?q=California&appid=3d90c1ba80e1377a6db30bdf0b2f1488

init()