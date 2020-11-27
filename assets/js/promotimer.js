
var myTimer = setInterval(myClock, 1000);
function myClock() {
  document.getElementById("demo").innerHTML = new Date().toLocaleTimeString();
}



	