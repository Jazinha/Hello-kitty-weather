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
                for (var i = 0; i < weathers.length; i += 8) {
                    console.log(weathers[i]);
                    eachDays.push({
                        condition: weathers[i].weather[0].main,
                        temperature: weathers[i].main.temp,
                        humidity: weathers[i].main.humidity,
                        windSpeed: weathers[i].wind.speed,
                        icon: weathers[i].weather[0].icon,
                        date: weathers[i].dt_txt
                    });

                    var conditionDisplay = ``;
                    // console.log(condition);
                    // console.log(temperature);
                    // console.log(humidity);
                    // console.log(windSpeed);
                }
                
                console.log(eachDays);

                var currentDayCity = document.getElementById("city");
                var currentIcon = document.getElementById("icon");
                var currentCondition = document.getElementById("condition");
                var currentTemperature = document.getElementById("temperature");
                var currentHumidity = document.getElementById("humidity");
                var currentWindSpeed = document.getElementById("wind-speed");
                // var currentDayText = document.getElementById("dt_txt").innerHTML;
                
                currentDayCity.innerText = inptTextValue + " (" + eachDays[0].date + ") ";
                currentIcon.src = `http://openweathermap.org/img/wn/${eachDays[0].icon}@2x.png`;

                currentTemperature.innerHTML = eachDays[0].temperature;
                currentHumidity.innerHTML = eachDays[0].humidity;
                currentCondition.innerHTML = eachDays[0].condition;
                currentWindSpeed.innerHTML = eachDays[0].windSpeed;
               
               
                for (var i = 1; i < 6; i+=1)
                {
                    var icon = document.getElementById(`day-${i}-icon`);
                    var day = document.getElementById(`day-${i}-date`);
                    var condition = document.getElementById(`day-${i}-conditions`);
                    var day_temp = document.getElementById(`day-${i}-temp`);
                    var humidity = document.getElementById(`day-${i}-humidity`);
                    var windSpeed = document.getElementById(`day-${i}-wind`);
                    
                    icon.src = `http://openweathermap.org/img/wn/${eachDays[i].icon}.png`;
                    day.innerHTML = " (" + eachDays[i].date + ") ";
                    condition.innerHTML = eachDays[i].condition;
                    day_temp.innerHTML = eachDays[i].temperature;
                    humidity.innerHTML = eachDays[i].humidity;
                    windSpeed.innerHTML = eachDays[i].windSpeed;
                }

/**div class="row d-flex align-items-center py-3">
                  <div class="col-2 d-flex justify-content-center">
                    <img id="day-1-icon" class="">
                  </div>
                  <div class="col-3 pr-0">
                    <p id="day-1-date" class="h5 text-info"></p>
                    <p id="day-1-year" class="h6 font-weight-light m-0"></p>
                  </div>
                  <div class="col-7">
                    <p id="day-1-conditions" class="h5 text-info"></p>
                    <p class="h6 font-weight-light m-0">
                      <span id="day-1-temp"></span> / 
                      <span id="day-1-humidity"></span>
                    </p>
                  </div>
                </div>
   */

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