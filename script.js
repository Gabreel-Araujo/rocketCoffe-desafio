
let isOpen = document.querySelector('#btnMobile')
let menu = document.querySelector('.menu-desktop')

isOpen.addEventListener('click', ()=>{
    isOpen.classList.toggle('btnclose')
    menu.classList.toggle('openMenu')
})