jQuery(".mobile-icon, .menu a").click(function(e){
	if( jQuery(".mobile-icon").css("display") != 'none' ){
		jQuery('.mobile-icon').toggleClass('active');
		jQuery('.menu').slideToggle();
	}
});
