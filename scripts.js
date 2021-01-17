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
