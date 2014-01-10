function showHideBtnScroll() {
	if (parseInt($(window).scrollTop()) > 100) {
		$('#btnScrollTop').fadeIn(400);
	}
	else {
		$('#btnScrollTop').fadeOut(200);
	}
}
window.onscroll = function() {
	showHideBtnScroll();
}
/*
$("a[href^=#]").click(function(){
	event.preventDefault();
	target = $($(this).attr("href"));
	if(target.length>0){
		$('html, body').animate({scrollTop:target.offset().top}, 'slow', function(){});
	}
});	
*/


	
