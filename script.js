const navBarObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('in-view')
        }
    })
})

const navBarElements = document.querySelectorAll('.observe');
let transitionDelay = 200;
navBarElements.forEach(el=>{
    el.style.transitionDelay = `${transitionDelay}ms` 
    navBarObserver.observe(el)
    transitionDelay += 100;
})