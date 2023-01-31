// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var dayTime = dayjs().hour();
dayTime = 13
console.log(dayTime)

$(function () {

  var currentDay = $('#currentDate');
  var currentDate = dayjs().format('MMM D, YYYY')
  $( "#datepicker" ).datepicker();
  currentDay.text(currentDate);
  var timeBlocks = $('time-block');
  // console.log('timeBlocks', timeBlocks);
  $('.time-block').each(function(){
    console.log(this)
    var eachTime = $(this).attr('id').substring(5);
    console.log(eachTime);
    $(this).removeClass('past');
    $(this).removeClass('future');
    $(this).removeClass('present');
    if (dayTime < eachTime){
      console.log('lessthan');
      $(this).addClass('future');
    }
    else if (dayTime > eachTime){
      console.log('greater than');
      $(this).addClass('past');
    }
    else if (dayTime = eachTime) { 
      console.log('equal to')
      $(this).addClass('present');
    }
  });


  function changeClass (jQueryObj){
    // document.getElementsByClassName("future present").className = "past";
    // $('#future').addClass('past');
    $(jQueryObj).addClass('past');
  }

  
  
  


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

