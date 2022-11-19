const openBtn = document.querySelector('#menu-open')
const closeBtn = document.querySelector('#close-menu')
const menu = document.querySelector('.site-nav')

const openMenu = () => {
  menu.style.cssText = `
    transform: translateX(0);
  `;
}

const closeMenu = () => {
  menu.style.cssText = `
    transform: translateX(-100%);
  `;
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);