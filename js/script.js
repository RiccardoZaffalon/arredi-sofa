/* Reactive Nav  */


$(function() { $(window).on('scroll', function(){
	var scrollTop = $(window).scrollTop(),
    elementOffset = $('#slogan').offset().top,
    distance = (elementOffset - scrollTop),
    wWidth = $(window).width();

    if (wWidth > 600 && distance < 100 ) {
    	$('#main-nav').addClass('shrink');
    }

    else if (distance > 100 ) {
    	$('#main-nav').removeClass('shrink');
    };
	});
});

/* Scroll */

$(function() {
  $('a[href*=#]:not([href=#])').click(function(e) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
    e.preventDefault();
  });
});