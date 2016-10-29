$(document).ready(function(){

	$('.home-nav').click(function(e){
		e.preventDefault();
		// var targetItem = $(this).attr('href');
		// var content = "";

		// switch(targetItem){
		// 	case '#work2':
		// 		content = '<div class="wo-detail-item"><h1>What if there was an easy way <br>to buy local foods?</h1><div><img src="img/work-detail-img2.jpg"></div></div>';
		// 	break;
		// 	case '#work3':
		// 		content = '<div class="wo-detail-item dark-grey"><h1>What if there was an easy way <br>to buy local foods?</h1><div><img src="img/work-detail-img2.jpg"></div></div>';
		// 	break;
		// 	case '#work4':
		// 		content = '<div class="wo-detail-item dark-grey"><h1>What if there was an easy way <br>to buy local foods?</h1><div><img src="img/work-detail-img1.jpg"></div></div>';
		// 	break;
		// 	case '#work5':
		// 		content = '<div class="wo-detail-item white"><h1>What if there was an easy way <br>to buy local foods?</h1><div><img src="img/work-detail-img1.jpg"></div></div>';
		// 	break;
		// 	case '#work6':
		// 		content = '<div class="wo-detail-item white"><h1>What if there was an easy way <br>to buy local foods?</h1><div><img src="img/work-detail-img2.jpg"></div></div>';
		// 	break;

		// 	default:
		// 		content = '<div class="wo-detail-item"><h1>What if there was an easy way <br>to buy local foods?</h1><div><img src="img/work-detail-img1.jpg"></div></div>';
		// 	break;
		// }

		$('body').addClass('overlay-open');
		// $('.wo-content-inner').html(content);
		$('.page-overlay').addClass('active');
	});

	$('.po-back').click(function(e){
		e.preventDefault();
		var overlay =  $(this).closest('.page-overlay');
		overlay.addClass('close');

		setTimeout(function(){
			overlay.removeClass('active close');
			$('body').removeClass('overlay-open');
		}, 1000);
	});
})