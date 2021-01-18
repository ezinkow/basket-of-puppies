$(document).ready(function() {
    $(".addNewDog").on("click", function (event) {
        event.preventDefault();
        console.log("hi")
        location.href = "/adddog"
    })

    
        






    //     var newDog = {
    //         dog_name: $("#dog").val().trim(),
    //     };

    //     // Send the POST request.
    //     $.ajax("/api/dogs", {
    //         type: "POST",
    //         data: newDog
    //     }).then(
    //         function (result) {
    //             // Reload the page
    //             location.reload();
    //         }
});