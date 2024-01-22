  // Scroll header ===============================

    //Записываем, сколько проскроллено по вертикали
    let scrollpos = window.scrollY;

    const header = document.querySelector('.header');
    const scroller = document.querySelector('.scroll-top');
  
    //Сколько пикселей нужно проскролить, чтобы добавить класс. Можете изменить значение
    const scrollChange = 2860;
  
    //Функция, которая будет добавлять класс
    const add_class_on_scroll = () => header.classList.add('scroll');
    const add_clas_scroll = () => scroller.classList.add('scroll');
    const remove_class_on_scroll = () => header.classList.remove('scroll');
    const remove_class_scroll = () => scroller.classList.remove('scroll');
  
    //Отслеживаем событие "скролл"
    if(header){
      window.addEventListener('scroll', function() { 
        scrollpos = window.scrollY;
  
      //Если прокрутили больше, чем мы указали в переменной scrollChange, то выполняется функция добавления класса
          if (scrollpos >= scrollChange) { add_class_on_scroll(), add_clas_scroll() }
        if (scrollpos <= scrollChange) { remove_class_on_scroll(), remove_class_scroll() }
      })
    }


    document.querySelector('.scroll-top').onclick = () => {
        window.scrollTo(pageYOffset, 0);
    }



const navMenu = document.querySelector('.header__nav ul');
const navMenuItem = navMenu.querySelectorAll('li');
let widthItem = navMenu.offsetWidth / navMenuItem.length;
navMenuItem.forEach((el) => {
    el.style.width = widthItem + 'px';
});


// Video 1 ===================

let playBtn = document.querySelectorAll('.play-btn-start');

playBtn.forEach((el=>{
    el.addEventListener('click', function(){
        el.style.display = 'none'; 
        el.previousElementSibling.setAttribute('controls', '');
        el.previousElementSibling.play();
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
if(document.querySelector('.customer__slider')){
    const customerSlider = new Swiper('.customer__slider',{
        spaceBetween: 40,
        slidesPerView: 1,
        effect: 'slide',
        speed: 1500,
        autoplay: true,
        navigation: {
            nextEl: '.customer__slider--next',
            prevEl: '.customer__slider--prev',
        },

    });
    const pauseSlider = document.querySelector('.top__slider--pause');
    const playSlider = document.querySelector('.top__slider--play');
    if(pauseSlider){
            pauseSlider.addEventListener('click', function() {
            topSlider.autoplay.stop();
            this.style.display = 'none';
            playSlider.style.display = 'block';
        }) 
    }
    if(playSlider){
        playSlider.addEventListener('click', function() {
        topSlider.autoplay.start();
        this.style.display = 'none';
        pauseSlider.style.display = 'block';
    })   
    }

}
