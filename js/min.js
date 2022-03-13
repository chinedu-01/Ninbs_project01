
// Nav bar sticky at the top while scrolling down
/*$(document).ready(function() {
  $(window).scroll(function () { 

    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 100) {
      $('.nav-bar').addClass('fixed-top');
    }

    if ($(window).scrollTop() < 101) {
      $('.nav-bar').removeClass('fixed-top');
    }
  });
}); */

window.addEventListener("scroll", function(){
  var navbar = document.querySelector (".nav-bar");
  navbar.classList.toggle("fixed-top", window.scrollY > 0);
});

// Menu
 jQuery(document).ready(function() {
  jQuery('.menu').click(function(temp) { //make it work click function
  jQuery(this).toggleClass('active');
  jQuery('.nav-bar ul').toggleClass('active');
  temp.preventDefault();
  });
  }); 

  
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#top').fadeIn();
  } else {
      $('#top').fadeOut();
  }
});
$(document).ready(function() {
  $("#top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});
/*Scroll to top when arrow up clicked END*/

/* Sign in */
window.$("#btn").click(function () {
	"use strict";
	window.$("#ovrly").fadeIn();
	window.$("#login,#signin2").show();
	window.$("#login, #signin2").animate({top: "25%"});
});
window.$("#ovrly").click(function () {
	"use strict";
	window.$("#ovrly").hide();
	window.$("#login, #signin2").hide();
	window.$("#signin2").css("top", "20%");
});
window.$("#cross").click(function () {
	"use strict";
	window.$("#ovrly").hide();
	window.$("#login, #signin2").hide();
	window.$("#login, #signin2").css("top", "20%");
});

/* End Sign In */

/*  Ebook started  here */
/* ===================Slider==================== */
