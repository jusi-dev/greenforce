import Glide from './glide.esm.js'

new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 4000,
    animationDuration: 600,
    hoverpause: false
}).mount()

// const heroScreen = document.getElementById('welcome');

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

  const offerSection = document.getElementById('what-we-offer');
  const aboutSection = document.getElementById('about-us');
  const memberSection = document.getElementById('membership');
  const joinSection = document.getElementById('join-us');

  const animationObserver = new IntersectionObserver((entries) => {
    // Check if element is intersecting with the viewport
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (entry.target === offerSection) {
          entry.target.classList.add('animate__fadeIn');
          offerSection.style.visibility = 'visible';
        } else if (entry.target === aboutSection) {
          entry.target.classList.add('animate__fadeInLeft');
          aboutSection.style.visibility = 'visible';
        } else if (entry.target === memberSection) {
          entry.target.classList.add('animate__fadeInRight');
          memberSection.style.visibility = 'visible';
        } else if (entry.target === joinSection) {
          entry.target.classList.add('animate__fadeInLeft');
          joinSection.style.visibility = 'visible';
        }
      }
    }
  }, {
    rootMargin: '-10%'
  });

  animationObserver.observe(offerSection);
  animationObserver.observe(aboutSection);
  animationObserver.observe(memberSection);
  animationObserver.observe(joinSection);
  */
  

  