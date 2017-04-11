

	$(function () {
		$('nav__sublist').hide().removeClass('nav__sublist');
		$('nav__list').hover(function () {
			$('ul', this).stop().slideToggle(200);
		});
	});
