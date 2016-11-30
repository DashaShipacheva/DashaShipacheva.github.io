var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var cartPopup = document.querySelector(".modal");
var cartOpen = document.querySelector(".btn--js");
var popup = document.querySelectorAll(".catalog-item__cart-icon");

if (cartOpen) {
  cartOpen.addEventListener("click", function(event) {
    event.preventDefault();
    cartPopup.classList.add("modal__show");
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (cartPopup.classList.contains("modal__show")) {
      cartPopup.classList.remove("modal__show");
    }
  }
});

for (var i = 0; i < popup.length; i++) {
  popup[i].addEventListener("click", function(event) {
    event.preventDefault();
    cartPopup.classList.add("modal__show");
  });
}

function initMap() {
  var myLatLng = new google.maps.LatLng(59.936148, 30.322917);
  var mapOptions = {
    center: myLatLng,
    zoom: 16,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: "img/icon-map-pin.svg"
  });
}
if (document.querySelector("#map")) {
  google.maps.event.addDomListener(window, "load", initMap);
}



