const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", () => {
  btn.classList.add("change");
});

btn.addEventListener("mouseleave", () => {
  btn.classList.remove("change");
});
