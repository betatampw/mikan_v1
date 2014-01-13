/*function showHideBtnScroll() {
	if (parseInt($(window).scrollTop()) > 100) {
		$('#btnScrollTop').fadeIn(400);
	}
	else {
		$('#btnScrollTop').fadeOut(200);
	}
}
window.onscroll = function() {
	showHideBtnScroll();
}*/
/*
$("a[href^=#]").click(function(){
	event.preventDefault();
	target = $($(this).attr("href"));
	if(target.length>0){
		$('html, body').animate({scrollTop:target.offset().top}, 'slow', function(){});
	}
});	
*/

ymaps.ready(function () {
    var myMap = new ymaps.Map('YMapsID', {
            center: [56.349549,41.282364],
            zoom: 16,
            controls: ['zoomControl', 'fullscreenControl']
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'http://betatampw.github.io/mikan_v1/files/images/marker_v3.png',
            iconImageSize: [24, 44],
            iconImageOffset: [-10, -42]
        });

    myMap.geoObjects.add(myPlacemark);
});

	
