$(document).ready(function(){

	$('.home-nav a, a.inner-page-link').click(function(e){
		e.preventDefault();
		var url = $(this).attr('href');

		if(url == '#') return false;
		
		$.ajax({
		   url:url,
		   type:'GET',
		   success: function(result){
		   		var html = jQuery('<div>').html(result);
		   		var page = $(html).find('#pagewrapper').html();

		       	$('.po-detail-item').html(page);
		   }
		});

		$('body').addClass('overlay-open');
		$('.page-overlay').addClass('active');

		resetMobileMenu();
	});

	$('.po-back, .navbar-brand').click(function(e){
		e.preventDefault();
		var overlay = $('.page-overlay');
		overlay.addClass('close');

		setTimeout(function(){
			overlay.removeClass('active close');
			$('body').removeClass('overlay-open');
			$('.po-detail-item').html('');
		}, 1000);
	});

	$('.more-btn').click(function(){
		$('body').toggleClass('open');
	});
})

function resetMobileMenu(){
	$('body').removeClass('open');
}