const navToggle = document.getElementById('nav-toggle');
const Navbar = document.getElementById('Navbar');

navToggle.addEventListener('click', function(){
    Navbar.classList.toggle('active');
});