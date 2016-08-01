$(document).ready(function() {
	$('.banner-triggers ul li').on('click', function(event){
		if(!$(event.target).is('active')) {
			$(this).addClass('active').siblings().removeClass('active')
		};
	});
});