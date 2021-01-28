$(document).ready(function() {

    $(".updateActivity").click(function(event) {
        event.preventDefault()
        getSelectedCheckBoxValues()
        location.href = "/index"
    })

    function getSelectedCheckBoxValues() {
        const morningWalkCheckboxes = document.querySelectorAll(".morning_walk");
        const middayWalkCheckboxes = document.querySelectorAll(".midday_walk");
        const lateWalkCheckboxes = document.querySelectorAll(".late_walk");
        const dogIds = document.querySelectorAll(".dogId");
        const meds = document.querySelectorAll(".meds");
        const notes = document.querySelectorAll(".notes");
        let values = [];
        let i = 0

        morningWalkCheckboxes.forEach((checkbox) => {
            var id = dogIds[i].getAttribute("value")

            const updateActivities = {
                morning_walk: checkbox.checked,
                midday_walk: middayWalkCheckboxes[i].checked,
                late_walk: lateWalkCheckboxes[i].checked,
                DogId: dogIds[i].getAttribute("value"),
            }

            $.ajax("/api/activities/" + id, {
                type: "PUT",
                data: updateActivities,
            })
            i++
        })
        return values

    }

})