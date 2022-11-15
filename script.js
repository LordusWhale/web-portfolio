const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('in-view')
        }
    })
}, {
    threshold: 0.8
})

const elements = document.querySelectorAll('.observe');
elements.forEach(el=>{
    observer.observe(el)
})
const img = document.getElementById('home')
document.addEventListener('scroll', (e) => {
    let scroll = window.pageYOffset;
    img.style.backgroundPositionY = scroll * 0.9 + 'px';
})