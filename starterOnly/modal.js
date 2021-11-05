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
const confirmation = document.querySelectorAll(".confirmation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.forEach((span) => span.addEventListener("click", closeModal));

// close confirmation event
confirmation.forEach((span) => span.addEventListener("click", closeModal));

// close modal formData
function closeModal() {
  modalbg.style.display = "none";
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

const firstNameTag = document.getElementById("first");
const firstNameErrorTag = document.getElementById("prenomError");
firstNameTag.addEventListener("blur", function () {
  validateInput(
    firstNameTag.value,
    /^[a-z ,.'-]+$/i,
    firstNameErrorTag,
    "Veuillez saisir un prénom valide"
  );
  return firstChecked;
});

const lastNameTag = document.getElementById("last");
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

function verifyLocation() {
  console.log("test2");
  const radioLocations = document.forms.reserve.location;
  console.log(radioLocations);
  let isLocationChecked = false;
  for (i = 0; i < radioLocations.length; i++) {
    const radio = radioLocations[i];
    if (radio.checked == true) {
      isLocationChecked = true;
    }
  }
  if (isLocationChecked == false) {
    console.log("test");
    const radioTagError = document.getElementById("radioErrorTag");
    radioTagError.innerText = "Veuillez selectionnez une ville";
  }
  return isLocationChecked;
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

// verify city checked

// for (i = 1; i < 7; i++) {
//   const radioTag = document.getElementById("location" + i);
//   const radioTagError = document.getElementById("radiotagError");
//   radioTag.forEach(function () {
//     if (radioTag.checked) {
//       radioTagError.innerText = "";
//       radioChecked = true;
//     } else {
//       radioTagError.innerText = "Veuillez selectionner une ville";
//     }
//   });
// }

// verify checkbox checked

// function verifyCheckbox() {
//   const checkbox = document.getElementById("checkbox1");

//   if (checkbox.checked) {
//     conditionsChecked = true;
//     return true;
//   } else {
//     alert("Veuillez lire et accepter les conditions d'utilisation");
//     conditionsChecked = false;
//     return false;
//   }
// }

// keep data form
document.forms.reserve.addEventListener("submit", function (e) {
  e.preventDefault();
});

// confirmation succed

function validate() {
  if (
    firstChecked == true &&
    lastChecked == true &&
    mailChecked == true &&
    birthChecked == true &&
    quantityChecked == true &&
    conditionsChecked == true &&
    verifyLocation() == true
  ) {
    modalbg.style.display = "none";
    confirmation.style.display = "block";
  }
}
