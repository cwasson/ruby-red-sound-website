window.addEventListener("mousemove", nutterbutter);
var y = 2
var x = 2
function nutterbutter() {
  var _el = document.getElementById("woo");
  _el.style.top = event.clientY + y + "px";
  _el.style.left = event.clientX + x + "px";
}