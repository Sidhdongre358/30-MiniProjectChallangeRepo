const container = document.querySelector(".container");
const bannertext = document.querySelector(".banner-text");
const formdata = document.querySelector(".banner-wrapper");
const btnClickNow = document.querySelector(".clickNowBtn");
const xbtn = document.querySelector(".x-btn");
btnClickNow.addEventListener("click", () => {
  container.classList.add("changebg");
  bannertext.classList.add("remove");
  formdata.classList.add("display");
});
xbtn.addEventListener("click", () => {
  container.classList.remove("changebg");

  bannertext.classList.remove("remove");

});
