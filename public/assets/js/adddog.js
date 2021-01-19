$(document).ready(function () {

    $(".addDog").on("submit", function (event) {
        event.preventDefault()
        console.log("hello")
        const newOwner = {
            owner_name: $("#owner_name").val().trim(),
            owner_phone: $("#owner_phone").val().trim(),
            owner_email: $("#owner_email").val().trim(),
            alt_pickup_name: $("#alt_pickup_name").val().trim()
        }
        const newDog = {
            dog_name: $("#dog_name").val().trim(),
            shots: $("#shots").val().trim(),
            meds: $("#meds").val().trim(),
        }

        console.log(newDog, newOwner)


        $.ajax("/api/owners", {
            type: "POST",
            data: newOwner
        }).then(
            function (res) {
                location.reload()
            })
        $.ajax("/api/dogs", {
            type: "POST",
            data: newDog
        }).then(
            function (res) {
                location.reload()
            })
    })




})