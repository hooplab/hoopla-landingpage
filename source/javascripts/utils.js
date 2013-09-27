$(document).ready(function() {

// Mobile checker
// var isMobile = {
//     Android: function() {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function() {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function() {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function() {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function() {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function() {
//         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
//     }
// };

// if( isMobile.any() ) {
//   $('.mobile-site-chooser').css('display', 'block');
// };


// Scroll To Navigation  
$('.internal a').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top-100}, 500);
});


// Div reordering
// $(window).bind("resize", listenWidth);
//     function listenWidth( e ) {
//         if($(window).width()<600)
//         {
//             console.log("Reflowiubng");
//             $(".function-text.shifter").remove().insertAfter($(".function-image"));
//         } else {
//             // $("#topLinks").remove().insertBefore($("#content"));
//         }
//     }


$(".test.one").insertAfter(".test.three");


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
	  
	stickyNav();  

	$(window).scroll(function() {  
	    stickyNav();
		});

    // Slides
    $(function(){
      $("#slides").slidesjs({
        navigation: {active: false},
        pagination: {active: false},
        play: {active: false, interval: 5000, auto: true, effect: "slide"}
       
      });
    });  
});