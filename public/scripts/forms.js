// All forms 
$("form").submit(function () {
  fetchCamp();
});

// Localstorage name form

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

// Custom Location Forms

$("#camp-form").submit(function () {
  event.preventDefault();

  const camp_form_data = {
    current_loc : "camp",
    yt_video_link : document.getElementById("camp-vid-link").value,
    custom_loc_name : document.getElementById("camp-location-name").value,
    username : localStorage.getItem("prs-roadtrip-username")
  }

  fetch ("/custom", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(camp_form_data)
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);

    document.getElementById("camp-vid-link").value = "";
    document.getElementById("camp-location-name").value = "";
  })
  .catch(error => {
    console.log(error);
  });
});

$("#house-form").submit(function () {
  event.preventDefault();

  const camp_form_data = {
    current_loc : "house",
    yt_video_link : document.getElementById("house-vid-link").value,
    custom_loc_name : document.getElementById("house-location-name").value,
    username : localStorage.getItem("prs-roadtrip-username")
  }

  fetch ("/custom", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(camp_form_data)
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);

    document.getElementById("house-vid-link").value = "";
    document.getElementById("house-location-name").value = "";
  })
  .catch(error => {
    console.log(error);
  });
});

$("#farm-form").submit(function () {
  event.preventDefault();

  const camp_form_data = {
    current_loc : "farm",
    yt_video_link : document.getElementById("farm-vid-link").value,
    custom_loc_name : document.getElementById("farm-location-name").value,
    username : localStorage.getItem("prs-roadtrip-username")
  }

  fetch ("/custom", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(camp_form_data)
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);

    document.getElementById("farm-vid-link").value = "";
    document.getElementById("farm-location-name").value = "";
  })
  .catch(error => {
    console.log(error);
  });
});

$("#city-form").submit(function () {
  event.preventDefault();

  const camp_form_data = {
    current_loc : "city",
    yt_video_link : document.getElementById("city-vid-link").value,
    custom_loc_name : document.getElementById("city-location-name").value,
    username : localStorage.getItem("prs-roadtrip-username")
  }

  fetch ("/custom", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(camp_form_data)
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);

    document.getElementById("city-vid-link").value = "";
    document.getElementById("city-location-name").value = "";
  })
  .catch(error => {
    console.log(error);
  });
});

$("#houses-form").submit(function () {
  event.preventDefault();

  const camp_form_data = {
    current_loc : "houses",
    yt_video_link : document.getElementById("houses-vid-link").value,
    custom_loc_name : document.getElementById("houses-location-name").value,
    username : localStorage.getItem("prs-roadtrip-username")
  }

  fetch ("/custom", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(camp_form_data)
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);

    document.getElementById("houses-vid-link").value = "";
    document.getElementById("houses-location-name").value = "";
  })
  .catch(error => {
    console.log(error);
  });
});

$("#prison-form").submit(function () {
  event.preventDefault();

  const camp_form_data = {
    current_loc : "prison",
    yt_video_link : document.getElementById("prison-vid-link").value,
    custom_loc_name : document.getElementById("prison-location-name").value,
    username : localStorage.getItem("prs-roadtrip-username")
  }

  fetch ("/custom", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(camp_form_data)
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);

    document.getElementById("prison-vid-link").value = "";
    document.getElementById("prison-location-name").value = "";
  })
  .catch(error => {
    console.log(error);
  });
});