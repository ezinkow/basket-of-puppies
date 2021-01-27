$(document).ready(function () {

    //click events for below functions
    $(".checkIn").on("click", checkInDog)
    $(".checkOut").on("click", checkOutDog)
    $(".deleteDog").on("click", deleteDog)

    //button functions

    function checkInDog() {
        var id = $(this).data("id");
        const newActivityRow = {
            DogId: id,
        }

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
        
        var id = $(this).data("id")
        $.ajax("/api/dogs/" + id, {
            method: "PUT",
            data: {
                check_in: false,
                id
            }
        }).then(
            $.ajax("/api/activities/" + id, {
                type: "DELETE",
                data: activityRowToDelete
            })
        );
    }

    function deleteDog() {
        var id = $(this).data("id");

        const activityRowToDelete = {
            DogId: id
        }
        
        var id = $(this).data("id");
        $.ajax("/api/dogs/" + id, {
            method: "DELETE",
            data: {
                id
            }
        }).then(
            $.ajax("/api/activities/" + id, {
                type: "DELETE",
                data: activityRowToDelete
            })
        );
    }
})