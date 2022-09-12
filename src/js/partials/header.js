
$(document).ready(function () {
	$('.sh-burger').click(function () {
		$(this).toggleClass('sh-burger--active');
		$('.menu__list').toggleClass('menu__list--visible');
		
		$('body').toggleClass('body-fixed');
	});
});