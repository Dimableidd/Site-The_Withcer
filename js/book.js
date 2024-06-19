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

    localStorage.setItem('visited', 'true');