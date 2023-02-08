function addHistory(city) {
    cities = Array();
    var oldCities = JSON.parse(localStorage.getItem("cities"));
    
    if (oldCities == null)
    {
        localStorage.setItem("cities", toString(city));

    }
    else
    {
        console.log(oldCities);

    }
    // var cityNames = JSON.stringify(names);
    // var storedNames = JSON.parse(localStorage.names);  
    // localStorage.setItem("cities")
    // document.getElementById("#search-btn").click(); 
}

function fetchWeather(inputTxt, APIKEY)
{
    var searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", () => {
        var inptTextValue = inputTxt.value;
        // console.log(inptTextValue);

        addHistory(inptTextValue);
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inptTextValue}&appid=${APIKEY}`)
            .then((response) => response.json())
            .then((data) => {
                var weathers = data.list;
                var eachDays = Array();
                for (var i = 0; i < weathers.length; i += 8) {
                    // console.log(weathers[i]);
                    eachDays.push({
                        condition: weathers[i].weather[0].main,
                        temperature: weathers[i].main.temp,
                        humidity: weathers[i].main.humidity,
                        windSpeed: weathers[i].wind.speed,
                        icon: weathers[i].weather[0].icon,
                        date: weathers[i].dt_txt
                    });

                    var conditionDisplay = ``;
                }
                
                // console.log(eachDays);

                var currentDayCity = document.getElementById("city");
                var currentIcon = document.getElementById("icon");
                var currentCondition = document.getElementById("condition");
                var currentTemperature = document.getElementById("temperature");
                var currentHumidity = document.getElementById("humidity");
                var currentWindSpeed = document.getElementById("wind-speed");
                
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
                    
                    icon.src = `http://openweathermap.org/img/wn/${eachDays[i-1].icon}.png`;
                    day.innerHTML = " (" + eachDays[i-1].date + ") ";
                    condition.innerHTML = eachDays[i-1].condition;
                    day_temp.innerHTML = eachDays[i-1].temperature;
                    humidity.innerHTML = eachDays[i-1].humidity;
                    windSpeed.innerHTML = eachDays[i-1].windSpeed;
                }

            });
        })
}

function init() {
    var inputTxt = document.getElementById("search");
    var APIKEY = '3d90c1ba80e1377a6db30bdf0b2f1488';
    
    fetchWeather(inputTxt, APIKEY);
    
    
  

   

}

// 3d90c1ba80e1377a6db30bdf0b2f1488

// api.openweathermap.org/data/2.5/forecast?q=California&appid=3d90c1ba80e1377a6db30bdf0b2f1488

init()