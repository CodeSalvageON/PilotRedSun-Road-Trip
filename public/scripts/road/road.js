// Road Control

// Render the world
const road = document.getElementById("road-canvas");
const road_render = road.getContext('2d');

// Speed for the car 
let speed = 0;

// X and Y values for sprites
let road_sprite_x = 80;
const road_sprite_y = 550;

const dashboard_sprite_x = 0;
const dashboard_sprite_y = 380;

let road_destination_x = 300;
let road_destination_y = 530;

// Width and Height values for sprites 
let road_destination_width = 51.27
let road_destination_height = 21.6

// Render sprites
const road_sprite = new Image();
road_sprite.onload = function () {
  road_render.drawImage(road_sprite, road_sprite_x, road_sprite_y);

  console.log("Road Sprite rendered at coordinates " + road_sprite_x + ", " + road_sprite_y);
  console.log("Road Sprite width and height: " + road_sprite.width + ", " + road_sprite.height);
}
road_sprite.src = "https://media.discordapp.net/attachments/772064957793435678/811748095728943124/image-removebg-preview.png";

const dashboard_sprite = new Image();
dashboard_sprite.onload = function () {
  road_render.drawImage(dashboard_sprite, dashboard_sprite_x, dashboard_sprite_y);

  console.log("Dashboard Sprite rendered at coordinates " + dashboard_sprite_x + ", " + dashboard_sprite_y);
  console.log("Dashboard Sprite width and height: " + dashboard_sprite.width + ", " + dashboard_sprite.height);
}
dashboard_sprite.src = "https://media.discordapp.net/attachments/772064957793435678/811751585683996742/dashboard-removebg-preview.png";

// Render the destination from localStorage
const road_destination = new Image();
road_destination.onload = function () {
  road_render.drawImage(road_destination, road_destination_x, road_destination_y, road_destination.width / 15, road_destination.height / 15);

  console.log("Road Destination rendered at coordinates " + road_destination_x + ", " + road_destination_y);
  console.log("Road Destination width and height: " + road_destination.width + ", " + road_destination.height);
}

function renderRoadDestination () {
  road_destination_width = 51.27
  road_destination_height = 21.6

  road_destination_x = 300;
  road_destination_y = 530;

  speed = 0;

  road_render.clearRect(0, 0, road.width, road.height);

  simulateKeyPress("w");

  road_render.drawImage(road_sprite, road_sprite_x, road_sprite_y);

  if (current_destination === "the-camp") {
    road_destination.src = "https://media.discordapp.net/attachments/772064957793435678/811956430575894588/camp_destination-removebg-preview.png";
  }

  else if (current_destination === "achievement-house") {
    road_destination.src = "https://media.discordapp.net/attachments/772064957793435678/814121166797012992/achievement_house_1-removebg-preview.png";
  }

  else if (current_destination === "the-farm") {
    road_destination.src = "https://media.discordapp.net/attachments/772064957793435678/814849248797524008/the-farm-removebg-preview.png";
  }

  else if (current_destination === "the-city") {
    road_destination.src = "https://media.discordapp.net/attachments/772064957793435678/816438666716512266/thecity-removebg-preview.png";
  }

  else if (current_destination === "the-houses") {
    road_destination.src = "https://media.discordapp.net/attachments/772064957793435678/816455690163453952/houses-removebg-preview.png";
  }

  else if (current_destination === "the-prison") {
    road_destination.src = "https://media.discordapp.net/attachments/772064957793435678/816676692687978526/image-removebg-preview.png";
  }

  road_render.drawImage(dashboard_sprite, dashboard_sprite_x, dashboard_sprite_y);
}

// Steering the car

function carSpeed () {
  if (speed < 1) {
    speed = 0;
  }

  else {
    speed = speed - 3;

    road_render.clearRect(0, 0, road.width, road.height);

    road_render.drawImage(road_sprite, road_sprite_x, road_sprite_y);

    road_render.font = "20px Arial";
    road_render.fillText("Speed: " + speed, 50, 150);

    road_render.drawImage(road_destination, road_destination_x, road_destination_y, road_destination_width, road_destination_height);
    road_render.drawImage(dashboard_sprite, dashboard_sprite_x, dashboard_sprite_y);
  }

  if (road_destination_width > 396) {
    road_render.font = "20px Arial";
    road_render.fillText("Press Y to get out of the car.", 50, 170);

    $(this).keypress(function (event) {
      if (event.keyCode === 121 && current_location === "the-road") {
        road_render.clearRect(0, 0, road.width, road.height);

        road_render.drawImage(road_sprite, road_sprite_x, road_sprite_y);

        road_render.font = "20px Arial";
        road_render.fillText("Speed: " + speed, 50, 150);

        road_render.drawImage(road_destination, road_destination_x, road_destination_y, 51.27, 21.6);
        road_render.drawImage(dashboard_sprite, dashboard_sprite_x, dashboard_sprite_y);

        setTimeout(function () {
          current_location = current_destination;
          localStorage.setItem("prs-current-location", current_destination);
        }, 1000);

        $("#the-road").fadeOut(2000);

        setTimeout(function () {
          $("#" + current_destination).fadeIn(2000);
          $("#the-map").hide();
        }, 2000);
      }
    });
  }
}

