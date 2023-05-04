import Glide from './glide.esm.js'

new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 4000,
    animationDuration: 600,
    hoverpause: false
}).mount()

const intro = document.getElementById('intro');
const nav = document.getElementById('nav');
const hero = document.getElementById('hero');

/*
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });

  const burgerMenu = document.getElementById('burger-menu');
  const navLinks = document.getElementById('nav-links');
  const children = burgerMenu.querySelectorAll('.bar');
  const navItems = document.querySelector('.nav-items');
  const navChildren = navItems.querySelectorAll('li');
  // navLinks.style.display = "none";

  navLinks.style.transform = "translateY(-100vh)";
  
  burgerMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        navLinks.style.transform = "translateY(0vh)"
        children.forEach(child => {
            child.classList.add('bg-zinc-700');
        });
    } else {
        navLinks.style.transform = "translateY(-100vh)";
        children.forEach(child => {
            child.classList.remove('bg-zinc-700');
        });
    }
  });


  navChildren.forEach(child => {
    child.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navLinks.style.transform = "translateY(-100vh)";
        children.forEach(child => {
            child.classList.remove('bg-zinc-700');
        });
    })
  })
*/

  const animationObserver = new IntersectionObserver((entries) => {
    // Check if element is intersecting with the viewport
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (entry.target === intro) {
          entry.target.classList.add('animate__fadeIn');
        } /*else if (entry.target === aboutSection) {
          entry.target.classList.add('animate__fadeInLeft');
          aboutSection.style.visibility = 'visible';
        } else if (entry.target === memberSection) {
          entry.target.classList.add('animate__fadeInRight');
          memberSection.style.visibility = 'visible';
        } else if (entry.target === joinSection) {
          entry.target.classList.add('animate__fadeInLeft');
          joinSection.style.visibility = 'visible';
        }*/
      }
    }
  });

  document.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop >= 100) {
      nav.classList.add('bg-forest-green');
    } else {
      nav.classList.remove('bg-forest-green');
    }
  })

  animationObserver.observe(intro);
  

  