$(document).ready(function() {
    $(".addNewDog").on("click", function(event) {
        event.preventDefault();
        location.href = "/adddog"
    })

    $(".addDogToOwner").on("click", function(event) {
        event.preventDefault();
        location.href = "/addDogToOwner"
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

    $(".quickCheckIn").on("click", function(event) {
        event.preventDefault()
        location.href = "/checkinout"
    })
    $(".updateActivities").on("click", function(event) {
        event.preventDefault()
        location.href = "/activities"
    })
    $(".signin").on("click", function(event) {
        event.preventDefault();
        location.href = "/index"
    })
    $(".register").on("click", function(event) {
        event.preventDefault();
        location.href = "/register"
    })
    $(".complete").on("click", function(event) {
        event.preventDefault();
        location.href = "/index"
    })


});