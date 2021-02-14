let type = 0;
let txt = 'Welcome to the Camp! Here is the default spawn for all new drivers. <br/> Press X to start driving at any time. Press A and D keys to steer your vehicle.'; 
let speed = 50; 

function typeWriter(div) {
  if (type < txt.length) {
    if( document.getElementById(div) != null) {
      var div = div;
    }   
    document.getElementById(div).innerHTML += txt.charAt(type);
    type++;
    setTimeout(typeWriter, speed);
  }
}