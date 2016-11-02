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

		       	var projectWrapper = $('.po-detail-item').find('.projects-wrapper');
		       	if(projectWrapper.length > 0){
		       		setTimeout(function(){
		       			projectWrapper.addClass('loaded');
		       		}, 500);
		       	}
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

	$('.po-detail-item').scroll(function() {
		if ($(this).scrollTop()>80){
			$('.navbar-right').hide();
		}else
		{
			$('.navbar-right').show();
		}
 	});

 	$('.po-back').hover(function(){
 		$('.navbar-brand').css('color','#fff');
 	}, function(){
 		$('.navbar-brand').removeAttr('style');
 	});
})

function resetMobileMenu(){
	$('body').removeClass('open');
	$('.po-detail-item').scrollTop(0);
}