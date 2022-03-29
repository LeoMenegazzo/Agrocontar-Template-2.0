$(document).ready(function() {

	// $(".wq-banner").owlCarousel({
	// 	items:1,
	// 	loop:true,
	// 	nav: false,
	// 	autoplay:true,
	// 	autoplayTimeout:5000,
	// 	autoplayHoverPause:true,
	// 	smartSpeed:1000,
	// 	navText:false,
	// 	navText: [ '<span class="flaticon-arrow-left"></span>', '<span class="flaticon-arrow-right"></span>' ],
	// });

	$(".wq-carousel_empresa").owlCarousel({
		items:1,
		loop:false,
		nav: false,
		navText:false,
		responsiveClass:true,
		smartSpeed:750,
	});

	$(".wq-carousel_servicos").owlCarousel({
		items:1,
		loop:false,
		nav: false,
		margin:20,
		navText:false,
		responsiveClass:true,
		smartSpeed:750,
		responsive:{
			0:{
				items:2
	        },
			500:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});

	$(".wq-carousel_clientes").owlCarousel({
		items:4,
		margin:40,
		loop:true,
		nav: false,
		navText: [ '<span class="flaticon-arrow-left"></span>', '<span class="flaticon-arrow-right"></span>' ],
		responsiveClass:true,
		smartSpeed:750,
		responsive:{
			0:{
				items:2,
				margin:10
			},
			500:{
				items:3,
				margin:20
			},
			740:{
				items:4,
				margin:30
			},
			1000:{
				items:4
			}
		}
	});



});
