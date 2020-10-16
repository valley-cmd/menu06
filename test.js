$(function(){
	  $('.menu__btn').on('click', function(){
	    $('.menu').toggleClass('is-active');
	    $('.menu__btn').toggleClass('open');
	  });

	　$('a[href^="#"]').click(function(){

		$('.menu').removeClass('is-active');
		$('.menu__btn').removeClass('open');
		var speed = 800,
		href = $(this).attr("href"),
		target = $(href === "#" || href === "" ? 'html' : href),
		position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	　});

// 移動するとメニューが消える
 	// $('.menu__item a[href^="#"]').click(function(){
  //   $('.menu').removeClass('is-active');
  //   $('.menu__btn').removeClass('open');
 	//  });





}());


