const showTime = () => {
  // || DEFAULT DATE PARAMETERS:
  // || DATE OBJECT
  const dateObj = new Date();

  // || GETTING SECONDS
  let defaultSeconds = dateObj.getSeconds();

  // || GETTING MINUTES
  let defaultMinute = dateObj.getMinutes();

  // g||  etting hour
  let hour = dateObj.getHours();

  // || GETTING DAY
  const defaultday = dateObj.getDay();

  // || GETTING DATE
  const defaultDate = dateObj.getDate();

  // || GETTING MONTH
  const defaultMonth = dateObj.getMonth();

  // || GETTING YEAR
  const defaultYear = dateObj.getFullYear();

  // || WEEKS ARRAY
  const daysOfTheweek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // || MONTHS ARRAY
  let monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // || PROCESSED DATE PARAMETERS:
  // || MONTH
  const month = monthArray[defaultMonth];

  // || DAY
  const day = daysOfTheweek[defaultday];

  // || AM/PM
  let period = hour < 12 ? "Am" : "Pm";

  const clockDiv = document.getElementById("clock");
  const dateDiv = document.getElementById("date");
  const periodOfTheDay = document.querySelector(".period");
  const dayContainer = document.querySelector(".day");
  const dateElement = document.querySelector(".date");

  // || ADDING A PREFIXED ZERO TO THE TIME PARAMETER FOR UNIFORM DISPLAY OF DIGITS AT ALL TIMES
  hour < 10 ? (hour = "0" + hour) : "";
  defaultMinute < 10 ? (defaultMinute = "0" + defaultMinute) : "";
  defaultSeconds < 10 ? (defaultSeconds = "0" + defaultSeconds) : "";
  hour > 12 ? (hour = hour - 12) : "";
  hour == 00 ? (hour = 12) : "";

  // || PROCESSED TIME_STRING
  let timeString = `${hour}:${defaultMinute}:${defaultSeconds}`;

  // || PROCESSED DATE_STRING
  const dateString = `${day} ${month} ${defaultDate}, ${defaultYear}`;

  // || DISPLAYING TIME_STRING IN THE CLOCK DIV
  clockDiv.innerHTML = timeString;

  //  DISPLAYING PERIOD-OF-THE-DAY
  periodOfTheDay.innerText = period;

  // || DIS[LAYING DAY
  dayContainer.innerText = day;

  // || DISPLAYING DATE
  dateElement.innerHTML = `${month} ${defaultDate}, <br /> ${defaultYear}`;

  //   || SIMULATING THE showTime function AFTER EVERY 1 SECOND
  setInterval(showTime, 1000);
};
showTime();

// || TOGGLER
const toggle = document.querySelector(".toggle-input");
const initialState = localStorage.getItem("toggleState") == "true";
toggle.checked = initialState;

toggle.addEventListener("change", function () {
  localStorage.setItem("toggleState", toggle.checked);
});

document
  .querySelector(".toggle-wrapper")
  .addEventListener("click", () => document.body.classList.toggle("dark-mode"));
