const swiperPlayers = new Swiper(".swiper__players", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper__players-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      if (number == 1) return 3;
      if (number == 2) return 4;
      if (number == 3) return 5;
      if (number == 4) return 6;
      if (number == 5) return 1;
      if (number == 6) return 2;
    },

    renderFraction: function (currentClass, totalClass, index, total) {
      return (
        '<span class="' +
        currentClass +
        '">0 ' +
        index +
        " </span>" +
        "<span> / </span>" +
        '<span class="' +
        totalClass +
        '">0 ' +
        total +
        " </span>"
      );
    },
  },

  navigation: {
    nextEl: ".swiper__players-button-next",
    prevEl: ".swiper__players-button-prev",
  },

  breakpoints: {
    769: {
      slidesPerView: 2,
    },
    1201: {
      slidesPerView: 3,
    },
  },
});

if (window.matchMedia("(max-width: 768px)").matches) {
  let flag = false;
  swiperPlayers.on("slideChange", function (e) {
    if (
      Number(
        document.querySelector(".swiper-pagination-current").textContent
      ) == 1
    ) {
      flag = true;
      document.querySelector(".swiper-pagination-current").textContent = 5;
    }
    if (
      Number(
        document.querySelector(".swiper-pagination-current").textContent
      ) == 2
    ) {
      document.querySelector(".swiper-pagination-current").textContent = 6;
    }
    if (
      Number(
        document.querySelector(".swiper-pagination-current").textContent
      ) == 3
    ) {
      document.querySelector(".swiper-pagination-current").textContent = 1;
    }
    if (
      Number(
        document.querySelector(".swiper-pagination-current").textContent
      ) == 4
    ) {
      document.querySelector(".swiper-pagination-current").textContent = 2;
    }
    if (
      Number(
        document.querySelector(".swiper-pagination-current").textContent
      ) == 5
    ) {
      if (flag)
        document.querySelector(".swiper-pagination-current").textContent = 5;
      else {
        document.querySelector(".swiper-pagination-current").textContent = 3;
      }
    }
    if (
      Number(
        document.querySelector(".swiper-pagination-current").textContent
      ) == 6
    ) {
      if (flag) {
        document.querySelector(".swiper-pagination-current").textContent = 6;
        flag = false;
      } else {
        document.querySelector(".swiper-pagination-current").textContent = 4;
      }
    }
  });
}

const swiperStagesMobile = new Swiper(".swiper__stages", {
  spaceBetween: 20,
  slidesPerView: 1,

  pagination: {
    el: ".swiper__stages-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper__stages-button-next",
    prevEl: ".swiper__stages-button-prev",
  },

  breakpoints: {
    769: {
      slidesPerView: 2,
    },
    1201: {
      slidesPerView: 3,
    },
  },
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


document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    let href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    const offsetPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});
