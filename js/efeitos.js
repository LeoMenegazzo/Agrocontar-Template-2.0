$(function(){
	
	$(window).scroll(function(){
		if($(this).scrollTop()>30){
			$('.wq-header').each(function(){
				$(this).addClass("wq-header_fixo")
			}
		)}else{
			$('.wq-header').each(function(){
				$(this).removeClass("wq-header_fixo")
			})
		};
	});
	$(window).scroll();
	
	AOS.init();
	
});
