const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('in-view')
        }
    })
}, {
    threshold: 0.8
})
let circle = document.getElementById("circle");
const onMouseMove = (e) => {
  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";
};
document.addEventListener("mousemove", onMouseMove);
const elements = document.querySelectorAll('.observe');
elements.forEach(el=>{
    observer.observe(el)
})
const img = document.getElementById('home')
document.addEventListener('scroll', (e) => {
    let scroll = window.pageYOffset;
    img.style.backgroundPositionY = scroll * 0.9 + 'px';
})

const navbar = document.getElementById('nav')
const smallNav = document.getElementById('small-nav-id');
const smallNavObser = new IntersectionObserver(entries=>{
    entries.forEach(navBar => {
        smallNav.classList.toggle('in-view', !navBar.isIntersecting)
    })
})

smallNavObser.observe(navbar);