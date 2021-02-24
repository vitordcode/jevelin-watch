const header = document.querySelector('header')
const img = document.querySelector('.logo img')

window.addEventListener('scroll', () => {
    const windowTop = window.pageYOffset
    
    if( windowTop > 80) {
        header.classList.add('white')
        img.src = "img/logoDark.png"
    } else {
        header.classList.remove('white')
        img.src = "img/logo.png"
    }
})