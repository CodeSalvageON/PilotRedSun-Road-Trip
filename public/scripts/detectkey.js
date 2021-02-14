$(this).keypress(function (event) {
  console.log(event.keyCode);

  if (screen === 1) {
    if (event.keyCode === 120) {
      $("#the-camp").fadeOut(2000);

      setTimeout(function () {
        $("#the-map").fadeIn(2000);
      }, 2000);
    }
  }
})