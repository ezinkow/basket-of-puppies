$(document).ready(function () {

    $(".addOwner").on("submit", function (event) {
        event.preventDefault()
        const newOwner = {
            owner_name: $("#owner_name").val().trim(),
            owner_phone: $("#owner_phone").val().trim(),
            owner_email: $("#owner_email").val().trim(),
            alt_pickup_name: $("#alt_pickup_name").val().trim()
        }


        $.ajax("/api/owners", {
            type: "POST",
            data: newOwner
        }).then(
            function (res) {
                location.href = "/"
            })
    })
})