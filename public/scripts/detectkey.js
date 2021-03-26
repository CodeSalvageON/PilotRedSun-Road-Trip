// Detect keys (for the camp)

function simulateKeyPress(character) {
  jQuery.event.trigger({ type : 'keypress', which : character.charCodeAt(0) });
}

function detectKey () {
  $(this).keypress(function (event) {
    console.log(event.keyCode);

    if (current_location === "the-camp") {
      if (event.keyCode === 120) {
        $("#the-camp").fadeOut(2000);
        $("#" + current_location).fadeOut(2000);

        setTimeout(function () {
          $("#the-camp").fadeOut(2000);

          if (localStorage.getItem("prs-roadtrip-username") === null || localStorage.getItem("prs-roadtrip-username") === undefined || localStorage.getItem("prs-roadtrip-username") === "") {
          screen = 0;

            $("#localstorage-name").fadeIn(2000);
          } 

          else {
            $("#the-map").fadeIn(2000);

            screen = 2;
            current_location = "the-map";

            localStorage.setItem("prs-current-location", "the-map");
          }
        }, 2000);
      }
    }

    else if (current_location === "achievement-house") {
      if (event.keyCode === 120) {
        $("#achievement-house").fadeOut(2000);
        $("#" + current_location).fadeOut(2000);

        setTimeout(function () {
          $("#achievement-house").fadeOut(2000);

          if (localStorage.getItem("prs-roadtrip-username") === null || localStorage.getItem("prs-roadtrip-username") === undefined || localStorage.getItem("prs-roadtrip-username") === "") {
            screen = 0;

            $("#localstorage-name").fadeIn(2000);
          } 

          else {
            $("#the-map").fadeIn(2000);

            screen = 2;
            current_location = "the-map";

            localStorage.setItem("prs-current-location", "the-map");
          }
        }, 2000);
      }
    }

    else if (current_location === "the-farm") {
      if (event.keyCode === 120) {
        $("#the-farm").fadeOut(2000);
        $("#" + current_location).fadeOut(2000);

        setTimeout(function () {
          $("#the-farm").fadeOut(2000);

          if (localStorage.getItem("prs-roadtrip-username") === null || localStorage.getItem("prs-roadtrip-username") === undefined || localStorage.getItem("prs-roadtrip-username") === "") {
            screen = 0;

            $("#localstorage-name").fadeIn(2000);
          } 

          else {
            $("#the-map").fadeIn(2000);

            screen = 2;
            current_location = "the-map";

            localStorage.setItem("prs-current-location", "the-map");
          }
        }, 2000);
      }
    }

    else if (current_location === "the-city") {
      if (event.keyCode === 120) {
        $("#the-city").fadeOut(2000);
        $("#" + current_location).fadeOut(2000);

        setTimeout(function () {
          $("#the-city").fadeOut(2000);

          if (localStorage.getItem("prs-roadtrip-username") === null || localStorage.getItem("prs-roadtrip-username") === undefined || localStorage.getItem("prs-roadtrip-username") === "") {
            screen = 0;

            $("#localstorage-name").fadeIn(2000);
          } 

          else {
            $("#the-map").fadeIn(2000);

            screen = 2;
            current_location = "the-map";

            localStorage.setItem("prs-current-location", "the-map");
          }
        }, 2000);
      }
    }

    else if (current_location === "the-houses") {
      if (event.keyCode === 120) {
        $("#the-houses").fadeOut(2000);
        $("#" + current_location).fadeOut(2000);

        setTimeout(function () {
          $("#the-houses").fadeOut(2000);

          if (localStorage.getItem("prs-roadtrip-username") === null || localStorage.getItem("prs-roadtrip-username") === undefined || localStorage.getItem("prs-roadtrip-username") === "") {
            screen = 0;

            $("#localstorage-name").fadeIn(2000);
          } 

          else {
            $("#the-map").fadeIn(2000);

            screen = 2;
            current_location = "the-map";

            localStorage.setItem("prs-current-location", "the-map");
          }
        }, 2000);
      }
    }

    else if (current_location === "the-prison") {
      if (event.keyCode === 120) {
        $("#the-prison").fadeOut(2000);
        $("#" + current_location).fadeOut(2000);

        setTimeout(function () {
          $("#the-prison").fadeOut(2000);

          if (localStorage.getItem("prs-roadtrip-username") === null || localStorage.getItem("prs-roadtrip-username") === undefined || localStorage.getItem("prs-roadtrip-username") === "") {
            screen = 0;

            $("#localstorage-name").fadeIn(2000);
          } 

          else {
            $("#the-map").fadeIn(2000);

            screen = 2;
            current_location = "the-map";

            localStorage.setItem("prs-current-location", "the-map");
          }
        }, 2000);
      }
    }
  });
}

setInterval(detectKey, 500);