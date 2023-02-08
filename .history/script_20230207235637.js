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
                console.log(data['list']);
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