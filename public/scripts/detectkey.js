// Detect keys (for the camp)

$(this).keypress(function (event) {
  console.log(event.keyCode);

  if (screen === 1 || current_location === "the-camp") {
    if (event.keyCode === 120) {
      $("#the-camp").fadeOut(2000);

      setTimeout(function () {
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