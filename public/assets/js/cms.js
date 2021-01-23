$(document).ready(function () {
    function updateDog(dog) {

        $(".updateActivity").on("click", function (event) {
            event.preventDefault()

            var id = $(this).data("id");


            $.ajax("/api/activities/" + id, {
                type: "PUT"
            })
                .then(
                    location.reload()
                )
        })
    }

    // $("#checkbox").text($("#shots").val())

    // $("#shots").on("change", function() {
    //     if ($(this).is(":checked")) {
    //         $(this).attr("value", "true")
    //     } else {
    //         $(this).attr("value", "false")
    //     }
    //     $("#checkbox").text($("#shots").val())
    // })

    // Display today's date //
    //try moment.js
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var day = weekday[d.getDay()];
    var month = month[d.getMonth()]
    var date = d.getDate();
    var year = d.getFullYear()
    var today = "Today is: " + day + ", " + month + " " + date + ", " + year


    $("#date").html(today)



    //===========//

    $(".weatherBtn").on("click", function displayWeather() {
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=da5a0b2df3ad3a18dae3207cc7ca31bf";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            // creates a div to hold the weather
            var weatherOutput = $("<div>")
            var temperature = response.main.temp.toFixed(2)
            weatherOutput.text(temperature + " °F")
            $("#weather").append(weatherOutput)
        })

    })

})