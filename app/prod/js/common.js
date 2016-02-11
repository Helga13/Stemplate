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
	// работает!
	
	//$('.categories').hover(function (e) {
	//	e.preventDefault();
	//	$(this).removeClass('content-hovered_active');
	//	$(this).addClass('content-hovered_active');
	
	//},function(){
	//	$(this).removeClass('content-hovered_active');
	//}); 
	
	var timeout;
	$('.switcher').hover(function () {
		
		//Курсор мыши зашел в область навигации 
		
		var switcher = $(this).removeClass("out");
		
		timeout = setTimeout(function() {
    	switcher.addClass("is-open");
			switcher.parent('.second-menu').css('display', 'block');
  	}, 1000);

	}, function () {
		clearTimeout(timeout);
		//Потеря фокуса 
  		$(this)
			.addClass("out")
			.removeClass("is-open");
	});
	
	
	$('.categories').hover(function (e) {
		var $this = this;
		//------------------------------------------------
		if($('.switcher').hasClass('is-open')){
			window.initHandler = setTimeout( handler, 0 );
		}else{
			window.initHandler = setTimeout( handler, 250 );
		}
		//------------------------------------------------
		//window.initHandler = setTimeout( handler, 250 );
		//var $this = this;
		
		function handler() {
			$($this).removeClass('content-hovered_active');
			$($this).addClass('content-hovered_active');
		}
	}, function () {
		clearTimeout( window.initHandler );
		$('.categories').removeClass('content-hovered_active');
	});
	

	
	
	
	//$('.switcher').hover(function (e) {
	//	
	//	window.initHandler = setTimeout( handler, 400 );
	//	var $this = this;
	//	
	//	function handler() {
	//		$($this).removeClass('is-open');
	//		$($this).addClass('is-open');
	//	}
	//}, function () {
	//	clearTimeout( window.initHandler );
	//	$('.switcher').removeClass('is-open');
	//});
	
	

	
	
	//-------------------------------------------------------------------------
	// новое меню
	
//	$('.menu__btn').hover(function (e) {
//		e.preventDefault();
//		$('a').removeClass('is-active');
//		$(this).addClass('is-active');
//		
//		$(this).parent().parent().addClass('is-open');
//		
//		var tab = $(this).attr('href');
//		$('.menu__tab').not(tab).css({
//			'display': 'none'
//		});
//		$(tab).fadeIn(300);
//
//	},function(){
//		$(this).removeClass('is-active');
//		$('.menu').removeClass('is-open');
//		
//	});


	
	
	
	//-------------------------------------------------------------------------
	
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
		$('.popup__overlay').addClass('menu-open');
	//	$('body').css('overflow', 'hidden');
	})
	$('.popup__overlay').click(function (event) {
		e = event || window.event
		if (e.target == this) {
			$('.popup__overlay').removeClass('menu-open');
		//	$('body').css('overflow', 'auto');
		}
	})
	$('.popup__close').click(function (e) {
		e.preventDefault();
		$('.popup__overlay').removeClass('menu-open')
	//	$('body').css('overflow', 'auto');
	});

	// переключение языков в popup

	$('.lang a').click(function () {
		$('a').removeClass('active');
		$(this).addClass('active');
	});
	
	// popup cart
	
	$('#popup__cart').click(function (e) {
		e.preventDefault();
		$('.popup__overlay_cart').addClass('cart-open');
	//	$('body').css('overflow', 'hidden');
	})
	$('.popup__overlay_cart').click(function (event) {
		e = event || window.event
		if (e.target == this) {
			$('.popup__overlay_cart').removeClass('cart-open');
		//	$('body').css('overflow', 'auto');
		}
	})
	$('.popup__close').click(function (e) {
		e.preventDefault();
		$('.popup__overlay_cart').removeClass('cart-open')
	//	$('body').css('overflow', 'auto');
	});

	// сортировка в catalog выпадающий список
	
	
    $('select.select-sort').multipleSelect({
		single:true,
		width:'100%'
	});
    
	

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
	
	
	// accorgion faq	
	
	(function(){
		$('.accordions').each(function(){
			$('.js-accord-but').on('click', function() {
				var this_ 		= $(this),
					parent 		= this_.parents('.js-accord'),
					blockThis 	= parent.find('.js-accord-block'),
					accord 		= $('.js-accord'),
					block 		= accord.find('.js-accord-block');
				
				if (!parent.hasClass('is-active')) {
					accord.stop(true, true).removeClass('is-active');
					block.stop(true, true).slideUp(500);
					parent.stop(true, true).addClass('is-active');
					blockThis.stop(true, true).slideDown(500);
				}
				else {
					parent.stop(true, true).removeClass('is-active');
					blockThis.stop(true, true).slideUp(500);
				}
				return false;
			 });
			
		});
	})();
	
	
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
	
	
	// валидация форм


	(function(){
		var form_validate = $('.js-validate'),
			success = $('.contact-form_success'),
			forms = $('.contact-form');
		if (form_validate.length) {
			form_validate.each(function () {
				var form_this = $(this);
				$.validate({
					form : form_this,
					borderColorOnError : true,
					scrollToTopOnError : false,
					onValidate: function($form){
						
					},
//					onError : function() {
//
//      },
					onSuccess: function($form){
						if ($form.hasClass('has-validation-callback')){
							removes(forms, success);
						}
						
						return false;
					}
				});
			});
		};
	})();

	function removes(forms, success) {
		forms.removeClass('is-active');
		success.addClass('is-active');
	};
	


});