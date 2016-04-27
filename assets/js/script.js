$(document).ready(function(){
	$("#my-name").hide(0).delay(250).fadeIn(5000);
	$("#my-year").hide(0).delay(250).fadeIn(5000);
    $("#my-major").hide(0).delay(250).fadeIn(5000);
    $("#my-minor").hide(0).delay(250).fadeIn(5000);
    $(".blurb").fadeTo(0, 0);

    // $(window).scroll(function(){
    // 	$("#my-name").fadeOut();
    // 	$("#my-titles").fadeOut();
    // });


    $("#tdx-pic").hover(function() {
    	$("#tdx-blurb").fadeTo(5000,100);
    });

    $("#cmg-pic").hover(function() {
    	$("#cmg-blurb").fadeTo(5000,100);
    });

    $("#pinterest-pic").hover(function() {
    	$("#pinterest-blurb").fadeTo(5000,100);
    });

	if ($('#back-to-top').length) {
	    var scrollTrigger = 100, // px
	        backToTop = function () {
	            var scrollTop = $(window).scrollTop();
	            if (scrollTop > scrollTrigger) {
	                $('#back-to-top').addClass('show');
	            } else {
	                $('#back-to-top').removeClass('show');
	            }
	        };
	    backToTop();
	    $(window).on('scroll', function () {
	        backToTop();
	    });
	    $('#back-to-top').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
	}
});