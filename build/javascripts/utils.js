$(document).ready(function(){$(".internal a").on("click",function(n){n.preventDefault(),$("html,body").animate({scrollTop:$(this.hash).offset().top-100},500)});var n=$(".top-menu-container").offset().top,t=0,i=function(){var i=$(window).scrollTop(),o=$(window).width();i>n+900&&0==t&&o>780?($(".top-menu-container").addClass("sticky"),$(".top-menu-container").css("margin-top","-80px"),$(".hero-container").addClass("sticky-padding"),$(".top-menu-container").transition({"margin-top":"0px",duration:400,easing:"ease-in-out"}),t=1):n>=i&&($(".top-menu-container").removeClass("sticky"),$(".hero-container").removeClass("sticky-padding"),t=0)};i(),$(window).scroll(function(){i()}),$(function(){$("#slides").slidesjs({navigation:{active:!1},pagination:{active:!1},play:{active:!1,interval:5e3,auto:!0,effect:"slide"}})})});