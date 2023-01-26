
$(document).ready(function(){
// set up timer
  setInterval(function(){
    todaysDate = dayjs().format("MMM D, YYYY, hh:mm:ss");
    $("#currentDay").text(todaysDate);
  }, 1000);

//set up save button for saving time and text
  $(".saveBtn").on("click", function(){
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })
})

// save data from local storage for each hour
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

function timeTracker(){
  var currentHour = dayjs().hour();

  $(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id"));
    console.log(blockHour, currentHour)
// compare the current time with blocktime
    if(currentHour > blockHour){
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
    else if (currentHour === blockHour){
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    }
    else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  })
};
timeTracker();