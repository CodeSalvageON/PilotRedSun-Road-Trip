// Road Control

// Render the world
const road = document.getElementById("road-canvas");
const road_render = road.getContext('2d');

// X and Y values for sprites
const road_sprite_x = 0;
const road_sprite_y = 0;

// Render sprites
const road_sprite = new Image();
road_sprite.onload = function () {
  road_render.drawImage(road_sprite, road_sprite_x, road_sprite_y);

  console.log("Road Sprite rendered at coordinates " + road_sprite_x + ", " + road_sprite_y);
}
road_sprite.src = "https://media.discordapp.net/attachments/772064957793435678/811596522658725908/image-removebg-preview.png";