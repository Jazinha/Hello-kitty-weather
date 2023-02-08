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
                var eachDays = Array();
                for (var i = 0; i < weathers.length; i+=8) {
                    console.log(weathers[i]);
                    var temp = {
                        condition : weathers[i].weather[0].main,
                        temperature : weathers[i].main.temp,
                        humidity : weathers[i].main.humidity,
                        windSpeed : weathers[i].wind.speed,
                        icon : weathers[i].weather[0].icon,
                    };
                    eachDays.push(temp);
                    
                    var conditionDisplay = ``;
                    // console.log(condition);
                    // console.log(temperature);
                    // console.log(humidity);
                    // console.log(windSpeed);
                }
                
                var currentDayCity = document.getElementById("city");
                var currentIcon = document.getElementById("icon");
                currentDayCity.innerText = inptTextValue;
                currentIcon.src = "http://openweathermap.org/img/wn/10d@2x.png"
                // for (var i = 0; i < 5; i+=1)
                // {
                //     var 
                // }


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