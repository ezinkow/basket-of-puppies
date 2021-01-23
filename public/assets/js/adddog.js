$(document).ready(function() {


    $(".addDog").on("submit", function(event) {
        event.preventDefault()

        const newDog = {
            dog_name: $("#dog_name").val().trim(),
            shots: $("#shots").val().trim(),
            meds: $("#meds").val().trim(),
            notes: $("#notes").val().trim(),
            OwnerId: $("#owner-select").val().trim()
        }
        console.log(newDog)

        $.ajax("/api/dogs", {
            type: "POST",
            data: newDog
        }).then(
            function(res) {
                location.href = "/"
            })
    })



})