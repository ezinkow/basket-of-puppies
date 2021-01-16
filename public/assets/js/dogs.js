$(function () {
    $(".create-dog").on("submit", function (event) {
        event.preventDefault();

        var newDog = {
            dog_name: $("#dog").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/dogs", {
            type: "POST",
            data: newDog
        }).then(
            function (result) {
                // Reload the page
                location.reload();
            }
        );
    });
});