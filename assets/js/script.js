$(document).ready(function(){

	$("#my-year").fadeIn();
    $("#my-major").fadeIn("slow");
    $("#my-minor").fadeIn(3000);

    $(window).scroll(function(){
    	$("my-name").fadeOut();
    	$("my-titles").fadeOut();
    });


    $("#tdx-pic").hover(function() {
    	$("tdx-blurb").fadeIn();
    });

    $("#cmg-pic").hover(function() {
    	$("cmg-blurb").fadeIn();
    });

    $("#pinterest-pic").hover(function() {
    	$("pinterest-blurb").fadeIn();
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