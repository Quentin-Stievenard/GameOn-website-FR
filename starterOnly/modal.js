function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") x.className += " responsive";
  else x.className = "topnav";
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const confirmation = document.querySelector(".confirmationbg");

// Tags
const firstNameTag = document.getElementById("first");
const lastNameTag = document.getElementById("last");
const emailTag = document.getElementById("email");
const quantityTag = document.getElementById("quantity");

// ErrorTag
const firstNameErrorTag = document.getElementById("prenomError");
const lastNameErrorTag = document.getElementById("nomError");
const emailTagError = document.getElementById("mailError");
const quantityErrorTag = document.getElementById("quantityError");

// Regex
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const firstRegex = /^[a-z ,.'-]+$/i;
const lastRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/i;
const numberRegex = /^\d+$/;

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
  confirmation.style.display = "none";
}

// input checked
let firstChecked;
let lastChecked;
let mailChecked;
let birthChecked;
let quantityChecked;
let radioChecked;
let conditionsChecked;

// Validate input + error message

function validateInput(input, regex, errorTag, message) {
  let result = regex.test(input);
  let checked;
  if (result == false) {
    errorTag.innerText = message;
    errorTag.style.color = "red";
    errorTag.style.fontSize = "14px";
    errorTag.style.fontWeight = "bold";
    checked = false;
    return false;
  } else {
    errorTag.innerText = "";
    checked = true;
    return true;
  }
}

firstNameTag.addEventListener("blur", function () {
  const isValid = validateInput(
    firstNameTag.value,
    firstRegex,
    firstNameErrorTag,
    "Veuillez saisir un prénom valide"
  );
  if (isValid) firstChecked = true;
});

lastNameTag.addEventListener("blur", function () {
  const isValid = validateInput(
    lastNameTag.value,
    lastRegex,
    lastNameErrorTag,
    "Veuillez saisir un nom valide"
  );
  if (isValid) lastChecked = true;
});

emailTag.addEventListener("blur", function () {
  const isValid = validateInput(
    emailTag.value,
    emailRegex,
    emailTagError,
    "Veuillez saisir un email valide"
  );
  if (isValid) mailChecked = true;
});

quantityTag.addEventListener("blur", function () {
  const isValid = validateInput(
    quantityTag.value,
    numberRegex,
    quantityErrorTag,
    "Veuillez entrez un nombre"
  );
  if (isValid) quantityChecked = true;
});

function verifyLocation() {
  const radioLocations = document.forms.reserve.location;
  let isLocationChecked = false;
  for (i = 0; i < radioLocations.length; i++) {
    const radio = radioLocations[i];
    if (radio.checked == true) isLocationChecked = true;
  }
  if (isLocationChecked == false) {
    const radioTagError = document.getElementById("radioErrorTag");
    radioTagError.innerText = "Veuillez selectionnez une ville";
  }
  radioChecked = isLocationChecked;
}
// const birthDateTag = document.getElementById("birthdate");
// const dateRegex =
//   /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
// const birthDateErrorTag = document.getElementById("birthdateError");
// birthDateTag.addEventListener("blur", function () {
//   validateInput(
//     birthDateTag.value,
//     dateRegex,
//     birthDateErrorTag,
//     "Veuillez entrez une date correcte"
//   );
//   checked === true ? (birthChecked = true) : (birthChecked = false);
// });

// verify checkbox checked

function verifyCheckbox() {
  const checkbox = document.getElementById("checkbox1");

  if (checkbox.checked) conditionsChecked = true;
  else {
    alert("Veuillez lire et accepter les conditions d'utilisation");
    conditionsChecked = false;
  }
}

// keep data form
document.forms.reserve.addEventListener("submit", function (e) {
  e.preventDefault();
});

// confirmation succed

function validate() {
  verifyLocation();
  verifyCheckbox();
  if (
    firstChecked == true &&
    lastChecked == true &&
    mailChecked == true &&
    quantityChecked == true &&
    conditionsChecked == true &&
    radioChecked == true
  ) {
    modalbg.style.display = "none";
    confirmation.style.display = "block";
  }
}
