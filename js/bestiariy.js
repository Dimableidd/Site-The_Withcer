window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
    document.querySelector('.navigation').classList.add('scroll');
    } else {
    document.querySelector('.navigation').classList.remove('scroll');
    }
    });

const burgerIcon = document.querySelector('.burger-icon');
const navList = document.querySelector('nav ul');

burgerIcon.addEventListener('click', () => {
burgerIcon.classList.toggle('active');
navList.classList.toggle('active');
});

// Получение всех монстров
const monsters = document.querySelectorAll('.creature');
const faded = document.querySelectorAll('.faded');
const char_box = document.querySelectorAll('.char_box');
const char_info = document.querySelectorAll('.char_info');
// Добавление обработчика событий для каждого монстра
monsters.forEach(monster => {
  const id = monster.querySelector('a').getAttribute('href');
  monster.addEventListener('click', (event) => {
    event.preventDefault();
    

    faded.forEach(function(block) {
        block.style.display = 'block';
        setTimeout(function(){
          block.style.opacity = 0.5;
      }, 10);
      });
      char_box.forEach(function(block) {
        block.style.display = 'block';
        setTimeout(function(){
          block.style.opacity = 1;
      }, 10);
      });
      char_info.forEach(function(block) {
        block.style.display = 'block';
      });
    // Заполнение данных о монстре
    const name = monster.querySelector('.creature-name').textContent;
    const img = monster.querySelector('img').getAttribute('src');
    const desc = monster.querySelector('a').getAttribute('data-desc');
  
    document.querySelector('.popup-title').textContent = name;
    document.querySelector('.popup-img').setAttribute('src', img);
    document.querySelector('.popup-desc').textContent = desc;

    // Показ всплывающего окна
    document.getElementById('popup').style.display = 'block';
  });
});


const close = document.querySelectorAll('.char_box_close');

// Добавляем обработчик событий клика каждой ссылке
close.forEach(link => {
  link.addEventListener('click', function(event)  {
    event.preventDefault(); 
    faded.forEach(function(block) {
      setTimeout(function(){
        block.style.opacity = 0;
    }, 10);
    setTimeout(function(){
      block.style.display = "none";
  }, 1000);
    });

    char_box.forEach(function(block) {
      setTimeout(function(){
        block.style.opacity = 0;
    }, 10);
    setTimeout(function(){
      block.style.display = "none";
  }, 1000);
    });

    const parentElement = this.closest('.char_info');
    parentElement.forEach(child => {
      setTimeout(function(){
        child.style.display = "none";
    }, 1000);
    });
    parentElement.style.display = 'none';
  });
});


const creatureImgs = document.querySelectorAll('.creature img');
const MAX_ROTATE_X = 23;
const MAX_ROTATE_Y = 18;

const onMouseMove = (event) => {
    const card = {
        halfHeight: event.target.height/2,
        halfWidth: event.target.width/2
    }
    const degsToRotateY = (card.halfWidth - event.offsetX) * MAX_ROTATE_Y / card.halfWidth
    const degsToRotateX = (card.halfHeight - event.offsetY) * -MAX_ROTATE_X / card.halfHeight
    event.target.style.transform = `rotateX(${degsToRotateX}deg) rotateY(${degsToRotateY}deg)`
}

const applySlowTransitionAnimation = (mouseOutEvent) => {
    mouseOutEvent.target.style.transition = "400ms ease-out"
}

const applyFastTransitionAnimation = (mouseEnterEvent) => {
    mouseEnterEvent.target.style.transition = "50ms linear"
}

const resetCardPosition = (mouseOutEvent) => {
    mouseOutEvent.target.style.transform = "rotateX(0deg) rotateY(0deg)"
}

creatureImgs.forEach((cardElement) => {
    cardElement.addEventListener("mouseenter", (event) => {
        applyFastTransitionAnimation(event)
        cardElement.addEventListener("mousemove", onMouseMove)
    })

    cardElement.addEventListener("mouseout", (event) => {
        applySlowTransitionAnimation(event)
        resetCardPosition(event)
        cardElement.removeEventListener("mousemove", onMouseMove)
    })
})


    localStorage.setItem('visited', 'true');