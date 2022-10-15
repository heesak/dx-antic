var hamburger = document.querySelector('.hamburger')
var mobilelink = document.querySelector('.mobile-links')
var backdrop = document.querySelector('.backdrop')

function Addclass() {
    hamburger.classList.toggle('show')
    mobilelink.classList.toggle('showlinks')
    backdrop.classList.toggle('showlinks')
}