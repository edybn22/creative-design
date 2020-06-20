var navbarEl = document.getElementById("navbar");

function toggleNavbar() {
  if (navbarEl.style.display === "flex") {
    navbarEl.style.display = "none";
  } else {
    navbarEl.style.display = "flex";
  }
}

// CAND FACEM RESIZE DACA ECRANUL E MAI MIC SAU MAI MARE DE 1280px
window.onresize = function () {
  if(window.innerWidth > 1280 ) {
    navbarEl.style.display = "flex";
  } else {
    navbarEl.style.display = "none";
  }
}

// CAND SE INCARCA PAGINA - VERIFICAM DACA ECRANUL E MAI MIC SAU MAI MARE DE 1280px
window.onload = function () {
  if(window.innerWidth >= 1280) {
    navbarEl.style.display = "flex";
  } else {
    navbarEl.style.display = "none";
  }
}

