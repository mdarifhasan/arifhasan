// Mobile toggle menu
let toggleMenu = document.querySelector('.toggle-menu');
toggleMenu.addEventListener('click',()=>{
    toggleMenu.classList.toggle('active');
});

// Sticky header
let header = document.querySelector('#header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky',window.scrollY > 90);
});

// Lottie animation for hero area
let heroImg = document.querySelector('.hero-img');

let heroAnimation = bodymovin.loadAnimation({
    container: heroImg,
    render: 'svg',
    loop: true,
    autoplay:true,
    path: 'assets/img/hero-animation.json'
})