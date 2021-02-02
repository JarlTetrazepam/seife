//hides navbar when scrolling down, makes it reappear when scrolling up, same for contact button on service.html
var prevPos = window.pageYOffset;
const navbar = document.getElementById("navigation");
const contactButton = document.getElementsByClassName("contactButton");
window.onscroll = function() {
  navHider()
};

function navHider() {
  let pos = window.pageYOffset;
  if (pos > prevPos) {
    navbar.style.bottom = "-" + navbar.getBoundingClientRect().height + "px"
    if (contactButton.length != 0 && bodyWidth < 1024) {
      contactButton[0].style.right = "-" + contactButton[0].getBoundingClientRect().width + "px"
    }
  } else {
    navbar.style.bottom = "0px"
    if (contactButton.length != 0  && bodyWidth < 1024) {
      contactButton[0].style.right = 10 + "%"
    }
  }
  prevPos = pos;
};

//responsiveness/screen size scaling
var presItem = document.getElementsByClassName("presItem");
var bodyWidth = document.body.getBoundingClientRect().width;
var x = bodyWidth;
var perfectPresItemSize = 1.3116 * Math.pow(10, -4) * Math.pow(x, 2) + 1.50607148 * x + 10.3241424; //formula acquired through testing
var perfectFontSize = 1.5007 * Math.pow(10, -12) * Math.pow(x, 4) - 9.651 * Math.pow(10, -9) * Math.pow(x, 3) + 1.948 * Math.pow(10, -5) * Math.pow(x, 2) - 0.0109467 * x + 17.9363218 //formula acquired through testing
var perfectNavFontSize = 27.1920288 / (1 + 3.93781513 * Math.exp((-1.7729 * Math.pow(10, -3) * x))) // "
var perfectHeadingSize = 140.392202 / (1 + 5.72799519 * Math.exp(-3.726 * Math.pow(10, -4) * x))

window.onload = onload => {
  if (arrow.length != 0) {
    arrow[0].style.bottom = -40 + "%";
    arrow[1].style.bottom = -40 + "%";
    dynamicScaling(bodyWidth)
  } else {
      dynamicScaling(bodyWidth)
    }
};
window.onresize = function() {
  dynamicScaling(bodyWidth)
};

function dynamicScaling(bodyWidth) {
  let buttonScaleButtons = document.getElementsByClassName("buttonScale");
  let presItemHeading = document.getElementsByClassName("presItemHeading")

  for (let i = 0; i < presItemHeading.length; i++) {
      presItemHeading[i].style.fontSize = perfectHeadingSize + "px";
  }
  for (let i = 0; i < buttonScaleButtons.length; i++) {
    buttonScaleButtons[i].style.fontSize = perfectFontSize + 1 + "px";
  }
  document.body.style.fontSize = perfectFontSize + "px";

  if (bodyWidth < 1024) {
    for (let i = 0; i < presItem.length; i++) {
      presItem[i].style.width = perfectPresItemSize + "px";
    }
  }

  if(bodyWidth >= 1024) {
    navbar.style.fontSize = perfectNavFontSize + "px";
  }
};

//presItem slider
var arrow = document.getElementsByClassName("arrow");
var presWrapper = document.getElementsByClassName("presWrapper");
var n = 0;
var right = true;
var circle = document.getElementsByClassName("circle");

if (arrow.length != 0) {
  arrow[0].addEventListener("click", rightFalse => { //left arrow
    right = false;
    slide();
  });
  arrow[1].addEventListener("click", slide); //right arrow
}

if (circle.length != 0) {
  circle[0].addEventListener("click", function() {dotSlider(0)});
  circle[1].addEventListener("click", function() {dotSlider(1)});
  circle[2].addEventListener("click", function() {dotSlider(2)});
}

function dotSlider(pos) {
  presWrapper[n].classList.remove("active");
  circle[n].classList.remove("active");

  n = pos;

  presWrapper[n].classList.add("active");
  circle[n].classList.add("active");
};

function slide() {
  presWrapper[n].classList.remove("active");
  circle[n].classList.remove("active");

  if (right) {
    n++
  } else {
    n--
  }

  if (n < 0) {
    n = presWrapper.length - 1;
  } else if (n >= presWrapper.length) {
    n = 0;
  }

  presWrapper[n].classList.add("active");
  circle[n].classList.add("active");
};
