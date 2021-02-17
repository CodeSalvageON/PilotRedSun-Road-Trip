// Close the window for mobile users (this game doesn't work on mobile)

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 window.close();
}