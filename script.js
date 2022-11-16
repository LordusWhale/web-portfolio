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

const navButton = document.getElementById('nav-theme');
const smallNavButton = document.getElementById('small-nav-theme')

function toggleTheme(element) {
  let currentTheme = document.documentElement.dataset.theme
  let newTheme = currentTheme === "light" ? "dark" : "light";
  let attribute = currentTheme === "light" ? './assets/images/light.svg':'./assets/images/dark.svg'
  document.documentElement.setAttribute("data-theme", newTheme)
  smallNavButton.setAttribute('src', attribute)
  navButton.setAttribute('src', attribute);
}

navButton.addEventListener('click', toggleTheme)
smallNavButton.addEventListener('click', toggleTheme)

const background = document.querySelector("body");
document.addEventListener("scroll", (e) => {
  let scroll = window.pageYOffset;
  background.style.backgroundPositionY = scroll * 0.9 + "px";
});



const navbar = document.getElementById("nav");
const smallNav = document.getElementById("small-nav-id");
const smallNavObser = new IntersectionObserver((entries) => {
  entries.forEach((navBar) => {
    smallNav.classList.toggle("in-view", !navBar.isIntersecting);
  });
});

smallNavObser.observe(navbar);


let circle = document.getElementById("circle");
const onMouseMove = (e) => {
  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";
};
document.addEventListener("mousemove", onMouseMove);


