// const menuBars = document.getElementById('menu-bars');
// const overlay = document.getElementById('overlay');
// const nav1 = document.getElementById('nav-1');
// const nav2 = document.getElementById('nav-2');
// const nav3 = document.getElementById('nav-3');
// const nav4 = document.getElementById('nav-4');
// const navItems = [nav1, nav2, nav3, nav4];
// const progress = document.querySelector('.progress-bars-wrapper');
// const progressBarPercents = [90, 90, 90, 70, 85, 85, 60, 40, 60, 40];


// Navigatie
// function navAnimation(direction1, direction2) {
//     navItems.forEach((nav, i) => { 
//         nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`);
//     });
// }

// function toggleNav() {
//     menuBars.classList.toggle('change');
//     overlay.classList.toggle('overlay-active');
//     if (overlay.classList.contains('overlay-active')) {
//         overlay.classList.replace('overlay-slide-right', 'overlay-slide-left'); 
//         navAnimation('out', 'in');
//     } else {
//         overlay.classList.replace('overlay-slide-left', 'overlay-slide-right'); 
//         navAnimation('in', 'out');
//     }
// }

// const mainFn = () => {
//     if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
//         document.querySelectorAll('.progress-percent').forEach((el, i) => {
//           el.style.width = `${progressBarPercents[i]}%`;
//           el.previousElementSibling.firstElementChild.textContent =
//             progressBarPercents[i];
//         });
//       }
//     }
    
// mainFn();

let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

scrollToTop = document.getElementById('scrollToTopBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Eventlisteners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});

window.addEventListener('scroll', () => {
    mainFn();
  });


 
  