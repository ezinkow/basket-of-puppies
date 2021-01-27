$(document).ready(function() {


    $(".addDog").on("submit", function(event) {
        event.preventDefault()

        const newDog = {
            dog_name: $("#dog_name").val().trim(),
            meds: $("#meds").val().trim(),
            shots: $("#shots").val().trim(),
            notes: $("#notes").val().trim(),
            check_in: false,
            OwnerId: $("#owner-select").val().trim()
        }

        $.ajax("/api/dogs", {
            type: "POST",
            data: newDog
        }).then(
            function(res) {
                location.href = "/"
            })
    })

    $(".addDogToOwnerForm").on("submit", function(event) {
        event.preventDefault()

        const newDog = {
            dog_name: $("#dog_name").val().trim(),
            meds: $("#meds").val().trim(),
            shots: $("#shots").val().trim(),
            notes: $("#notes").val().trim(),
            check_in: false,
            OwnerId: $("#owner-select").val().trim()
        }

        $.ajax("/api/dogs", {
            type: "POST",
            data: newDog
        }).then(
            function(res) {
                location.href = "/"
            })
    })

})