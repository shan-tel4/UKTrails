$(document).ready(function() {
    const $navBar = $('#navbar');
  
    // Toggle menu function
    window.toggleMenu = function(button) {
      const $button = $(button);
      $button.toggleClass('is-active');
  
      if ($button.hasClass('is-active')) {
        $navBar.css('right', '0');
      } else {
        $navBar.css('right', '-250px');
      }
    };
  
    // Smooth scroll with offset for .hero-btn links
    $('a.hero-btn[href^="#"]').on('click', function(e) {
      e.preventDefault();
      const target = $($(this).attr('href'));
  
      if (target.length) {
        const offset = 100; // pixels to offset
        const top = target.offset().top - offset;
  
        $('html, body').animate({ scrollTop: top }, 600); // smooth scroll
      }
    });
});