$(document).ready(function() {
    $(".addNewDog").on("click", function(event) {
        event.preventDefault();
        location.href = "/adddog"
    })

    $(".addNewOwner").on("click", function(event) {
        event.preventDefault();
        location.href = "/addowner"
    })

    $(".viewAllOwners").on("click", function(event) {
        event.preventDefault();
        location.href = "/owners"
    })

    $(".viewAllDogs").on("click", function(event) {
        event.preventDefault();
        location.href = "/dogs"
    })

    $(".updateDogActivity").on("click", function(event) {
        event.preventDefault();
        location.href = "/activities"
    })

    $(".addDogToOwner").on("click", function(event) {
        event.preventDefault()
        location.href = "/adddogtoowner"
    })

    $(".quickCheckIn").on("click", function(event) {
        event.preventDefault()
        location.href = "/dogs"
    })
    $(".updateActivities").on("click", function(event) {
        event.preventDefault()
        location.href = "/activities"
    })

    $(".checkIn").on("click", checkInDog)

    function checkInDog() {
        var id = $(this).data("id");
            //create key value pair for check in true
        var checkInTrue = true;
        $.ajax("/api/dogs/" + id, {
            method: "PUT",
            data: {
                check_in: checkInTrue,
                id
            }
        })
    }


    
});