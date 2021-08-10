//Set todays date for the top of page using Moment
let todayDate = moment().format('dddd, MMM Do YYYY, h:mm:ss a');
$("#currentDay").html(todayDate);




// Color code blocks on start/document load
$(document).ready(function()  {
    //run color changing first
    classChange();
});


//Function to color code blocks by changing classes
function classChange () {
    
    var currentTime = moment().hours();

    //TESTING IF IT WORKS
    console.log("Current Time"  + currentTime);
       
// Comparing set time using IDs to time now so we can change classes based on this
    $(".description").each(function () {
        var setTime = parseInt($(this).attr("id"));
        console.log(setTime);

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


//When I click on the save button - It takes the info from input and hour then saves to LocalStorage
$(".saveBtn").click(function() {

//Whats wrote inside the timeblocks
    blockInput = $(this).siblings(".description").val().trim();
    console.log(blockInput);
//The .time hardcoded inside
    blockTime = $(this).parent().attr("id");
    console.log(blockTime);

    //Save to localstorage
    localStorage.setItem(blockInput, JSON.stringify(blockInput));
    localStorage.setItem(blockTime, JSON.stringify(blockTime));


    //Still working on getting localstorage info - Not working.
    localStorage.getItem("blockInput");
    localStorage.getItem("blockTime");


});

