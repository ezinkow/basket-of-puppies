$(document).ready(function () {

    // Display today's date //

    var update = function () {
        date = moment(new Date())
        today.html(date.format('dddd, MMMM Do, YYYY'));
        time.html(date.format('h:mm a'))
    };

    $(document).ready(function () {
        today = $('#date')
        time = $('#time')
        update();
        setInterval(update, 1000);
    });

    //Display weather

    $(".weatherBtn").on("click", function displayWeather() {
        $("#weather").removeClass("hide")
        $("#weather").html("")
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=da5a0b2df3ad3a18dae3207cc7ca31bf";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // creates a div to hold the weather
            var tempOutput = $("<div>")
            var conditionsOutput = $("<div>")
            var temperature = response.main.temp.toFixed(0)
            var conditions = response.weather[0].description
            tempOutput.text(temperature + " °F")
            conditionsOutput.text(conditions)
            $("#weather").append(tempOutput)
            $("#weather").append(conditionsOutput)
        })

    })

})