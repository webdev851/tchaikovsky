document.addEventListener("DOMContentLoaded", function (event) {

  var slider_wrapper = new Swiper(".slider-wrapper", {
    wrapperClass: "slider-list",
    slideClass: "slider-item",
    navigation: {
      nextEl: '.next-slide',
      prevEl: '.prev-slide'
    },
    pagination: {
      type: 'bullets',
      el: '.pagination',
      clickable: true,

    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,

    },
    speed: 700,
    slidesPerView: 'auto',
    loop: true,

    on: {
      init: function () {
        var swiper_pagination_bulletwe_style = document.createElement('style'); swiper_pagination_bulletwe_style.type = 'text/css'; swiper_pagination_bulletwe_style.innerHTML =
          ` .swiper-pagination-bullet{   background:#fff;
    margin-right:8px;
    transition:.2s;
   } `;
        document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bulletwe_style);var swiper_pagination_bullethoverwe_style = document.createElement('style'); swiper_pagination_bullethoverwe_style.type = 'text/css'; swiper_pagination_bullethoverwe_style.innerHTML =
          ` .swiper-pagination-bullet:hover{   opacity:.7;
   } `;
        document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullethoverwe_style);var swiper_pagination_bullet_activehoverwe_style = document.createElement('style'); swiper_pagination_bullet_activehoverwe_style.type = 'text/css'; swiper_pagination_bullet_activehoverwe_style.innerHTML =
          ` .swiper-pagination-bullet-active:hover{   opacity:1;
   } `;
        document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullet_activehoverwe_style);var swiper_pagination_fractionwe_style = document.createElement('style'); swiper_pagination_fractionwe_style.type = 'text/css'; swiper_pagination_fractionwe_style.innerHTML =
          ` .swiper-pagination-fraction{   font-size:16px;
   } `;
        document.getElementsByTagName('head')[0].appendChild(swiper_pagination_fractionwe_style);var slide_imagewe_style = document.createElement('style'); slide_imagewe_style.type = 'text/css'; slide_imagewe_style.innerHTML =
          ` .slide-image{   transition:transform .2s;
   } `;
        document.getElementsByTagName('head')[0].appendChild(slide_imagewe_style);var slide_contentwe_style = document.createElement('style'); slide_contentwe_style.type = 'text/css'; slide_contentwe_style.innerHTML =
          ` .slide-content{   transition:opacity .2s;
   } `;
        document.getElementsByTagName('head')[0].appendChild(slide_contentwe_style);$('.slider-item').on('mouseover',function() {
          $(this).find('.slide-image').css({
            'transform':'scale(1.1)',
          });
          $(this).find('.slide-content').css({
            'opacity':'.8',
          });
        });
        $('.slider-item').on('mouseout',function() {
          $(this).find('.slide-image').css({
            'transform':'scale(1)',
          });
          $(this).find('.slide-content').css({
            'opacity':'1',
          });
        });

      },
    },
  });

});


const header = document.querySelector('.navbar'),
      headerOffset = header.offsetTop,
      burger = document.querySelector('.burger'),
      menu = document.querySelector('.nav-menu'),
      dropdownItems = document.querySelectorAll('.dropdown-menu');

let lastScrollY = window.pageYOffset;
const firstSectionHeight = document.querySelector('.section-hero').offsetHeight;

window.addEventListener('scroll', () => {
  const currentScrollY = window.pageYOffset;
  let opacity = Math.min(currentScrollY / firstSectionHeight, 0.8);

  header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;

  if (currentScrollY > lastScrollY) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }

  lastScrollY = currentScrollY;
});


burger.addEventListener('click', () => {
  menu.classList.toggle('opened')
})

dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    const dropListMenu = item.querySelector('.drop-list-menu.w-dropdown-list')

    // Закрыть все открытые меню
    document.querySelectorAll('.drop-list-menu.w-dropdown-list.opened').forEach(openedMenu => {
      if (openedMenu !== dropListMenu) {
        openedMenu.classList.remove('opened')
      }
    });

    // Переключить класс opened у текущего меню
    if (dropListMenu) {
      dropListMenu.classList.add('opened')
    }
  })
})


var swiper = new Swiper(".mainHeroSwiper", {
  slidesPerView: 1,
  //spaceBetween: 30,
  //centeredSlides: true,
  grabCursor: true,
  loop: true,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

Fancybox.bind("[data-fancybox]", {
  Carousel: {
    infinite: false,
  },
});
