const { on } = require("nodemon");

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
