function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.forEach((span) => span.addEventListener("click", closeModal));

// close modal formData
function closeModal() {
  modalbg.style.display = "none";
}

// verify email modal

function checkEmail(email) {
  var emailRegulier =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegulier.test(email);
}

function validateEmail() {
  var email = document.getElementById("email").value;

  if (checkEmail(email)) {
    return true;
  } else {
    alert("Adresse Email non valide");
    return false;
  }
}

// verify checkbox checked

function verifyCheckbox() {
  var checkbox = document.getElementById("checkbox1");

  if (checkbox.checked) {
    return true;
  } else {
    alert("Veuillez lire et accepter les conditions d'utilisation");
    return false;
  }
}
