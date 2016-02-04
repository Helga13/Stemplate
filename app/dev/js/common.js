$(document).ready(function () {

	// scroll menu

	$(window).scroll(function () {
		
		// поведение хидера только на главной
		
		$('.header').each(function(){
		var newScroll = $(window).scrollTop();
		var tempScroll = $(this).height() - newScroll;
		if(tempScroll < 0) tempScroll = 0;
		var tempOpacity = 1 - (newScroll / ($(window).height() / 6));
		var tempOpacityBg = ((newScroll) / ($(window).height() / 4));
		
		
		$('.description').css('opacity',tempOpacity);
		//$('.bg-opacity').css('opacity',0.9+tempOpacityBg);
		$('.overlay').css('opacity',tempOpacityBg);
			
		//var currentOpacity = ($('.bg-opacity').css('opacity'));
		var currentOpacityOverlay = ($('.overlay').css('opacity'));
			
		var currentOpacity = ($('.description').css('opacity'));
			//console.log(currentOpacity);

			if 	(currentOpacity < 0){
				$('section.description').css({'padding-top':'0px', 'height': '0'});
			}
			
			if 	(currentOpacityOverlay >= 1){ 				
				// когда opacity станет >= 1, останавливаем, чтобы не выхоило 1
				$('.overlay').css('opacity','1');}
	});

		if ($(window).scrollTop() >= 297) {
			
			$('.header').addClass('header-main');
		}else{
			
			$('.header').removeClass('header-main');
		}
		
		if ($(window).scrollTop() >= 350) {
			
			$('.logo-block').addClass('logo-remove');
			
		}else{
			$('.logo-block').removeClass('logo-remove');
		}
		
		if ($(window).scrollTop() > 412) {
			
			$('.header-main').addClass('header-fix');
			
		}else{
			$('.header-main').removeClass('header-fix');
		}
		
		// поведение хидера на всех остальных
		
		$('.header-other').each(function(){
		var newScroll = $(window).scrollTop();
		var tempScroll = $(this).height() - newScroll;
		if(tempScroll < 0) tempScroll = 0;
		var tempOpacity = 1 - (newScroll / ($(window).height() / 6));
		var tempOpacityBg = ((newScroll) / ($(window).height() / 4));
		var currentOpacityOverlay = ($('.overlay').css('opacity'));	
		var currentOpacity = ($('.description').css('opacity'));

			if 	(currentOpacity < 0){
				$('section.description').css({'padding-top':'0px', 'height': '0'});
			}
			
			if 	(currentOpacityOverlay >= 1){ 				
				// когда opacity станет >= 1, останавливаем, чтобы не выходило 1
				$('.overlay').css('opacity','1');}
	});

		if ($(window).scrollTop() >= 5) {
			
			$('.header-other').addClass('header-main');
		}else{
			
			$('.header-other').removeClass('header-main');
		}
		
		if ($(window).scrollTop() >= 5) {
			
			$('.logo-block').addClass('logo-remove');
			
		}else{
			$('.logo-block').removeClass('logo-remove');
		}
		
		if ($(window).scrollTop() > 115) {
			
			$('.header-other').addClass('header-fix');
			
		}else{
		$('.header-other').removeClass('header-fix');
		}
		
		

	});
	
	// открытие меню по ховеру
	
	//$('.categories').hover(function (e) {
	//	e.preventDefault();
	//	$('.content-hovered').removeClass('tab-link_active');
	//	$(this).addClass('tab-link_active');
	//	var tab = $(this).attr('href');
	//	$('.tab-content').not(tab).css({
	//		'display': 'none'
	//	});
	//	$(tab).fadeIn(300);

	//});



	// переход по табам

	$('.tab a').click(function (e) {
		e.preventDefault();
		$('a').removeClass('tab-link_active');
		$(this).addClass('tab-link_active');
		var tab = $(this).attr('href');
		$('.tab-content').not(tab).css({
			'display': 'none'
		});
		$(tab).fadeIn(300);

	});

	// scroll to top

	$(window).scroll(function () {

		if ($(window).scrollTop() + $(window).height() >= ($(document).height() - 150)) { //$('#scroller').animate({'opacity':'1'},0);
			$('#scroller').addClass('is-active');
		} else {
			//$('#scroller').animate({'opacity':'0'},0);
			$('#scroller').removeClass('is-active');
		}
	});
	$('#scroller').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);

		return false;
	});

	// popup menu

	$('#popup__toggle').click(function (e) {
		e.preventDefault();
	//	$('.popup__overlay').css('display', 'block');
		$('.popup__overlay').addClass('menu-open');
		$('body').css('overflow', 'hidden');
	})
	$('.popup__overlay').click(function (event) {
		e = event || window.event
		if (e.target == this) {
		//	$('.popup__overlay').css('display', 'none');
			$('.popup__overlay').removeClass('menu-open');
			$('body').css('overflow', 'auto');
		}
	})
	$('.popup__close').click(function (e) {
		e.preventDefault();
	//	$('.popup__overlay').css('display', 'none')
		$('.popup__overlay').removeClass('menu-open')
		$('body').css('overflow', 'auto');
	});

	// переключение языков в popup

	$('.lang a').click(function () {
		$('a').removeClass('active');
		$(this).addClass('active');
	});

	// сортировка в catalog выпадающий список
	
	
    $('select.select-sort').multipleSelect({
		single:true
	});
    
	
	
	
