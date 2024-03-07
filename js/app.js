window.swiper = new Swiper({
	el: '.slider__contenedor',
	slideClass: 'slider__slide',
	createElements: true,
	autoplay: {
		delay: 5000,
	},
	loop: true,
	// spaceBetween: 20, // Espacio entre slides
	pagination: true,
	navigation: true,
});
