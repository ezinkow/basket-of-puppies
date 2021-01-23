$(document).ready(function () {

    $(".updateActivity").on("click", function (event) {
        event.preventDefault()
        var id = $(this).data("id");
        console.log("hello")
        const updateActivities = {
            morning_walk: $("#morning_walk").val(),
            midday_walk: $("#midday_walk").val(),
            late_walk: $("#late_walk").val(),
            notes: $("#notes").val().trim(),
            id
        }

        $.ajax("/api/activities/", {
            type: "PUT",
            data: updateActivities,
            processData: false,
            contentType: false,
        }).then(
            location.reload()
        )
    })

})