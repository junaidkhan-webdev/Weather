
    
    function wather(params) {
        let input = document.querySelector(".border-0").value
        let text = document.querySelector(".fs-1")
        let time = document.querySelector(".time")
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=096a887dbe3d250e7c0ceda47a8dbe43&units=metric`)
    .then(function (response) {
        text.innerHTML = `${response.data.main.temp } °C`
        // time.innerHTML = response.data.weather.description


        console.log(response)
    })
    .catch(function (error) {

        console.log(error);
    })
    }

    


        