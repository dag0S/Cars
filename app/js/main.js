const tabItem = document.querySelectorAll('.tabs__btn-item'),
  tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(element => {
  element.addEventListener('click', open);
});

function open(e) {
  const tabTarger = e.currentTarget,
    button = tabTarger.dataset.button;

  tabItem.forEach(item => {
    item.classList.remove('tabs__btn-item-active');
  });
  tabTarger.classList.add('tabs__btn-item-active');

  tabContent.forEach(item => {
    item.classList.remove('tabs__content-item-active');
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item-active');
}

const menuBtn = document.querySelector('.menu__btn'),
  menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list-active');
});


const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: 'fade',
});