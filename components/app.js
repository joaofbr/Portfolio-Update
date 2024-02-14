window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');

    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#e2e2e2';
        navbar.classList.add('scroll-scrolled');
    } else {
        navbar.style.backgroundColor = '#00000000';
        navbar.classList.remove('scroll-scrolled');
    }
});