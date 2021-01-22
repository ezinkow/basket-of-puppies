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