//	$('.sort-by').click(function(){
//	$('.sort-dropdown').slideToggle('fast',function () {
//        var disp = $('.sort-dropdown').css('display'); 
//		//console.log('display:'+disp);
//		//  получаем значение свойства display, то есть видим или нет выпадающий список и выводим в консоль
//		var arr = $('.sort-dropdown').siblings('.sort-by').find('.arr-down');
//		//console.log(arr);
//		// получаем доступ к элементу с классом .arr-down и выводим в консоль
//		
//		if( disp == 'block' ){
//			$(arr).css('transform', 'rotate(180deg)');
//		}else{
//			$(arr).css('transform', 'rotate(360deg)');
//		}
//      });
//		
//	});
//	$('ul.sort-dropdown li').click(function(){
//		var tx = $(this).html();
//		$('.sort-dropdown').slideUp('fast');
//		$('.sort-by span').html(tx);
//		// при выборе позиции из списка возвращает стрелку в первоначальное положение
//		var arr1 = $('.sort-dropdown').siblings('.sort-by').find('.arr-down');
//		$(arr1).css('transform', 'rotate(360deg)');

//	});
	
	
	
	
	
	
	
	
	// сортировка выпадающий список в модальном
	
	//  пахало одновременно со страничной сортировкой

	// catalog-inner слайдер с миниатюрами

	$('.show-image').click(function (e) {
		e.preventDefault();
		var mainImage = $(this).index();
		$('.show-image').removeClass('show-image-active');
		$(this).addClass('show-image-active');
		$('.images li').removeClass('active');
		$('.images li').eq(mainImage).addClass('active');
	});

	// catalog-inner choose-size-dropdown

	$('.choose-size-dropdown').on('click', function () {
		if ($(this).hasClass('visible')) {
			$(this).removeClass('visible');
		} else {
			$(this).addClass('visible');
		}

	});

	// catalog-inner, marked sizes

	$('.size-table li').on('click', function () {
		if ($(this).hasClass('marked')) {
			$(this).removeClass('marked');
		} else {
			$(this).addClass('marked');
		}
	});

	// popup size-guid

	$('[data-id = size-guid]').click(function (e) {
		e.preventDefault();
		$('.overlay_size-guid').css('display', 'block')
	})
	$('.overlay_size-guid').click(function (event) {
		e = event || window.event
		if (e.target == this) {
			$('.overlay_size-guid').css('display', 'none')
		}
	})
	$('.popup__close_cross').click(function (e) {
		e.preventDefault();
		$('.overlay_size-guid').css('display', 'none')
	});
	
	
	// аккордtон faq
	
	//$('.accordion label').click(function(){
		//if($(this).siblings('input').prop('checked')){
		//if($(this).siblings('div').css({'height': 'auto', 'overflow': 'auto'})){
			//console.log($(this).siblings('input').attr('checked'));
			//$(this).siblings('div').css({'height': '0', 'overflow': 'hidden', 'padding': '0'});
			//$(this).siblings('div').slideUp();
		//}
		
	//});
	
	// search field
	
	$(".js-clear-input").on("click", function(){
		$(this).parents(".js-form").find(".js-input").val("");
		//$('.ajax-menu-search-container').html('');
		$(".show-more").hide();
		$(this).fadeOut();
		return false;
	});
	
		$(".js-input").on("keyup", function(){
		if ($(this).val().length) {
			$(this).parents(".js-form").find(".js-clear-input").fadeIn();
		}
		else {
			$(this).parents(".js-form").find(".js-clear-input").fadeOut();
		}

	});


});