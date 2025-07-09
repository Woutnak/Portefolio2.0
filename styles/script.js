const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animation des barres du burger (optionnel)
    burger.classList.toggle('toggle');
  });
