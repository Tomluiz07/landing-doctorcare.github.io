const Input = document.querySelector('.menu-faketrigger')
const Nav = document.querySelector('.header-navegacao')


Input.addEventListener('click', () => {
  Nav.classList.toggle('active')
})

