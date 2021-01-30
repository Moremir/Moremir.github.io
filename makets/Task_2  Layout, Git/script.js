let burgerBtn = document.querySelector('.header__burger')
let menu = document.querySelector('.header__nav-menu')
let headerMenu = document.querySelector('.header__menu')

burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active')
    menu.classList.toggle('active')
    headerMenu.classList.toggle('active')
})