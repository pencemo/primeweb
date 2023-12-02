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


   
// slide *******************

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