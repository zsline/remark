const navMenu = document.querySelector('.header__nav ul');
const navMenuItem = navMenu.querySelectorAll('li');
let widthItem = navMenu.offsetWidth / navMenuItem.length;
navMenuItem.forEach((el) => {
    el.style.width = widthItem + 'px';
});
console.log(widthItem);


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



const topSlider = new Swiper('.top__slider',{
    slidesPerView: 1,
    effect: 'slide',
    speed: 1500,
    autoplay: true,
    navigation: {
        nextEl: '.top__slider--next',
        prevEl: '.top__slider--prev',
      },

});
const pauseSlider = document.querySelector('.top__slider--pause');
const playSlider = document.querySelector('.top__slider--play');
pauseSlider.addEventListener('click', function() {
    topSlider.autoplay.stop();
    this.style.display = 'none';
    playSlider.style.display = 'block';
})
playSlider.addEventListener('click', function() {
    topSlider.autoplay.start();
    this.style.display = 'none';
    pauseSlider.style.display = 'block';
})