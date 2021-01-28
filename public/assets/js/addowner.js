$(document).ready(function() {

    $(".addOwner").on("submit", function(event) {
        event.preventDefault()
        $(".addDogToOwner").removeClass("invisible")
        const ownerPhone = $("#owner_phone").val().trim() + "-" + $("#owner_phone2").val().trim() + "-" + $("#owner_phone3").val().trim()
        const newOwner = {
            owner_first_name: $("#owner_first_name").val().trim(),
            owner_last_name: $("#owner_last_name").val().trim(),
            owner_phone: ownerPhone,
            owner_email: $("#owner_email").val().trim(),
            alt_pickup_name: $("#alt_pickup_name").val().trim()
        }


        $.ajax("/api/owners", {
            type: "POST",
            data: newOwner
        }).then(
            function(res) {
                location.href = "/index"
            })
    })






})