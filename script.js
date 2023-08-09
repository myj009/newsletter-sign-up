//get component by id - form

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const inputField = document.getElementById("email");
  const errorText = document.getElementById("error");
  if (inputField.value === "" || !validateEmail(inputField.value)) {
    inputField.classList.add("text-tomato")
    inputField.classList.add("border-tomato");
    inputField.classList.add("bg-red-200");
    errorText.classList.remove("hidden");
    return;
  }
  errorText.classList.add("hidden");
  const prompt = document.getElementById("prompt");
  const successPrompt = document.getElementById("success");
  prompt.classList.remove("flex");
  prompt.classList.add("hidden");
  successPrompt.classList.remove("hidden");
  successPrompt.classList.add("flex");

  const userEmailSpan = document.getElementById("user-email");
  userEmailSpan.innerText = inputField.value;
};

var form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

const inputField = document.getElementById("email");
inputField.addEventListener("focus", () => {
  inputField.classList.remove("text-tomato")
  inputField.classList.remove("border-tomato");
  inputField.classList.remove("bg-red-200");
});

const newsletterButton = document.getElementById("newsletter-button");
newsletterButton.addEventListener("click", () => {
  const successPrompt = document.getElementById("success");
  const prompt = document.getElementById("prompt");
  successPrompt.classList.add("hidden");
  successPrompt.classList.remove("flex");
  prompt.classList.add("flex");
  prompt.classList.remove("hidden");
});