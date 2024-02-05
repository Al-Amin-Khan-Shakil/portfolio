/* mobile menu */
const portfolioLink = document.getElementById('portfolio');
const aboutMe = document.getElementById('about');
const contactForm = document.getElementById('contact');

function openNav() {
  document.getElementById('navbar').style.width = '100%';
}
function closeNav() {
  document.getElementById('navbar').style.width = '0%';
}
function checkDisplayWidth() {
  if (window.innerWidth < 768) {
    closeNav();
  }
}

window.onclick = function removeMenu(event) {
  switch (event.target) {
    case portfolioLink:
      document.getElementById('navbar').style.width = '0%';
      break;
    case aboutMe:
      document.getElementById('navbar').style.width = '0%';
      break;
    case contactForm:
      document.getElementById('navbar').style.width = '0%';
      break;
    default:
  }
};
openNav();
window.addEventListener('resize', checkDisplayWidth);
checkDisplayWidth();
/* mobile menu end */