$(document).ready(function() {

    $(".updateActivity").on("click", function (event) {
            event.preventDefault()

            const updateActivities = {
                morning_walk: $("#morning_walk").val(),
                midday_walk: $("#midday_walk").val(),
                late_walk: $("#late_walk").val(),
                notes: $("#notes").val().trim(),
                DogId: $("#dogId")
            }

            $.ajax("/api/activities/", {
                type: "PUT",
                data: updateActivities
            }).then(
                    location.reload()
                )
        })

})