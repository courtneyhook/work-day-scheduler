// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var currentDateTime = dayjs();
  var $9 = document.getElementById("hour-9");
  var $10 = document.getElementById("hour-10");
  var $11 = document.getElementById("hour-11");
  var $12 = document.getElementById("hour-12");
  var $1 = document.getElementById("hour-1");
  var $2 = document.getElementById("hour-2");
  var $3 = document.getElementById("hour-3");
  var $4 = document.getElementById("hour-4");
  var $5 = document.getElementById("hour-5");
  // var save9 = document.getElementById("save-9");
  // var save10 = document.getElementById("save-10");
  // var save11 = document.getElementById("save-11");
  // var save12 = document.getElementById("save-12");
  // var save1 = document.getElementById("save-1");
  // var save2 = document.getElementById("save-2");
  // var save3 = document.getElementById("save-3");
  // var save4 = document.getElementById("save-4");
  // var save5 = document.getElementById("save-5");
  var hourNumber;

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
  var currentHour = currentDateTime.format("h");
  console.log(currentHour);

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.

  var dateFormat = currentDateTime.format("dddd, MMMM D, YYYY");
  $9.addEventListener("click", function () {
    console.log("9 was clicked");
  });
  $10.addEventListener("click", function () {
    console.log("10 was clicked");
  });
  $11.addEventListener("click", function () {
    console.log("11 was clicked");
  });
  $12.addEventListener("click", function () {
    console.log("12 was clicked");
  });
  $1.addEventListener("click", function () {
    console.log("1 was clicked");
  });
  $2.addEventListener("click", function () {
    console.log("2 was clicked");
  });
  $3.addEventListener("click", function () {
    console.log("3 was clicked");
  });
  $4.addEventListener("click", function () {
    console.log("4 was clicked");
  });
  $5.addEventListener("click", function () {
    console.log("5 was clicked");
  });
  $("#currentDay").text(dateFormat);
});
