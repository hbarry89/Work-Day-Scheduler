//------------Pseudo Code provided by TA in class-------------
// a whole day (9am - 5pm) = 9 rows/3 col in each (look at bootstrap)
            // first column: time
            // second : description = text area
            // 3rd: button -> saves to local storage 
    // create HTML for time blocks
    // event listener for each

// get current time

// 3rd button to save to storage
    // event listener (for the buttons on each row)
    // saves text to local storage 
    // load any saved data from local storage (getItem)
            // look at html text area for the description 
    

    
// current date is coming from Day.js library --- will need the CDN
    // paste just above the js link at the bottom of html
    // read the documentation to figure out how to manipulate it
        // can be used to update the hours

// background color needs to change based on past/present/future
    // if currentHour > timeBlock (set class to past = grey background)
            // else if currentHour < timeBlock (set class to future = green) background
                // else (set class it as present = red background)
//----------------------End of Pseudo Code---------------------------

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
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
//});

//This variable declares the current date from the dayjs library with adjusted format
var dayMonth = dayjs().format('dddd, MMMM DD');
var currentHour = dayjs().hour() // gets current hour

//This will dispalay the current date on the webpage
$('#currentDay').text(dayMonth);

//This is to connect to local storage function
$(document).ready(function() {

$('.time-block').each(function(){ //This targets each time block class in the HTML file
  var timeNow = parseInt(this.id.split("-")[1]) //Variable is declared in order to parse the div id to target only the integers each row for the time bloacks:(past, present, future) for the if statemet
  //If statement to change class in HTML file based on conditionals below:
  if (timeNow < currentHour) { //If time now is less than the current hour assign a class with past to parent div in the HTML file to the row to turn color to gray according to css file class
    this.classList.add("past");
    this.classList.remove("present");
    this.classList.remove("future");
  } else if (timeNow == currentHour) { //If time now matches the current hour assign a class with present to the parent div in the HTML file to the row to turn color to red according to css file class
    this.classList.add("present");
    this.classList.remove("past");
    this.classList.remove("future");
  } else { //If time now is greater than the current hour assign a class with future to the parent div in the HTML file to the row to turn color to green according to css file class
    this.classList.add("future");
    this.classList.remove("present");
    this.classList.remove("past");
  }
})

//Event lsitener (on) for each save button
$('.saveBtn').on('click', function () {
  var value = $(this).siblings('.description').val(); //This this function targets the sibling with "description" class in HTML file and input value
  var key = $(this).parent().attr('id'); //This targets the div parent in the HTML file by its id attribute.

  //This is for the buttons to save into the local storage when user inserts input and clicks save
  localStorage.setItem(key, value);
  localStorage.getItem(value);
});

//This targets each row by id on the HTML file to get the value and assign it to corresponding local storage.
document.querySelector('#row9').value = localStorage.getItem('hour-9');
document.querySelector('#row10').value = localStorage.getItem('hour-10');
document.querySelector('#row11').value = localStorage.getItem('hour-11');
document.querySelector('#row12').value = localStorage.getItem('hour-12');
document.querySelector('#row13').value = localStorage.getItem('hour-13');
document.querySelector('#row14').value = localStorage.getItem('hour-14');
document.querySelector('#row15').value = localStorage.getItem('hour-15');
document.querySelector('#row16').value = localStorage.getItem('hour-16');
document.querySelector('#row17').value = localStorage.getItem('hour-17');
});