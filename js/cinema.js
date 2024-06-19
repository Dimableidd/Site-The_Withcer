var nav = document.querySelector('.navigation');

var navPosition = nav.offsetTop;

window.onscroll = function() {
  if (window.pageYOffset > navPosition) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
};

const burgerIcon = document.querySelector('.burger-icon');
const navList = document.querySelector('nav ul');

burgerIcon.addEventListener('click', () => {
burgerIcon.classList.toggle('active');
navList.classList.toggle('active');
});

const imagesTab = document.querySelector('.header .label:first-of-type');
const videosTab = document.querySelector('.header .label:last-of-type');
const imagesSlider = document.querySelector('.izo');
const videosSlider = document.querySelector('.vid');

// По умолчанию показываем блок с изображениями
imagesSlider.style.display = 'block';
videosSlider.style.display = 'none';
imagesTab.classList.add('active');

// Обработчик события на элемент списка "Изображения"
imagesTab.addEventListener('click', function() {
  videosSlider.style.display = 'none'; // Скрываем блок с видео
  imagesSlider.style.display = 'block'; // Показываем блок с изображениями
  videosTab.classList.remove('active'); // Удаляем класс active у последнего элемента списка
  this.classList.add('active'); // Добавляем класс active текущему элементу списка
});

// Обработчик события на элемент списка "Видео"
videosTab.addEventListener('click', function() {
  imagesSlider.style.display = 'none'; // Скрываем блок с изображениями
  videosSlider.style.display = 'block'; // Показываем блок с видео
  imagesTab.classList.remove('active'); // Удаляем класс active у первого элемента списка
  this.classList.add('active'); // Добавляем класс active текущему элементу списка
});


var galleryThumbs = new Swiper('.gallery-thumbs1', {
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesVisibility: true,
  watchSlidesProgress: true
});

var galleryTop = new Swiper('.gallery-top1', {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  thumbs: {
    swiper: galleryThumbs
  },
});

var galleryThumbs = new Swiper('.gallery-thumbs2', {
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesVisibility: true,
  watchSlidesProgress: true
});

var galleryTop = new Swiper('.gallery-top2', {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  thumbs: {
    swiper: galleryThumbs
  },
  on: {
    slideChangeTransitionEnd: function () {
      var activeSlideIndex = this.realIndex;
      var activeSlide = this.slides[activeSlideIndex];
      var videoFrame = activeSlide.querySelector('.video-frame');
      if (videoFrame) {
        videoFrame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
    }
  }
});

var thumbs = document.querySelectorAll('.gallery-thumbs2 .swiper-slide2');
thumbs.forEach(function (thumb) {
  thumb.addEventListener('click', function () {
    var videoId = this.dataset.videoId;
    var slideIndex = Array.from(this.parentNode.children).indexOf(this);
    galleryTop.slideToLoop(slideIndex);
  });
});


    localStorage.setItem('visited', 'true');