function driveLeft () {
  console.log("Drove left");

  if (road_sprite_x > 159) {
    return false;
  }

  road_render.clearRect(0, 0, road.width, road.height);

  if (speed < 1) {
    road_sprite_x = road_sprite_x + 2.5;
    road_destination_x = road_destination_x + 2.5;
  }

  else {
    road_sprite_x = road_sprite_x + 5;
    road_destination_x = road_destination_x + 5;
  }

  road_render.drawImage(road_sprite, road_sprite_x, road_sprite_y);
  road_render.drawImage(road_destination, road_destination_x, road_destination_y, road_destination_width, road_destination_height);
  road_render.drawImage(dashboard_sprite, dashboard_sprite_x, dashboard_sprite_y);

  road_render.font = "20px Arial";
  road_render.fillText("Speed: " + speed, 50, 150);
}

function driveRight () {
  console.log("Drove right");

  if (road_sprite_x < 1) {
    return false;
  }

  road_render.clearRect(0, 0, road.width, road.height);

  if (speed < 1) {
    road_sprite_x = road_sprite_x - 2.5;
    road_destination_x = road_destination_x - 2.5;
  }

  else {
    road_sprite_x = road_sprite_x - 5;
    road_destination_x = road_destination_x - 5;
  }

  road_render.drawImage(road_sprite, road_sprite_x, road_sprite_y);
  road_render.drawImage(road_destination, road_destination_x, road_destination_y, road_destination_width, road_destination_height);
  road_render.drawImage(dashboard_sprite, dashboard_sprite_x, dashboard_sprite_y);

  road_render.font = "20px Arial";
  road_render.fillText("Speed: " + speed, 50, 150);
}

function driveForward () {
  console.log("Drove forward");

  if (road_destination_width > 396) {
    road_render.font = "20px Arial";
    road_render.fillText("Press Y to get out of the car.", 50, 170);

    return false;
  }

  if (speed > 200) {
    speed = 200;
  }

  else {
    speed = speed + 1.5;
  }

  if (speed < 100) {
    road_destination_width = road_destination_width + 0.05;
    road_destination_height = road_destination_height + 0.05;

    road_destination_y = road_destination_y - 0.05;
  }

  else {
    road_destination_width = road_destination_width + 0.5;
    road_destination_height = road_destination_height + 0.5;

    road_destination_y = road_destination_y - 0.5;
  }

  road_render.clearRect(0, 0, road.width, road.height);

  road_render.drawImage(road_sprite, road_sprite_x, road_sprite_y);
  road_render.drawImage(road_destination, road_destination_x, road_destination_y, road_destination_width, road_destination_height);
  road_render.drawImage(dashboard_sprite, dashboard_sprite_x, dashboard_sprite_y);

  road_render.font = "20px Arial";
  road_render.fillText("Speed: " + speed, 50, 150);
}

function driveBackward () {
  console.log("Drove backward");

  if (road_destination_width < 51) {
    return false;
  }

  if (speed > 200) {
    speed = 200
  }

  else {
    speed = speed + 1.5;
  }

  if (speed < 100) {
    road_destination_width = road_destination_width - 0.05;
    road_destination_height = road_destination_height - 0.05;

    road_destination_y = road_destination_y + 0.05;
  }

  else {
    road_destination_width = road_destination_width - 0.5;
    road_destination_height = road_destination_height - 0.5;

    road_destination_y = road_destination_y + 0.5;
  }

  road_render.clearRect(0, 0, road.width, road.height);

  road_render.drawImage(road_sprite, road_sprite_x, road_sprite_y);
  road_render.drawImage(road_destination, road_destination_x, road_destination_y, road_destination_width, road_destination_height);
  road_render.drawImage(dashboard_sprite, dashboard_sprite_x, dashboard_sprite_y);

  road_render.font = "20px Arial";
  road_render.fillText("Speed: " + speed, 50, 150);
}

function updateVar () {
  if (current_location === "the-road") {
    $(this).keypress(function (event) {
      if (event.keyCode === 97) {
        driveLeft();
      }

      else if (event.keyCode === 100) {
        driveRight();
      }

      else if (event.keyCode === 119) {
        driveForward();
      }

      else if (event.keyCode === 115) {
        driveBackward();
      }
    });
  }

  else {
    console.log("Access to car denied.");
  }
}

setInterval(carSpeed, 500);
setInterval(updateVar, 10000);

renderRoadDestination();

updateVar();

// Fix bugs

function simulateKeyPress(character) {
  jQuery.event.trigger({ type : 'keypress', which : character.charCodeAt(0) });
}

$(document).ready(function () {
  setTimeout(function () {
    simulateKeyPress("d");
    simulateKeyPress("a");
  }, 1000);
});