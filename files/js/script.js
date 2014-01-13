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
            center: [55.751574, 37.573856],
            zoom: 9
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../images/marker.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
        });

    myMap.geoObjects.add(myPlacemark);
});

	
