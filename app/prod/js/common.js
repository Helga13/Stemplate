$(document).ready(function () {

	// scroll menu


	$(window).scroll(function () {

		//console.log($(document).scrollTop());
//		if ($(window).scrollTop() >= 0) {
//			$('header, header.wrapper').animate({
//				'height': '215'
//			}, 2000);
//			$('.bg-opacity').animate({
//				'height': '215',
//				'background-color': 'rgba(0,0,0,1)'
//			}, 2000);
//			$('.description').animate({
//				'padding-top': '150',
//				'opacity': '0'
//			}, 2000);
//			$('.content').animate({
//				'padding-top': '215'
//			}, 2000);
//			$('header').addClass('height215');
//		}

	});


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
		$('.popup__overlay').css('display', 'block')
	})
	$('.popup__overlay').click(function (event) {
		e = event || window.event
		if (e.target == this) {
			$('.popup__overlay').css('display', 'none')
		}
	})
	$('.popup__close').click(function (e) {
		e.preventDefault();
		$('.popup__overlay').css('display', 'none')
	});

	// переключение языков в popup

	$('.lang a').click(function () {
		$('a').removeClass('active');
		$(this).addClass('active');
	});

	// сортировка в catalog выпадающий список
	
	
	$('.sort-by').click(function(){
	$('.sort-dropdown').slideToggle('fast',function () {
        var disp = $('.sort-dropdown').css('display'); 
		//console.log('display:'+disp);
		//  получаем значение свойства display, то есть видим или нет выпадающий список и выводим в консоль
		var arr = $('.sort-dropdown').siblings('.sort-by').find('.arr-down');
		//console.log(arr);
		// получаем доступ к элементу с классом .arr-down и выводим в консоль
		
		if( disp == 'block' ){
			$(arr).css('transform', 'rotate(180deg)');
		}else{
			$(arr).css('transform', 'rotate(360deg)');
		}
      });
		
	});
	$('ul.sort-dropdown li').click(function(){
		var tx = $(this).html();
		$('.sort-dropdown').slideUp('fast');
		$('.sort-by span').html(tx);
		// при выборе позиции из списка возвращает стрелку в первоначальное положение
		var arr1 = $('.sort-dropdown').siblings('.sort-by').find('.arr-down');
		$(arr1).css('transform', 'rotate(360deg)');

	});
	
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