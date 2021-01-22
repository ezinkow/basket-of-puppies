$(document).ready(function() {
    $(".addNewDog").on("click", function (event) {
        event.preventDefault();
        location.href = "/adddog"
    })
    $(".addNewOwner").on("click", function (event) {
        event.preventDefault();
        location.href = "/addowner"
    })
    $(".viewAllOwners").on("click", function (event) {
        event.preventDefault();
        location.href = "/owners"
    })
    $(".viewAllDogs").on("click", function (event) {
        event.preventDefault();
        location.href = "/dogs"
    })
    $(".updateDogActivity").on("click", function (event) {
        event.preventDefault();
        location.href = "/activities"
    })

    
    





});