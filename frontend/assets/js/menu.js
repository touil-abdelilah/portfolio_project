var $window=$(window),$body=$('body');$(window).on('scroll',function(){var scroll=$(window).scrollTop();if(scroll<100){$(".sticky-header").removeClass("sticky");}else{$(".sticky-header").addClass("sticky");}});$(window).on('scroll',function(){var scroll=$(window).scrollTop();if(scroll<100){$(".seperate-sticky-bar").removeClass("sticky");}else{$(".seperate-sticky-bar").addClass("sticky");}});