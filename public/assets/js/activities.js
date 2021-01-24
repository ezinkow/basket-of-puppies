$(document).ready(function () {

    $(".updateActivity").on("click", function (event) {
        event.preventDefault()
        getSelectedCheckBoxValues()
    })

    function getSelectedCheckBoxValues() {
        const morningWalkCheckboxes = document.querySelectorAll(`.morning_walk`);
        const middayWalkCheckboxes = document.querySelectorAll(`.midday_walk`);
        const lateWalkCheckboxes = document.querySelectorAll(`.late_walk`);
        const dogIds = document.querySelectorAll(`.dogId`);
        const meds = document.querySelectorAll(`.meds`);
        const notes = document.querySelectorAll(`.notes`);
        let values = [];
        let i = 0
        morningWalkCheckboxes.forEach((checkbox) => {

            console.log("hello")
            const updateActivities = {
                morning_walk: checkbox.checked,
                midday_walk: middayWalkCheckboxes[i].checked,
                late_walk: lateWalkCheckboxes[i].checked,
                DogId: dogIds[i].getAttribute("value"),

            }

            const updateDogs = {
                med_info: meds[i].textContent,
                notes: notes[i].value
            }

            $.ajax("/api/activities", {
                type: "POST",
                data: updateActivities
            }).then($.ajax("/api/dogs", {
                type: "POST",
                data: updateDogs
            })).then(function (data) {
                console.log("data", data)
            })
            i++
        })
        return values

    }


})