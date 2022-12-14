const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  {
    threshold: 0.8,
  }
);

const elements = document.querySelectorAll(".observe");
elements.forEach((el) => {
  observer.observe(el);
});

const navButton = document.getElementById("nav-theme");
const smallNavButton = document.getElementById("small-nav-theme");
const icons = document.getElementById("icons");
function toggleTheme() {
  let currentTheme = document.documentElement.dataset.theme;
  let newTheme = currentTheme === "light" ? "dark" : "light";
  let attribute =
    currentTheme === "light"
      ? "./assets/images/light.svg"
      : "./assets/images/dark.svg";
  icons.style.filter = currentTheme === "light" ? "invert(0)" : "invert(1)";
  document.documentElement.setAttribute("data-theme", newTheme);
  smallNavButton.setAttribute("src", attribute);
  navButton.setAttribute("src", attribute);
}

navButton.addEventListener("click", toggleTheme);
smallNavButton.addEventListener("click", toggleTheme);


const smallNav = document.getElementById("small-nav-id");
let prev = 0;
document.addEventListener("scroll", (e) => {
  if (window.pageYOffset > prev) {
    smallNav.classList.remove("in-view");
  } else {
    smallNav.classList.add("in-view");
  }
  if (window.pageYOffset === 0) {
    smallNav.classList.remove("in-view");
  }
  prev = window.pageYOffset;
});

let circle = document.getElementById("circle");
const onMouseMove = (e) => {
  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";
};
document.addEventListener("mousemove", onMouseMove);
