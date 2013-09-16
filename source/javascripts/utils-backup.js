$(document).ready(function() {
$('a').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});


// Sticky top menu
  var stickyNavTop = $('.top-menu-container').offset().top;  
  var stickySet = 0;  

  var stickyNav = function()  {  
    var scrollTop = $(window).scrollTop();
    var windowWidth = $(window).width();

    // Menuland
    if (scrollTop > (stickyNavTop+600) && stickySet == 0 && windowWidth > 780) {
        // $('.hero-container').css('margin-top', '80px');    
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

        // $('.hero-container').css('margin-top', '0px'); 
        stickySet = 0;  
      }

    // Scrolling elements
    // var heroTop = (scrollTop/5);
    // var heroOpa = (1 - (scrollTop/200));
   
    // $('.hero-element').css('top', heroTop+"px");
    // $('.hero-element').css('opacity', heroOpa);


  };  
    
  stickyNav();  

  $(window).scroll(function() {  
      stickyNav();
    });  

// FORM CHANGER
// $('.price-input').each(function() {
//    var elem = $(this);

//    // Save current value of element
//    elem.data('oldVal', elem.val());

//    // Look for changes in the value
//    elem.bind("propertychange keyup input paste", function(event){
//       // If value has changed...
//       if (elem.data('oldVal') != elem.val()) {
//        // Updated stored value
//        elem.data('oldVal', elem.val());

//        // Do action
//        console.log("CHANGED");
//        var totalPrice = elem.val();
//        totalPrice = totalPrice+20;
//        $('.price-output').val(totalPrice);
//      }
//    });
//  });

  // $('.event-chooser').click(function(){
  //   event.preventDefault();
  //   $(this).toggleClass('active-menu');
  //   $('.event-menu').slideToggle(100);
  // });

  // $('.user-chooser').click(function(){
  //   event.preventDefault();
  //   $(this).toggleClass('active-menu');
  //   $('.user-menu').slideToggle(100);
  // });

  $('.drop-menu').hover(function(){
    event.preventDefault();
    $(this).toggleClass('active-menu');
    $(this).next('.dropdown-menu').slideToggle(100);
  });


});