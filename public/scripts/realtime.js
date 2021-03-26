// Realtime script 
function fetchCamp () {
  fetch("/camp")
  .then(response => response.text())
  .then(data => {
    document.getElementById("camp-realtime").innerHTML = data;
  })
  .catch(error => {
    throw error;
  });

  fetch("/house")
  .then(response => response.text())
  .then(data => {
    document.getElementById("house-realtime").innerHTML = data;
  })
  .catch(error => {
    throw error;
  });

  fetch("/farm")
  .then(response => response.text())
  .then(data => {
    document.getElementById("farm-realtime").innerHTML = data;
  })
  .catch(error => {
    throw error;
  });

  fetch("/city")
  .then(response => response.text())
  .then(data => {
    document.getElementById("city-realtime").innerHTML = data;
  })
  .catch(error => {
    throw error;
  });

  fetch("/houses")
  .then(response => response.text())
  .then(data => {
    document.getElementById("houses-realtime").innerHTML = data;
  })
  .catch(error => {
    throw error;
  });

  fetch("/prison")
  .then(response => response.text())
  .then(data => {
    document.getElementById("prison-realtime").innerHTML = data;
  })
  .catch(error => {
    throw error;
  });
}

document.getElementsByClassName("button rounded glass center white reload-button").onclick = function () {
  fetchCamp();
}

fetchCamp();