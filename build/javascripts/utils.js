var urlChecker=function(t){var o=window.location.href.split("/")[3];return t==window.location.href.split("/")[2]&&null==o?!0:!1},urlRedirect=function(t,o,i){if(urlChecker(t)){var n=Math.floor(2*Math.random())+1;1==n?window.location.replace(o):window.location.replace(i)}};urlRedirect("localhost:4567","http://www.google.com","http://www.db.no"),$(document).ready(function(){var t=function(){var t=$(".guide-slider-container").width();$(".guide-block").width(t),console.log("Set to width: "+t)};t(),$(window).resize(function(){t()});var o=0;$("#guide-next").click(function(){var t=$(".guide-slider-container").width();o+=1,console.log(o),console.log(t*o),$(".guide-slider").css("left",-t*o)}),$(".internal a").on("click",function(t){t.preventDefault(),$("html,body").animate({scrollTop:$(this.hash).offset().top-100},500)}),$(".gif-play").click(function(){var t=$(this).data("original"),o=$(this).attr("src").replace(/\/[^/]+$/,"/"+t);$(this).attr("src",o),$(this).css("opacity","1")});var i=$(".top-menu-container").offset().top,n=0,e=function(){var t=$(window).scrollTop(),o=$(window).width();t>i+150&&0==n&&o>780?($(".top-menu-container").addClass("sticky"),$(".top-menu-container").css("margin-top","-80px"),$(".top-menu-container").transition({"margin-top":"0px",duration:400,easing:"ease-in-out"}),n=1):i>=t&&($(".top-menu-container").removeClass("sticky"),n=0)},a=!1;$(window).scroll(function(){a=!0}),setInterval(function(){a&&(console.log("HasS crolled"),a=!1,e())},200),$(function(){$("#slides").slidesjs({navigation:{active:!1},pagination:{active:!1},play:{active:!1,interval:5e3,auto:!0,effect:"slide"}})})});