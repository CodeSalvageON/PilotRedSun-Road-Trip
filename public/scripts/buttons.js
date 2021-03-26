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
    let i = 0;
    let txt = "Press X to head to the map."
    let speed = 50;
      
    function typeWriter () {
      if (i < txt.length) {
        document.getElementById("the-camp-intro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();

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

  current_location = "the-road";
  localStorage.setItem("prs-current-location", "the-road");

  current_destination = "the-camp";
  localStorage.setItem("prs-current-destination", "the-camp");

  renderRoadDestination();

  $("#the-map").fadeOut(2000);

  setTimeout(function () {
    $("#the-road").fadeIn(2000);
  }, 2000);
});

$("#achievement-house-map-button").click(function () {
  if (current_location === "the-map") {
    console.log("At map");
  }

  else {
    return false; 
  }

  current_location = "the-road";
  localStorage.setItem("prs-current-location", "the-road");

  current_destination = "achievement-house";
  localStorage.setItem("prs-current-destination", "achievement-house");

  renderRoadDestination();

  $("#the-map").fadeOut(2000);

  setTimeout(function () {
    $("#the-road").fadeIn(2000);
  }, 2000);
});

$("#the-farm-map-button").click(function () {
  if (current_location === "the-map") {
    console.log("At map");
  }

  else {
    return false;
  }

  current_location = "the-road";
  localStorage.setItem("prs-current-location", "the-road");

  current_destination = "the-farm";
  localStorage.setItem("prs-current-destination", "the-farm");

  renderRoadDestination();

  $("#the-map").fadeOut(2000);

  setTimeout(function () {
    $("#the-road").fadeIn(2000);
  }, 2000);
});

$("#the-city-map-button").click(function () {
  if (current_location === "the-map") {
    console.log("At map");
  }

  else {
    return false;
  }

  current_location = "the-road";
  localStorage.setItem("prs-current-location", "the-road");

  current_destination = "the-city";
  localStorage.setItem("prs-current-destination", "the-city");

  renderRoadDestination();

  $("#the-map").fadeOut(2000);

  setTimeout(function () {
    $("#the-road").fadeIn(2000);
  }, 2000);
});

$("#the-houses-map-button").click(function () {
  if (current_location === "the-map") {
    console.log("At map");
  }

  else {
    return false;
  }

  current_location = "the-road";
  localStorage.setItem("prs-current-location", "the-road");

  current_destination = "the-houses";
  localStorage.setItem("prs-current-destination", "the-houses");

  renderRoadDestination();

  $("#the-map").fadeOut(2000);

  setTimeout(function () {
    $("#the-road").fadeIn(2000);
  }, 2000);
});

$("#the-prison-map-button").click(function () {
  if (current_location === "the-map") {
    console.log("At map");
  }

  else {
    return false;
  }

  current_location = "the-road";
  localStorage.setItem("prs-current-location", "the-road");

  current_destination = "the-prison";
  localStorage.setItem("prs-current-destination", "the-prison");

  renderRoadDestination();

  $("#the-map").fadeOut(2000);

  setTimeout(function () {
    $("#the-road").fadeIn(2000);
  }, 2000);
});

// Custom Location Buttons
$("#the-camp-custom-location").click(function () {
  $("#camp-modal").fadeIn(2000);
});

$("#the-house-custom-location").click(function () {
  $("#house-modal").fadeIn(2000);
});

$("#the-farm-custom-location").click(function () {
  $("#farm-modal").fadeIn(2000);
});

$("#the-houses-custom-location").click(function () {
  $("#houses-modal").fadeIn(2000);
});

$("#the-prison-custom-location").click(function () {
  $("#prison-modal").fadeIn(2000);
});

$("#the-city-custom-location").click(function () {
  $("#city-modal").fadeIn(2000);
});

// Modal Closers 
$("#close-camp-modal").click(function () {
  $("#camp-modal").fadeOut(2000);
});

$("#close-house-modal").click(function () {
  $("#house-modal").fadeOut(2000);
});

$("#close-farm-modal").click(function () {
  $("#farm-modal").fadeOut(2000);
});

$("#close-city-modal").click(function () {
  $("#city-modal").fadeOut(2000);
});

$("#close-houses-modal").click(function () {
  $("#houses-modal").fadeOut(2000);
});

$("#close-prison-modal").click(function () {
  $("#prison-modal").fadeOut(2000);
});