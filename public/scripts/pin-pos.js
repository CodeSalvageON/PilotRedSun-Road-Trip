// An old pin position script that we aren't going to be using

const pin_pos = document.body.clientWidth - document.getElementById("the-map").clientWidth;

document.getElementById("the-camp-pin").style.left = String(-715 + pin_pos / 4) + "px";

console.log(pin_pos);