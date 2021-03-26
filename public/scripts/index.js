// Set variables and localStorage values

let screen = 0;
let current_location = localStorage.getItem("prs-current-location");
let current_destination = localStorage.getItem("prs-current-destination");

$("#the-camp").hide();
$("#the-map").hide();
$("#localstorage-name").hide();
$("#the-road").hide();
$("#achievement-house").hide();
$("#the-farm").hide();
$("#the-city").hide();
$("#the-houses").hide();
$("#the-prison").hide();

fetchCamp();