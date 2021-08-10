//Set todays date for the top of page using Moment
let todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);




// Color code blocks on start/document load
$(document).ready(function()  {
    //run color changing first
    classChange();
});

function classChange () {
    
    var currentTime = moment().hours();

    //TESTING IF IT WORKS
    console.log("Current Time"  + currentTime);
       
// Comparing set time to now so we can change classes based on this
    $(".description").each(function () {
        var setTime = parseInt($(this).attr("id"));
        console.log(scheduledTime);

        if (currentTime > setTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime < setTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}