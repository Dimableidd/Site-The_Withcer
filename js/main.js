const storageValue = localStorage.getItem('visited');
if (storageValue === 'true'){
  const firstBlockEl = document.getElementById('Open_site');
  const secondBlockEl = document.getElementById('container');
  firstBlockEl.classList.add('hiden');
  secondBlockEl.style.display = 'block';
  localStorage.setItem('visited', 'false');
}
particlesJS("particles-js", {
    particles: {
      number: { value: 500, density: { enable: true, value_area: 5000 } },
      color: { value: "#fc0000" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 3 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: false, speed: 0.5, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 2,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 8,
        direction: "top",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "bubble" },
        onclick: { enable: false, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

 const text_h2 = document.querySelector('#h2-id');
 const text_h3 = document.querySelector('#h3-id');

  const splitText = (el) => {
    el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
    return `<div class="word" style="position:relative;display:inline-block;">` +
        m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter' style='position:relative;display:inline-block;'>$&</div>") +
        `</div>`;
    });
    return el;
  };
  
  const split_h2 = splitText(text_h2);
  const split_h3 = splitText(text_h3);

  Array.from(split_h2.querySelectorAll('.letter')).forEach((el, idx) => {
     TweenMax.from(el, 0.5, {
      opacity: 0,
      delay: idx * 0.09,
      repeat: 0,
     })
   });
   Array.from(split_h3.querySelectorAll('.letter')).forEach((el, idx) => {
    TweenMax.from(el, 3, {
     opacity: -0.5,
     repeat: 0,
    })
  });

  if (storageValue === null || storageValue === 'false') {
    let loader = document.querySelector('.pswp__preloader__icn');
    window.addEventListener('load', () => {
    loader.classList.add('hide');
    setTimeout(() => {
      let div=document.createElement('div');
      div.className="button";
      div.innerHTML="Продолжить";
      loader.parentNode.appendChild(div);
      loader.remove();
      const btnOk = document.querySelector('.button');
      const wrapperVideo = document.getElementById('videoint');
      btnOk.addEventListener('click', function() {
        const main_block = document.querySelector('.open-main-back');
        const main_block_back = document.getElementById('particles-js');
        main_block.classList.add('hide');
        main_block_back.classList.add('hide');
        wrapperVideo.play();
      });
    }, 1000);
    
  });

  var muteBtn = document.getElementById('mute-btn');
  muteBtn.addEventListener('click', function() {
    if (wrapperVideo.muted) {
      wrapperVideo.muted = false;
    } else {
      wrapperVideo.muted = true;
    }
  });

  var speaker = document.querySelector('.speaker');
    speaker.addEventListener('click', function() {
    speaker.classList.toggle('on');
    });

  const wrapperVideo = document.getElementById('videoint');
  const firstBlockEl = document.getElementById('Open_site');
  const secondBlockEl = document.getElementById('container');
  wrapperVideo.addEventListener('ended', () => {
    firstBlockEl.classList.add('hide');
    secondBlockEl.style.display = 'block';
    setTimeout(() => {
      firstBlockEl.classList.add('hiden');
  }, 3000);
  });

  var continueBtn = document.getElementById('continue');
  continueBtn.addEventListener('click', function() {
    wrapperVideo.pause();
    wrapperVideo.currentTime = 0;
    firstBlockEl.classList.add('hide');
    secondBlockEl.style.display = 'block';
    setTimeout(() => {

      firstBlockEl.classList.add('hiden');
  }, 3000);
  });

  } 

// Скрол паралакс эффекта

const swiper = new Swiper('.slider', {
	direction: 'horizontal',
	speed: 2400,
	parallax: true,
	spaceBetween: 18,
	loop: true,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    }
});

// Бургер

const burgerIcon = document.querySelector('.burger-icon');
const navList = document.querySelector('nav ul');

burgerIcon.addEventListener('click', () => {
burgerIcon.classList.toggle('active');
navList.classList.toggle('active');
});

// Добавляем обработчик события для изменения фона навигационного меню при скролле
window.addEventListener('scroll', () => {
if (window.scrollY > 0) {
document.querySelector('.navigation').classList.add('scroll');
} else {
document.querySelector('.navigation').classList.remove('scroll');
}
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
    document.querySelector('.logo_fon').classList.add('scroll_welcome');
    } else {
    document.querySelector('.logo_fon').classList.remove('scroll_welcome');
    }
    });