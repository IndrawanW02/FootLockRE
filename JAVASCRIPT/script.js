let navigation = document.querySelector(".navigation");
let hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navigation.contains(e.target)) {
    navigation.classList.remove("active");
  }
});

// Registration Form
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const country = document.getElementById("country");
const terms = document.getElementById("terms");
const termsErr = document.getElementById("errX");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

function clearInput() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("country").value = "none";
  document.getElementById("terms").checked = false;
}

const validateInputs = () => {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const countryValue = country.value;
  const termsValue = terms.checked;

  let flag = 0;

  if (nameValue === "") {
    setError(name, "Name is required");
  } else {
    setSuccess(name);
    flag++;
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!emailValue.endsWith("@gmail.com")) {
    setError(email, "Email must end with @gmail.com");
  } else {
    setSuccess(email);
    flag++;
  }

  if (phoneNumberValue === "") {
    setError(phoneNumber, "Phone Number is required");
  } else if (phoneNumberValue.length < 10 || phoneNumberValue.length > 12) {
    setError(phoneNumber, "Please Enter a valid phone number");
  } else {
    setSuccess(phoneNumber);
    flag++;
  }

  if (countryValue === "none") {
    setError(country, "Nationality cannot be empty");
  } else {
    setSuccess(country);
    flag++;
  }

  if (!termsValue) {
    setError(termsErr, "Terms and conditions must be agreed to");
  } else {
    setSuccess(termsErr);
    flag++;
  }

  if (flag == 5) {
    alert("Form submitted successfully");
    clearInput();
  }
};
