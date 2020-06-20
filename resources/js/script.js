window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky && window.innerWidth >= 1280) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

