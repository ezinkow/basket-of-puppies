$(document).ready(function() {


    $(".addDog").on("submit", function(event) {
        event.preventDefault()

        const newDog = {
            dog_name: $("#dog_name").val().trim(),
            meds: $("#meds").val().trim(),
            shots: $("#shots").val().trim(),
            check_in: false,
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

    $(".addDogToOwner").on("submit", function(event) {
        event.preventDefault()
        location.href = "/adddogtoowner"
        const newDogToOwner = {
            dog_name: $("#dog_name").val().trim(),
            meds: $("#meds").val().trim(),
            shots: $("#shots").val().trim(),
            check_in: false,
            notes: $("#notes").val().trim(),
            OwnerId: $("#owner-select").val().trim()
        }
        console.log(newDogToOwner)

        $.ajax("/api/dogs", {
            type: "POST",
            data: newDogToOwner
        }).then(
            function(res) {
                location.href = "/"
            })
    })

})