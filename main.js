// nav hidding 
let navLinks = document.querySelectorAll('.nav-link');
let navcolaps = document.querySelector('.navbar-collapse.collapse');
navLinks.forEach(link => {
    link.addEventListener('click', function(){
        navcolaps.classList.remove('show');
    })
})
// Scroll to Top Button
 const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  window.onscroll = function() {
    scrollToTopBtn.style.display = (window.pageYOffset > 300) ? "block" : "none";
  };

  scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

//   aos
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
