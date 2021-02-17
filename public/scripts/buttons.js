// Mouse click sound effect

$("button").click(function () {
  document.getElementById("mouse-click").play();
});

$(".button").click(function () {
  document.getElementById("mouse-click").play();
});

// Title screen buttons

$("#start-roadtrip").click(function () {
  if (screen > 0) {
    return false;
  }

  $("#title-screen").fadeOut(2000);

  screen = 1;
  
  if (current_location === "" || current_location === null || current_location === undefined || current_location === "the-camp") {
    current_location = "the-camp";

    localStorage.setItem("prs-current-location", "the-camp");

    setTimeout(function () {
      $("#the-camp").fadeIn(2000);

      $(document).ready(function () {
        let i = 0;
        let txt = "Welcome to The Camp! This is the default spawnpoint. Press X to begin driving at any time. Use WASD keys to steer your vehicle."
        let speed = 50;
      
        function typeWriter () {
          if (i < txt.length) {
            document.getElementById("the-camp-intro").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        }

        typeWriter();
      });
    }, 2000);
  }

  else {
    setTimeout(function () {
      $("#" + current_location).fadeIn(2000);
    }, 2000);
  }
});

// Map Buttons

$("#the-camp-map-button").click(function () {
  if (current_location === "the-map") {
    console.log("At map");
  }

  else {
    return false;
  }

  if (current_location === "the-map") {
    current_location = "the-road"
    localStorage.setItem("prs-current-location", "the-road");

    $("#the-map").fadeOut(2000);

    setTimeout(function () {

    }, 2000);
  }
});