const mobileMenuButton = document.getElementById('toggle-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  console.log(mobileMenu);
  mobileMenu.classList.toggle('custom-hidden');
});

  
