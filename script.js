const menuBar = document.querySelector('.hamburger');
const Nav = document.querySelector('.sidenav');
const menuClose = document.querySelector('.closebtn');
const dropdownBtnone = document.querySelector('.item-drp1');
const dropdownBtntwo = document.querySelector('.item-drp2');
const dropdownContainerone = document.querySelector('.dropdown-container1');
const dropdownContainertwo = document.querySelector('.dropdown-container2');
const navBtns = document.querySelector('.nav-btns');
var win = window;
var docEl = document.documentElement;

function openNav(){
Nav.style.width = '70%';
}
function closeNav(){
    Nav.style.width = '0px';  
}


win.onscroll = function() {
    var sTop = (win.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
    navBtns.style.display = sTop > 30 ? 'none' : 'flex';
}

menuBar.addEventListener('click', openNav);
menuClose.addEventListener('click', closeNav);
dropdownBtnone.addEventListener('click', () => dropdownContainerone.classList.toggle('show'));
dropdownBtntwo.addEventListener('click', () => dropdownContainertwo.classList.toggle('show'));


