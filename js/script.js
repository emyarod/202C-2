// smooth scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

// parallax
$(document).ready(function(){
  $('.parallax').parallax();
});

// sidenav
$(".button-collapse").sideNav();

// scrollspy
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

// pushpin
$(document).ready(function(){
  $('.table-of-contents').pushpin({ top: $('.table-of-contents').offset().top });
});