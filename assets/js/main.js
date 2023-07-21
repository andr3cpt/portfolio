const navContainer = document.querySelector('.nav-container')
const menu = document.querySelector('.menu')
const closeMenu = document.querySelector('.close')

menu.addEventListener('click', () => {
    navContainer.classList.add('open-nav')
})

closeMenu.addEventListener('click', () => {
    navContainer.classList.remove('open-nav')
})


