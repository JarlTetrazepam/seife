//hides navbar when scrolling down, makes it reappear when scrolling up
var prevPos = window.pageYOffset;
const navbar = document.getElementById("navigation");
window.onscroll = function() {navHider()};

function navHider() {
  let pos = window.pageYOffset;
  if (pos > prevPos) {
    navbar.style.bottom = "-" + navbar.getBoundingClientRect().height + "px"
  } else {
    navbar.style.bottom = "0px"
  }
  prevPos = pos;
};

//responsiveness/screen size scaling
const presItem = document.getElementsByClassName("presItem");
var bodyWidth = document.body.getBoundingClientRect().width;
var x = bodyWidth;
var perfectPresItemSize = 1.3116 * Math.pow(10, -4) * Math.pow(x, 2) + 1.50607148 * x + 10.3241424; //formula acquired through testing
var perfectFontSize = 1.5007 * Math.pow(10, -12) * Math.pow(x, 4) - 9.651 * Math.pow(10, -9) * Math.pow(x, 3) + 1.948 * Math.pow(10, -5) * Math.pow(x, 2) - 0.0109467 * x + 17.9363218 //formula acquired through testing
var perfectNavFontSize = 27.1920288 / (1 + 3.93781513 * Math.exp((-1.7729 * Math.pow(10, -3) * x))) // "
window.onload = function() {dynamicScaling(bodyWidth, presItem)};

function dynamicScaling(width, presItem) {
  document.body.style.fontSize = perfectFontSize + "px";

  for (let i = 0; i < presItem.length; i++) {
    presItem[i].style.width = perfectPresItemSize + "px";
  }

  if(bodyWidth >= 1300) {
    navbar.style.fontSize = perfectNavFontSize + "px";
  }
};
