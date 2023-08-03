let night = document.querySelector(".bi-brightness-high");
let light = document.querySelector(".bi-moon");
let night_toogle = false;
localStorage.getItem("dark")
  ? (night_toogle = false)
  : (night_toogle = localStorage.getItem("dark"));
function night_light() {
  light.classList.toggle("d-none");
  night.classList.toggle("d-none");
  localStorage.setItem("dark", night_toogle);
  if (night_toogle) {
    document.documentElement.style.setProperty("--black", "black");
    document.documentElement.style.setProperty("--white", "white");
  } else {
    document.documentElement.style.setProperty("--black", "white");
    document.documentElement.style.setProperty("--white", "black");
  }
  night_toogle = !night_toogle;
}