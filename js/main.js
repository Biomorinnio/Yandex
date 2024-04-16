const swiperPlayers = new Swiper('.swiper__players', {
  loop: true,
  
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  
  pagination: {
    el: '.swiper__players-pagination',
    type: "fraction",
    formatFractionCurrent: function (number) {
      
        if(number == 1) return 3
        if(number == 2) return 4
        if(number == 3) return 5
        if(number == 4) return 6
        if(number == 5) return 1
        if(number == 6) return 2
    
  },

    renderFraction: function (currentClass, totalClass, index, total) {
      return '<span class="' + currentClass + '">0 '+ index +' </span>' +
      '<span> / </span>' +
      '<span class="' + totalClass + '">0 '+ total +' </span>';
    },
  },
  
  navigation: {
    nextEl: '.swiper__players-button-next',
    prevEl: '.swiper__players-button-prev',
  },
  
  slidesPerView: 3,
});


new WOW().init();

SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime: 1600,
  // Размер шага в пикселях
  stepSize: 70,

  // Дополнительные настройки:

  // Ускорение
  accelerationDelta: 30,
  // Максимальное ускорение
  accelerationMax: 2,

  // Поддержка клавиатуры
  keyboardSupport: true,
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll: 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Поддержка тачпада
  touchpadSupport: true,
});

function blockScroll() {
  scrollY = window.pageYOffset;
  document.body.style.top = `-${window.pageYOffset}px`;
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
}
function unblockScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  window.scrollTo(0, scrollY);
}


document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);
      
      const offsetPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});