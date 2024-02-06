  
  window.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию
    
    // Scroll header ===============================

    //Записываем, сколько проскроллено по вертикали
    let scrollpos = window.scrollY;

    const header = document.querySelector('.header');
    const scroller = document.querySelector('.scroll-top');
  
    //Сколько пикселей нужно проскролить, чтобы добавить класс. Можете изменить значение
    const scrollChange = 500;
  
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



// const navMenu = document.querySelector('.header__nav ul');
// const navMenuItem = navMenu.querySelectorAll('li');
// let widthItem = navMenu.offsetWidth / navMenuItem.length;
// navMenuItem.forEach((el) => {
//     el.style.width = widthItem + 'px';
// });


//=================== Video ===================
function videoPlayer (video) {
    video.children[1].addEventListener('click', () => {
        video.children[0].pause();
        video.children[1].style.display = 'none';
        video.children[2].style.display = 'block';
    });
    video.children[2].addEventListener('click', () => {
        video.children[0].play();
        video.children[2].style.display = 'none';
        video.children[1].style.display = 'block';
    });
    video.children[3].addEventListener('click', () => {
        video.children[0].muted = false;
        video.children[3].style.display = 'none';
        video.children[4].style.display = 'block';
    });
    video.children[4].addEventListener('click', () => {
        video.children[0].muted = true;
        video.children[4].style.display = 'none';
        video.children[3].style.display = 'block';
    });
} 

if(document.querySelector('video')){
    videoPlayer (document.querySelector('.video-1'));
    videoPlayer (document.querySelector('.video-2'));
}



let playBtn = document.querySelectorAll('.play-btn-start');

playBtn.forEach((el=>{
    el.addEventListener('click', function(){
        el.style.display = 'none'; 
        el.previousElementSibling.setAttribute('controls', '');
        el.previousElementSibling.play();
    });
}));


if(document.querySelector('.top__slider')){
        const topSlider = new Swiper('.top__slider',{
        slidesPerView: 1,
        effect: 'slide',
        // speed: 1500,
        autoplay: true,
        loop: true,
        navigation: {
            nextEl: '.top__slider--next',
            prevEl: '.top__slider--prev',
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

if(document.querySelector('.customer__slider')){
    const customerSlider = new Swiper('.customer__slider',{
        spaceBetween: 40,
        slidesPerView: 1,
        effect: 'slide',
        speed: 1000,
        autoHeight: true,
        autoplay: true,
        navigation: {
            nextEl: '.customer__slider--next',
            prevEl: '.customer__slider--prev',
        },
        on: {
            init() {
                const stopSlider = document.querySelector('.customer--pause');
                const playSlider = document.querySelector('.customer--play');
                stopSlider.addEventListener('click', () => {
                    this.autoplay.stop();
                    stopSlider.style.display = 'none';
                    playSlider.style.display = 'block';
                });
                playSlider.addEventListener('click', () => {
                    this.autoplay.start();
                    playSlider.style.display = 'none';
                    stopSlider.style.display = 'block';
                });
                const customerObserver = new IntersectionObserver(
                    ([entry]) => {
                            if(entry.isIntersecting){
                                this.autoplay.start();
                            } else {
                                this.autoplay.stop();
                            }
                    },{
                        threshold: [0.8, 0.8],
                    });
                customerObserver.observe(document.querySelector('.customer__slider'));
            }
          },

    });


}

// ===== Body Overflow  ============ //
function bodyHiddenScroll(){
    document.querySelector('body').style.overflowY = 'auto';
    document.querySelector('body').style.paddingRight = '0px';
}
function bodyHiddenNoScroll(){
    document.querySelector('body').style.overflowY = 'hidden';
    document.querySelector('body').style.paddingRight = '14px';

}



// ============  Menu  ===================== //

const menu = document.querySelector('#header');
const menuOpen = document.querySelector('.header__menu');
const menuClose = document.querySelector('.close');

menuOpen.addEventListener('click', function(){
    menu.classList.add('is_open');
    bodyHiddenNoScroll();
});
menuClose.addEventListener('click', function(){
    menu.classList.remove('is_open');
    bodyHiddenScroll()
});


const openText = document.querySelectorAll('.customer__more');
const constText = document.querySelectorAll('.customer__slide--text p');
const screenWidth = window.innerWidth;
constText.forEach((el) => {
    let text = el.innerText;
    let textMin = text.substring(0, 300);
    if(screenWidth <= 960){
        el.innerHTML = textMin + '...';
    }
    el.nextElementSibling.addEventListener('click', () => {
        el.innerHTML = text;
        el.nextElementSibling.style.display = 'none';
    })
})

const openServices = document.querySelector('.services__more');
const services = document.querySelectorAll('.services-item');
if(openServices){
    openServices.addEventListener('click', () => {
        openServices.style.display = 'none';
        services.forEach((el) =>{
            el.style.display = 'block';
        });
    });
}
const openAddServices = document.querySelector('.about__info--link-more');
const addServices = document.querySelectorAll('.add-services__item');
if(openAddServices){
    openAddServices.addEventListener('click', () => {
        openAddServices.style.display = 'none';
        addServices.forEach((el) =>{
            el.style.display = 'block';
        });
    });
}
const openServicesProgress = document.querySelector('.services-process__more');
const servicesProgress = document.querySelectorAll('.services-process__item');
if(openServicesProgress){
    openServicesProgress.addEventListener('click', () => {
    openServicesProgress.style.display = 'none';
    servicesProgress.forEach((el) =>{
        el.style.display = 'block';
        el.style.paddingBottom = '41px';
    });
});
}


const itemServicesDesign = document.querySelectorAll('.design-included .services-item');
if(itemServicesDesign){
    itemServicesDesign.forEach((el) => {
        let batton = el.querySelector('.design-item__slider--btns');
        openServices.addEventListener('click', () => {
            let imageHeigth = el.querySelector('.services-item__img img').height;
            batton.style.bottom = imageHeigth / 2 - 23 + 'px';
        });
    })
}
// Count Up =============================


    function counter(item, num, time){
        const count = new CountUp( // задаем необходимые параметры
            item, // идентификатор элемента с числом
            0, // начальное число
            num, // конечное число
            0, // количество цифр после запятой
            time // продолжительность анимации в секундах
            );
            count.start();
    }

// Counts Observer ==================   
    const countObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    counter(document.querySelector('#num1'), 20, 5);
                    counter(document.querySelector('#num2'), 100, 4);
                    counter(document.querySelector('#num3'), 350, 3.5);
                    observer.unobserve(entry.target); 
                }
            });

        },{
            rootMargin: '-100px',
        });
    document.querySelectorAll('.count__title--num').forEach((el) => countObserver.observe(el));

// Video Observer ==================
    const videoObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                const video = entry.target;
                if(entry.isIntersecting){
                    video.play();
                } else {
                    video.pause();
                }
            });

        },{
            threshold: [0.8, 0.8],
            // rootMargin: '-200px',
        });
    
    
    document.querySelectorAll('video').forEach((video) => videoObserver.observe(video));
// End Video Observer ==================

// Customer Observer ==================





    const desProcessItem = document.querySelectorAll('.services-process__item--info');
    desProcessItem.forEach((el) =>{
        if(el.children[0].offsetHeight > 40){
            el.style.transform = 'translateY(-20px)'
        }
    })
});