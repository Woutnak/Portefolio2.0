
const navbar = document.getElementById('Navbar');

navbar.addEventListener('mouseout', () =>{
    const bg = navbar.dataset.bg;
    navbar.style.backgroundColor = bg;
})