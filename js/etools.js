$(document).ready(function(){
	$('.bxslider').bxSlider({
		minSlides: 3,
		maxSlides: 5,
		slideWidth: 260,
		slideMargin: 10
	});

	$('.collapsible').collapsible();
    $('select').material_select();
    $('.chips').material_chip();

	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	$('a.target-burger').click(function(e){
		$('div.mobile-bg, nav.main-nav, a.target-burger').toggleClass('toggled');
			e.preventDefault();
	});

	$('.box-advanced a').click(function(e){
		$('.select-metrics, .separator-midi, .advanced-two').slideToggle(function() {
		    $('.box-advanced a').toggleClass('toggleplus');
		});
			e.preventDefault();
	});
});



