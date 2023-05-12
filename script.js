const BtnMenu = document.querySelector('.Menu-hambu')
const NavMenu = document.querySelector('.header-navegacao')
const IMGheader = document.querySelector('.IMG-header')
BtnMenu.addEventListener('click', () => {
  NavMenu.classList.toggle('Active')
  BtnMenu.classList.toggle('img-menu')
})
BtnMenu.addEventListener('click', () =>{
  IMGheader.classList.toggle('adds')
})
