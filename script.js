$(function () {
  var date = document.getElementById("currentDay");
  var currentDateTime = dayjs();
  var displayDate = currentDateTime.format("MMMM D, YYYY");
  var currentHour = currentDateTime.format("H");
  var currentTime = currentDateTime.format("Hmm");
  var userInput;
  var saveButton = document.querySelectorAll(".saveBtn");

  for (var i = 0; i < saveButton.length; i++) {
    saveButton[i].addEventListener("click", function (event) {
      var theID = $(this).parent().attr("id");
      var hour = document.getElementById(theID);
      userInput = hour.children[1].value;
      localStorage.setItem(theID, userInput);
    });
  }

  for (var x = 9; x < 18; x++) {
    var hour = document.getElementById(`hour-${x}`);
    if (currentHour < x) {
      hour.classList.add("future");
    } else if (currentHour == x) {
      hour.classList.add("present");
    } else if (currentHour > x) {
      hour.classList.add("past");
    }
  }

  for (var s = 9; s < 18; s++) {
    var message = localStorage.getItem(`hour-${s}`);
    document.getElementById(`hour-${s}`).children[1].value = message;
  }

  date.textContent = displayDate;
});
