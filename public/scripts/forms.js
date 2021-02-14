$("#localstorage-name-form").submit(function () {
  if (screen > 0) {
    return false;
  }

  event.preventDefault();

  localStorage.setItem("prs-roadtrip-username", document.getElementById("name").value);

  $("#localstorage-name").fadeOut(2000);

  setTimeout(function () {
    $("#the-map").fadeIn(2000);

    screen = 2;
  }, 2000);
});