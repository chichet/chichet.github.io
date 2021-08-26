/* sticky navbar */

var navbar = document.getElementById("navbar");

window.onload = () => {
  if (window.pageYOffset >= header.offsetTop+header.offsetHeight) {
    navbar.classList.remove('hidden');
    navbar.classList.add("sticky");
  } else {
    navbar.classList.add('hidden');
    navbar.classList.remove("sticky");
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = () => toggleNavbar();
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
toggleNavbar = () => {
  // console.log(window.pageYOffset);
  if (window.pageYOffset >= header.offsetTop+header.offsetHeight) {
    navbar.classList.remove('hidden');
    navbar.classList.add("sticky");
  } else {
    navbar.classList.add('hidden');
    navbar.classList.remove("sticky");
  }
}
	
// ScrollReveal().reveal('section, article', { duration: 5000 }, { easing: 'cubic-bezier(.25,.6,.8,1)' });
