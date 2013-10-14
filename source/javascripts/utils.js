// URL Splitter
var urlChecker = function(urlToCheck) {
  var subpage = window.location.href.split("/")[3];
  if ((urlToCheck == window.location.href.split("/")[2]) && subpage == null) {
    return true;
  } else {
    return false;
  }
}

var urlRedirect = function(urlToSplit, urlA, urlB) {
  if (urlChecker(urlToSplit)) {
    var redirecter = Math.floor(Math.random() * 2) + 1;
    if (redirecter == 1) {
    window.location.replace(urlA);
    } else {
    window.location.replace(urlB);
    }
  }
}

// Splitter
urlRedirect("localhost:4567", "http://www.google.com", "http://www.db.no");


$(document).ready(function() {



// Custom Guide Slideshow
var setSlideSize = function() {
  var containerWidth = $(".guide-slider-container").width();
  $(".guide-block").width(containerWidth);
  console.log("Set to width: "+containerWidth);
}

setSlideSize();

$( window ).resize(function() {
  setSlideSize();
});


var slideNumber = 0;
$("#guide-next").click(function() {
  var moveWidth = $(".guide-slider-container").width();
  slideNumber = slideNumber+1;
  console.log(slideNumber);
  console.log(moveWidth*slideNumber);
  $(".guide-slider").css('left', -moveWidth*slideNumber);
})




// Scroll To Navigation  
$('.internal a').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top-100}, 500);
});


// Guide switcher
$(".gif-play").click(function(){
  var original = $(this).data('original');
  var imgurl = $(this).attr('src').replace(/\/[^/]+$/, '/'+original);
  $(this).attr('src', imgurl);
  $(this).css('opacity', '1');
  // $(this).css('height', '400px');
});

// Sticky top menu
	var stickyNavTop = $('.top-menu-container').offset().top;  
  var stickySet = 0;  

	var stickyNav = function()	{  
		var scrollTop = $(window).scrollTop();
    var windowWidth = $(window).width();

    // Menu Sticky settings
		if (scrollTop > (stickyNavTop+150) && stickySet == 0 && windowWidth > 780) {
	    	$('.top-menu-container').addClass('sticky');
        $('.top-menu-container').css('margin-top', '-80px');
        // $('.hero-container').addClass('sticky-padding');
        $('.top-menu-container').transition({ 
          'margin-top': '0px',
          duration: 400,
          easing: 'ease-in-out' 
        });
        stickySet = 1;

			} else if (scrollTop <= (stickyNavTop)) {
	    	$('.top-menu-container').removeClass('sticky');
        // $('.hero-container').removeClass('sticky-padding');
        stickySet = 0;  
		  }
    // Scrolling elements Paralax
    // var heroTop = (scrollTop/2);
    // var menuTop = (scrollTop/6);
    // var heroOpa = (1 - (scrollTop/200));
    // $('.top-menu-container').css('top', -menuTop+"px");
    // $('.hero-text').css('top', heroTop+"px");
    // $('.hero-element').css('opacity', heroOpa);
	};

  var hasScrolled = false;

  $(window).scroll(function() {
      hasScrolled = true;
  })

  setInterval(function() {
      if (hasScrolled) {
        console.log("HasS crolled");
        hasScrolled = false;
        stickyNav();
      }
  }, 200);

  
	  
	// stickyNav();  

	// $(window).scroll(function() {  
	//     stickyNav();
	// 	});

    // Slides
    $(function(){
      $("#slides").slidesjs({
        navigation: {active: false},
        pagination: {active: false},
        play: {active: false, interval: 5000, auto: true, effect: "slide"}
       
      });

    });  


});