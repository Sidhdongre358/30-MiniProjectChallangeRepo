const signUpform = document.querySelector(".signup-form-wrapper");
const loginForm = document.querySelector(".login-form-wrapper");
const banner = document.querySelector(".banner-text");
const loginBtn = document.querySelector(".login-btn");
const signUpBtn = document.querySelector(".signin-btn");

signUpBtn.addEventListener("click", (event) => {
  loginForm.classList.add("hide-banner");
  banner.classList.add("hide-banner");
  signUpform.classList.add("display");
});

loginBtn.addEventListener("click", (event) => {
  loginForm.classList.remove("hide-banner");
  loginForm.classList.add("display");
  banner.classList.add("hide-banner");

  signUpform.classList.remove("display");
});
