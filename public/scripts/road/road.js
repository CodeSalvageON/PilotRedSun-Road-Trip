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

// Steering the car

function driveLeft () {
  console.log("Drove left");

  if (road_sprite_x < 1) {
    return false;
  }

  road_render.clearRect(0, 0, road.width, road.height);

  if (speed < 1) {
    road_sprite_x = road_sprite_x - 2.5;
  }

  else {
    road_sprite_x = road_sprite_x - 5;
  }

  road_render.drawImage(road_sprite, road_sprite_x, road_sprite_y);
  road_render.drawImage(dashboard_sprite, dashboard_sprite_x, dashboard_sprite_y);
}

function driveRight () {
  console.log("Drove right");

  if (road_sprite_x > 159) {
    return false;
  }

  road_render.clearRect(0, 0, road.width, road.height);

  if (speed < 1) {
    road_sprite_x = road_sprite_x + 2.5;
  }

  else {
    road_sprite_x = road_sprite_x + 5;
  }

  road_render.drawImage(road_sprite, road_sprite_x, road_sprite_y);
  road_render.drawImage(dashboard_sprite, dashboard_sprite_x, dashboard_sprite_y);
}

if (current_location === "the-road") {
  $(this).keypress(function (event) {
    if (event.keyCode === 97) {
      driveLeft();
    }

    else if (event.keyCode === 100) {
      driveRight();
    }
  });
}

else {
  console.log("Access to car denied.");
}

// Fix bugs

function simulateKeyPress(character) {
  jQuery.event.trigger({ type : 'keypress', which : character.charCodeAt(0) });
}

$(document).ready(function () {
  simulateKeyPress("d");
  simulateKeyPress("a");
});