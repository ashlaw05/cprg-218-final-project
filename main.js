const navToggle = document.getElementById('nav-toggle');
const menuList = document.getElementById('Navbar');
navToggle.addEventListener('click', function(){
    menuList.classList.toggle('active');
});