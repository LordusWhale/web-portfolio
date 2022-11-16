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

const button = document.getElementById('button');

button.addEventListener('click', () => {
  let currentTheme = document.documentElement.dataset.theme
  let newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme)
})

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


