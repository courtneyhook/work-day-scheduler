// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var date = document.getElementById("currentDay");
  var currentDateTime = dayjs();
  var displayDate = currentDateTime.format("MMMM D, YYYY");
  var currentHour = currentDateTime.format("H");
  var currentTime = currentDateTime.format("Hmm");
  var userInput9;
  var userInput10;

  function updateTime() {
    displayDate = currentDateTime.format("MMMM D, YYYY");
    currentHour = currentDateTime.format("H");
    currentTime = currentDateTime.format("Hmm");
    if (currentTime == "00") {
      localStorage.clear();
    }
  }

  setInterval(updateTime, 1000);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var hour9 = document.getElementById("hour-9");
  var hour10 = document.getElementById("hour-10");
  var hour11 = document.getElementById("hour-11");
  var hour12 = document.getElementById("hour-12");
  var hour13 = document.getElementById("hour-13");
  var hour14 = document.getElementById("hour-14");
  var hour15 = document.getElementById("hour-15");
  var hour16 = document.getElementById("hour-16");
  var hour17 = document.getElementById("hour-17");

  hour9.children[2].addEventListener("click", function () {
    userInput9 = hour9.children[1].value;
    localStorage.setItem("hour9", userInput9);
  });
  hour10.children[2].addEventListener("click", function () {
    var userInput10 = hour10.children[1].value;
    localStorage.setItem("hour10", userInput10);
  });
  hour11.children[2].addEventListener("click", function () {
    var userInput11 = hour11.children[1].value;
    localStorage.setItem("hour11", userInput11);
  });
  hour12.children[2].addEventListener("click", function () {
    var userInput12 = hour12.children[1].value;
    localStorage.setItem("hour12", userInput12);
  });
  hour13.children[2].addEventListener("click", function () {
    var userInput13 = hour13.children[1].value;
    localStorage.setItem("hour13", userInput13);
  });
  hour14.children[2].addEventListener("click", function () {
    var userInput14 = hour14.children[1].value;
    localStorage.setItem("hour14", userInput14);
  });
  hour15.children[2].addEventListener("click", function () {
    var userInput15 = hour15.children[1].value;
    localStorage.setItem("hour15", userInput15);
  });
  hour16.children[2].addEventListener("click", function () {
    var userInput16 = hour16.children[1].value;
    localStorage.setItem("hour16", userInput16);
  });
  hour17.children[2].addEventListener("click", function () {
    var userInput17 = hour17.children[1].value;
    localStorage.setItem("hour17", userInput17);
  });

  // TODO: COMPLETE Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  for (var x = 9; x < 18; x++) {
    var hour = document.getElementById(`hour-${x}`);
    if (currentHour < x) {
      hour.classList.add("future");
    } else if (currentHour === x) {
      hour.classList.add("present");
    } else if (currentHour > x) {
      hour.classList.add("past");
    }
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  hour9.children[1].value = localStorage.getItem("hour9");
  hour10.children[1].value = localStorage.getItem("hour10");
  hour11.children[1].value = localStorage.getItem("hour11");
  hour12.children[1].value = localStorage.getItem("hour12");
  hour13.children[1].value = localStorage.getItem("hour13");
  hour14.children[1].value = localStorage.getItem("hour14");
  hour15.children[1].value = localStorage.getItem("hour15");
  hour16.children[1].value = localStorage.getItem("hour16");
  hour17.children[1].value = localStorage.getItem("hour17");

  // TODO: COMPLETE Add code to display the current date in the header of the page.
  date.textContent = displayDate;
});
