$("#start-roadtrip").click(function () {
  if (screen > 0) {
    return false;
  }

  $("#title-screen").fadeOut(2000);

  screen = 1;

  setTimeout(function () {
    $("#the-camp").fadeIn(2000);

    $(document).ready(function () {
      let i = 0;
      let txt = "Welcome to The Camp! This is the default spawnpoint. Press X to begin driving at any time. Press A and D to steer your vehicle."
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
});