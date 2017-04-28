

	// $(function () {
	// 	$('.nav__sublist').hide().removeClass('.nav__sublist');
	// 	$('.nav__list').hover(function () {
	// 		$('ul', this).stop().slideToggle(200);
	// 	});
	// });
	$(function()
	{
			$('.nav__sublist').hide();
	    $(".nav__item").hover(function(){
	        $(this).find(".nav__sublist").show()},
	        function () {
	        $(this).find(".nav__sublist").hide()
	    });
	});
