// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');

// Fungsi untuk menutup navbar
function closeNavbar() {
  navbarNav.classList.remove('active');
}

// Ketika hamburger menu di klik
hamburgerMenu.onclick = (event) => {
  navbarNav.classList.toggle('active');
  event.preventDefault();
};

// Menutup navbar saat klik di luar elemen
document.addEventListener('click', function(event) {
  const targetElement = event.target;
  if (!navbarNav.contains(targetElement) && !hamburgerMenu.contains(targetElement)) {
    closeNavbar();
  }
});
