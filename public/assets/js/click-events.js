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
    $(".addDogToOwner").on("click", function (event) {
        event.preventDefault()
        location.href = "/adddogtoowner"
        
    })

    $(".quickCheckIn").on("click", function (event) {
        event.preventDefault()
        location.href = "/dogs"

    })

    $(".checkIn").on("click", updateDog)

    function updateDog(dog) {
        $.ajax({
            method: "PUT",
            url: "/api/dogs/",
            data: dog
        })
        console.log("dogssssss", dog)
                .then(
                    location.reload()
                )
        }
    

    
    





});