// toggle button *******************

// function move(){
//     const links=document.querySelector(".nav-links");
//     links.classList.toggle("move")
// };

// ***********************************




// jaquray **************************

$(document).ready(function () {

    // scroll ***
    $(window).on('scroll', function(){
        if ($(window).scrollTop()) {
        $(".nav-box").addClass('scroll');
        }else{
        $(".nav-box").removeClass('scroll');
        }
    });


    // toggle anim ***
    $("#toggle-btn").click(function () {
        $(".nav-links").toggleClass("move");
        $(".line-1").toggleClass("iconanim1");
        $(".line-2").toggleClass("iconanim2");
        $(".line-3").toggleClass("iconanim3");
    });
});

// ***********************************


   
// slide 1 *******************

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  effect: "flip",
  autoplay:{
    delay:4000,
    disableOnInteraction: true,
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

// ***********************************


// scroll *******************

AOS.init({
  duration: 1000
});

// ***********************************



// type ******************* https://github.com/mattboldt/typed.js
var typed = new Typed('#element', {
  strings: ["Grocery Item", "Diary<br> Products","Chocolates","Juices<br>Beverages","Oils<br>Honey"],
  typeSpeed: 100,
  backSpeed: 150,
  loop: true,
  fadeOut: true,
});

// ***********************************


// slide 2 *******************

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay:{
    delay:4000,
    disableOnInteraction: true,
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

});