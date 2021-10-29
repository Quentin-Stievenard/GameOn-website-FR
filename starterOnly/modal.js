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

// Validate input + error message

function validateInput(input, regex, errorTag, message) {
  let result = regex.test(input);
  if (result == false) {
    errorTag.innerText = message;
    errorTag.style.color = "red";
    errorTag.style.fontSize = "14px";
    errorTag.style.fontWeight = "bold";
    return false;
  } else {
    errorTag.innerText = "";
    return true;
  }
}

const firstNameTag = document.getElementById("first");
const firstNameErrorTag = document.getElementById("prenomError");
firstNameTag.addEventListener("blur", function () {
  validateInput(
    firstNameTag.value,
    /^[a-z ,.'-]+$/i,
    firstNameErrorTag,
    "Veuillez saisir un prénom valide"
  );
});

const lastNameTag = document.getElementById("email");
const lastNameErrorTag = document.getElementById("nomError");
lastNameTag.addEventListener("blur", function () {
  validateInput(
    lastNameTag.value,
    /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/i,
    lastNameErrorTag,
    "Veuillez saisir un nom valide"
  );
});

const emailTag = document.getElementById("email");
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailTagError = document.getElementById("mailError");
emailTag.addEventListener("blur", function () {
  validateInput(
    emailTag.value,
    emailRegex,
    emailTagError,
    "Veuillez saisir un email valide"
  );
});

const quantityTag = document.getElementById("quantity");
const numberRegex = /^\d+$/;
const quantityErrorTag = document.getElementById("quantityError");
quantityTag.addEventListener("blur", function () {
  validateInput(
    quantityTag.value,
    numberRegex,
    quantityErrorTag,
    "Veuillez entrez un nombre"
  );
});
// verify checkbox checked

function verifyCheckbox() {
  const checkbox = document.getElementById("checkbox1");

  if (checkbox.checked) {
    return true;
  } else {
    alert("Veuillez lire et accepter les conditions d'utilisation");
    return false;
  }
}
