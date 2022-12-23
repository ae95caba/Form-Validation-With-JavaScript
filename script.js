const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const country = document.getElementById("country");
const countryError = document.getElementById("country-error");
const zipCode = document.getElementById("zip-code");
const zipCodeError = document.getElementById("zip-code-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const passwordConfirmation = document.getElementById("password-confirmation");
const passwordConfirmationError = document.getElementById(
  "password-confirmation-error"
);
const button = document.querySelector("button");
const form = document.querySelector("form");
const fieldset = document.querySelector("fieldset");

email.addEventListener("input", () => {
  console.log(email.validity.typeMismatch);
  if (email.validity.typeMismatch) {
    emailError.innerText = "Entered value needs to be an email address.";
  } else {
    emailError.innerText = "";
    email.setCustomValidity("");
  }
});

const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic (the)",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines (the)",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands (the)",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands",
];

function addOptions() {
  countryList.forEach((pais) => {
    const aCountry = document.createElement("option");
    aCountry.value = pais;
    country.appendChild(aCountry);
  });
}

addOptions();

const countryInput = document.getElementById("country-input");

countryInput.addEventListener("input", () => {
  if (!countryList.includes(countryInput.value)) {
    countryError.innerText = "please type a correct country";

    countryInput.setCustomValidity("invalid");
  } else {
    countryError.innerText = "";

    countryInput.setCustomValidity("");
  }
});

zipCode.addEventListener("input", () => {
  console.log(zipCode.validity.tooShort);
  if (zipCode.validity.tooShort) {
    zipCodeError.innerText = "Entered value needs to be a zip code.";
  } else {
    zipCodeError.innerText = "";
    zipCode.setCustomValidity("");
  }
});

/* function isPasswordGood(inputtxt) {
  var passw = /^[A-Za-z]\w{7,14}$/;
  if (inputtxt.value.match(passw)) {
    return true;
  } else {
    return false;
  }
} */

/* password.addEventListener("input", () => {
  if (isPasswordGood(password)) {
    passwordError.innerText = "";
  } else {
    passwordError.innerText =
      "Input Password must be between 7 to 15 characters which can contain only characters, numeric digits, underscore and the first character must be a letter";
  }
}); */

password.addEventListener("input", () => {
  console.log(password.validity.patternMismatch);
  if (password.validity.patternMismatch) {
    passwordError.innerText =
      "Input Password must be between 7 to 15 characters which can contain only characters, numeric digits, underscore and the first character must be a letter";
  } else {
    passwordError.innerText = "";
    password.setCustomValidity("");
  }
});

passwordConfirmation.addEventListener("input", () => {
  if (passwordConfirmation.value === password.value) {
    passwordConfirmationError.innerText = "";
    passwordConfirmation.setCustomValidity("");
  } else {
    passwordConfirmationError.innerText = "Password doesnt match";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

form.addEventListener("submit", (event) => {
  if (email.value.length === 0) {
    emailError.innerText = "This text field id required";
    email.setCustomValidity("invalid");
  }
  if (countryInput.value.length === 0) {
    countryError.innerText = "This text field id required";
    countryInput.setCustomValidity("invalid");
  }
  if (zipCode.value.length === 0) {
    zipCodeError.innerText = "This text field id required";
    zipCode.setCustomValidity("invalid");
  }
  if (password.value.length === 0) {
    passwordError.innerText = "This text field id required";
    password.setCustomValidity("invalid");
  }
  if (passwordConfirmation.value.length === 0) {
    passwordConfirmationError.innerText = "This text field id required";
    passwordConfirmation.setCustomValidity("invalid");
  }

  if (form.checkValidity()) {
    alert("submitted");
  } else {
    alert("error");
  }
});
