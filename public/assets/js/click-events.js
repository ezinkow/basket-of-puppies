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
    $(".signin").on("click", function (event) {
        event.preventDefault();
        location.href = "/index"
    })
    $(".register").on("click", function (event) {
        event.preventDefault();
        location.href = "/register"
    })
    $(".complete").on("click", function (event) {
        event.preventDefault();
        location.href = "/"
    })

    $(".checkIn").on("click", checkInDog)
    $(".checkOut").on("click", checkOutDog)

    function checkInDog() {
        var id = $(this).data("id");
        const newActivityRow = {
            DogId: id
        }
        console.log("clicked check-in button")
        var id = $(this).data("id");
        $.ajax("/api/dogs/" + id, {
            method: "PUT",
            data: {
                check_in: true,
                id
            }
        }).then(
            $.ajax("/api/activities", {
                type: "POST",
                data: newActivityRow
            })
        );
    }
    //does a put request 
    function checkOutDog() {
        var id = $(this).data("id");
        const activityRowToDelete = {
            DogId: id
        }
        console.log("clicked check-out button")
        var id = $(this).data("id");
        $.ajax("/api/dogs/" + id, {
            method: "PUT",
            data: {
                check_in: false,
                id
            }
        }).then(
            $.ajax("/api/activities", {
                type: "DELETE",
                data: activityRowToDelete
            })
        );
    }


});