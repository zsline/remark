const navMenu = document.querySelector('.header__nav ul');
const navMenuItem = navMenu.querySelectorAll('li');
let widthItem = navMenu.offsetWidth / navMenuItem.length;
navMenuItem.forEach((el) => {
    el.style.width = widthItem+'px';
});


// Video 1 ===================

let video = document.querySelector('#video-1');
let playBtn = document.querySelectorAll('.play-btn-start');
let pauseBtn = document.querySelectorAll('.play-btn-pause');

playBtn.forEach((el=>{
    el.addEventListener('click', function(){
        el.style.display = 'none'; 
        video.setAttribute('controls', '');
        video.play();
    });
}));

new Swiper('.top__slider',{
    slidesPerView: 1,
    effect: 'fade',
    speed: 1500,
    autoplay: true,
    navigation: {
        nextEl: '.top__slider--next',
        prevEl: '.top__slider--prev',
      },
});