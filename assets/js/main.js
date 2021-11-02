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
// Lottie animation for contact
let contactAnimBox = document.querySelector('.contact-left');

let contactAnimation = bodymovin.loadAnimation({
    container: contactAnimBox,
    render: 'svg',
    loop: true,
    autoplay:true,
    path: 'assets/img/contact-animation.json'
});

// lottie animation for working process homepage
let workingProcessAnimation = [
    'discussion',
    'search',
    'wireframe',
    'main-design',
    'development',
    'support'
] ;
workingProcessAnimation.forEach(elem => {
    let animationDiscussionBox = document.querySelector(`.animation-${elem}`);
    
    let animationDiscussion = bodymovin.loadAnimation({
        container: animationDiscussionBox,
        render: 'svg',
        loop: true,
        autoplay:true,
        path: `assets/img/${elem}.json`
    });
});


// Portfolio filter 

// init Isotope
var $protfolioItems = $('.portfolio-container').isotope({
    hiddenStyle: { opacity: 0 },
  });
  // filter items on li click
  $('.portfolio-filter-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $protfolioItems.isotope({ filter: filterValue });
  });

      
  $('.portfolio-filter-menu li').on( 'click', 'li', function() {
    $(this).activeClass('active').sliblings.removeClass('active');
  });


// Scroll to top


$(document).ready(function(){
    $(window).scroll(function(){
        if( $(this).scrollTop() > 250 ){
            $('#scroll-to-top').fadeIn();
        }else{
            $('#scroll-to-top').fadeOut();
        }
    });

    $('#scroll-to-top').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
});