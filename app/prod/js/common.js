$(document).ready(function () {

    // scroll menu

    $(window).scroll(function () {

        // поведение хидера только на главной

        $('.header').each(function () {
            var newScroll = $(window).scrollTop();
            var tempScroll = $(this).height() - newScroll;
            if (tempScroll < 0) tempScroll = 0;
            var tempOpacity = 1 - (newScroll / ($(window).height() / 6));
            var tempOpacityBg = ((newScroll) / ($(window).height() / 4));


            $('.description').css('opacity', tempOpacity);
            //$('.bg-opacity').css('opacity',0.9+tempOpacityBg);
            $('.overlay').css('opacity', tempOpacityBg);

            //var currentOpacity = ($('.bg-opacity').css('opacity'));
            var currentOpacityOverlay = ($('.overlay').css('opacity'));

            var currentOpacity = ($('.description').css('opacity'));
            //console.log(currentOpacity);

            if (currentOpacity < 0) {
                $('section.description').css({
                    'padding-top': '0px',
                    'height': '0'
                });
            }

            if (currentOpacityOverlay >= 1) {
                // когда opacity станет >= 1, останавливаем, чтобы не выхоило 1
                $('.overlay').css('opacity', '1');
            }
        });

        if ($(window).scrollTop() >= 297) {
            $('.header').addClass('header-main');
        } else {
            $('.header').removeClass('header-main');
        }

        if ($(window).scrollTop() >= 350) {
            $('.logo-block').addClass('logo-remove');
        } else {
            $('.logo-block').removeClass('logo-remove');
        }

        if ($(window).scrollTop() > 412) {
            $('.header-main').addClass('header-fix');
            $('section.second-menu').css({'position': 'fixed','height': '90px', 'top': '10px', 'bottom': ''});
        } else {
            $('.header-main').removeClass('header-fix');
            $('section.second-menu').css({'position': 'absolute','height': '', 'bottom': '0', 'top': ''});
        }

        // поведение хидера на всех остальных

        $('.header-other').each(function () {
            var newScroll = $(window).scrollTop();
            var tempScroll = $(this).height() - newScroll;
            if (tempScroll < 0) tempScroll = 0;
            var tempOpacity = 1 - (newScroll / ($(window).height() / 6));
            var tempOpacityBg = ((newScroll) / ($(window).height() / 4));
            var currentOpacityOverlay = ($('.overlay').css('opacity'));
            var currentOpacity = ($('.description').css('opacity'));

            if (currentOpacity < 0) {
                $('section.description').css({
                    'padding-top': '0px',
                    'height': '0'
                });
            }

            if (currentOpacityOverlay >= 1) {
                // когда opacity станет >= 1, останавливаем, чтобы не выходило 1
                $('.overlay').css('opacity', '1');
            }
        });

        if ($(window).scrollTop() >= 5) {
            $('.header-other').addClass('header-main');
        } else {
            $('.header-other').removeClass('header-main');
        }

        if ($(window).scrollTop() >= 5) {
            $('.logo-block').addClass('logo-remove');
        } else {
            $('.logo-block').removeClass('logo-remove');
        }

        if ($(window).scrollTop() > 115) {

            $('.header-other').addClass('header-fix');
            $('.header-other section.second-menu').css({'position': 'fixed', 'height': '90px', 'top': '10px', 'bottom': ''});

        } else {
            $('.header-other').removeClass('header-fix');
            $('.header-other section.second-menu').css({'position': 'absolute', 'height': '', 'bottom': '0', 'top': ''});
        }

    });
    
    // высота экрана
    
    function setHeight() {
				var windowHeight = $(window).innerHeight();
        if(windowHeight < 670){
            $('.popup p').css('display', 'none');
            $('.popup .menu-list').css({'margin-top': '20px', 'margin-bottom':'10px'});
        }else{ 
            $('.popup p').css('display', 'inline'); 
            $('.popup .menu-list').css({'margin-top': '120px', 'margin-bottom':'40px'});
        }
				
    };
    setHeight();
    


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

        timeout = setTimeout(function () {
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
        if ($('.switcher').hasClass('is-open')) {
            window.initHandler = setTimeout(handler, 0);
        } else {
            window.initHandler = setTimeout(handler, 250);
        }
        //------------------------------------------------
        //window.initHandler = setTimeout( handler, 250 );
        //var $this = this;

        function handler() {
            $($this).removeClass('content-hovered_active');
            $($this).addClass('content-hovered_active');
        }
    }, function () {
        clearTimeout(window.initHandler);
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

    // переход по табам
	
	// условие, если на странице catalog-inner.html нет вкладки "description"
	
	if($('.reviews').hasClass('tab-link_active')){
		   $('.catalog-inner-tabs_content #reviews').css({'display': 'block'});
	};
	
    $('.browse-sewing-templates .tab a').click(function (e) {
        e.preventDefault();
        $(this).addClass('tab-link_active').siblings().removeClass('tab-link_active');
        var tab = $(this).attr('href');
        $('.tab-content').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(300)
			  .find('.size-table-content .size-table-inner:first-child').css({'display': 'block'});
//		if($('.reviews').hasClass('tab-link_active')){
//		   $('.catalog-inner-tabs_content #reviews').css({'display': 'block'});
//		};
    });
	
	// переход по табам на страницах кроме главной
	
	$('.tabs-block').each(function() {
		
    $(this).find('.tab a').each(function(i) {
      $(this).on('click', function(e){
       e.preventDefault(); 
		  $(this).addClass('tab-link_active').siblings().removeClass('tab-link_active')
          .closest('.tabs-block').find('.tab-content').removeClass('tab-content_active').eq(i).addClass('tab-content_active');
      });
    });
  });
    

    //------------------------------------------------------------------------
    
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
     $('[data-id = subscribe-to-news]').click(function (e) {
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
        single: true,
        width: '100%'
    });
	
	
	$('select.select-sort-popup').multipleSelect({
        single: true,
        width: '100%'
    });

    // переход по табам при смене таблицы размеров в catalog-inner-----------

    
        $('.select-sort .ms-drop').not('.ms-drop-popup').find('label').on('click', function(){
            var sel = $(this).parents('.choose-block').not('.choose-block-popup').find('option:selected').attr('href');
//         console.log("1"); 
        $('.size-table').not(sel).css({
            'display': 'none'
        }); 
			
        $('.size-table').not(sel).find('input:checked').prop('checked', false)
            $(sel).fadeIn(300);  
        $('.size-table').not(sel).find('li input[type=checkbox]+label').removeClass('marked');     

});
	
		
//	смена таблиц размеров в popup------------
		
	
//	$('.select-sort-popup .ms-drop').find('label').on('click', function(){
//		
//            var selP = $(this).parents('.choose-block').find('option:selected').attr('data-href');
////        console.log(selP);
//            
//        $('.size-table-inner').not(selP).css({
//            'display': 'none'
//        }); 
//        
//		$(selP).fadeIn(300);
//});
	
	// ------
	
	$('.det-size').each(function() {
		
      $(this).find('.select-sort-popup .ms-drop label').on('click', function(){

		  var selP = $(this).closest('.choose-block').find('option:selected').attr('data-href');
		
		$(selP).fadeIn(300).siblings().css({
            'display': 'none'
        }); ;
    });
  });
	
	//-------
    
    
    // catalog-inner, marked sizes

    //$('.size-table li input[type=checkbox]+label').on('click', function () {
    //    if ($(this).hasClass('marked')) {
    //        $(this).removeClass('marked');
    //    } else {
    //        $(this).addClass('marked');
    //    }
    //});
      

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


    // popup size-guid

    $('[data-id = size-guid]').click(function (e) {
        e.preventDefault();
        $('.overlay_size-guid').css('display', 'block');
        $('body').css('overflow', 'hidden'); // убирает основную полосу прокрутки
    })
    $('.overlay_size-guid').click(function (event) {
        e = event || window.event
        if (e.target == this) {
            $('.overlay_size-guid').css('display', 'none');
            $('body').css('overflow', 'auto'); // возвращает полосу прокрутки
        }
    })
    $('.popup__close_cross').click(function (e) {
        e.preventDefault();
        $('.overlay_size-guid').css('display', 'none');
        $('body').css('overflow', 'auto');
    });

    // popup leave-review

    $('[data-id = leave-review]').click(function (e) {
        e.preventDefault();
        $('.overlay_leave-review').css('display', 'block');
        $('body').css('overflow', 'hidden'); // убирает основную полосу прокрутки
    })
    $('.overlay_leave-review').click(function (event) {
        e = event || window.event
        if (e.target == this) {
            $('.overlay_leave-review').css('display', 'none');
            $('body').css('overflow', 'auto'); // возвращает полосу прокрутки
        }
    })
    $('.popup__close_cross').click(function (e) {
        e.preventDefault();
        $('.overlay_leave-review').css('display', 'none');
        $('body').css('overflow', 'auto');
    });
	
	// popup personal
	
	$('[data-id = personal]').click(function (e) {
        e.preventDefault();
        $('.overlay_personal').css('display', 'block');
        $('body').css('overflow', 'hidden'); // убирает основную полосу прокрутки
    })
    $('.overlay_personal').click(function (event) {
        e = event || window.event
        if (e.target == this) {
            $('.overlay_personal').css('display', 'none');
            $('body').css('overflow', 'auto'); // возвращает полосу прокрутки
        }
    })
    $('.popup__close_cross').click(function (e) {
        e.preventDefault();
        $('.overlay_personal').css('display', 'none');
        $('body').css('overflow', 'auto');
    });
	$('[data-id = forgot-password]').click(function (e) {
        e.preventDefault();
        $('.overlay_personal').css('display', 'none');
        $('body').css('overflow', 'auto');
    });
	$('[data-id = create-account]').click(function (e) {
        e.preventDefault();
        $('.overlay_personal').css('display', 'none');
        $('body').css('overflow', 'auto');
    });
	
	// popup forgot-password
	
	$('[data-id = forgot-password]').click(function (e) {
        e.preventDefault();
        $('.overlay_forgot-password').css('display', 'block');
        $('body').css('overflow', 'hidden'); // убирает основную полосу прокрутки
    })
    $('.overlay_forgot-password').click(function (event) {
        e = event || window.event
        if (e.target == this) {
            $('.overlay_forgot-password').css('display', 'none');
            $('body').css('overflow', 'auto'); // возвращает полосу прокрутки
        }
    })
    $('.popup__close_cross').click(function (e) {
        e.preventDefault();
        $('.overlay_forgot-password').css('display', 'none');
        $('body').css('overflow', 'auto');
    });
	
	// popup create-account
	
	$('[data-id = create-account]').click(function (e) {
        e.preventDefault();
        $('.overlay_create-account').css('display', 'block');
        $('body').css('overflow', 'hidden'); // убирает основную полосу прокрутки
    })
    $('.overlay_create-account').click(function (event) {
        e = event || window.event
        if (e.target == this) {
            $('.overlay_create-account').css('display', 'none');
            $('body').css('overflow', 'auto'); // возвращает полосу прокрутки
        }
    })
    $('.popup__close_cross').click(function (e) {
        e.preventDefault();
        $('.overlay_create-account').css('display', 'none');
        $('body').css('overflow', 'auto');
    });
//	$('[data-id = offer]').click(function (e) {
//        e.preventDefault();
//        $('.overlay_create-account').css('display', 'none');
//        $('body').css('overflow', 'auto');
//    });
	
	// popup offer
	
	$('[data-id = offer]').click(function (e) {
        e.preventDefault();
        $('.overlay_offer').css('display', 'block');
        $('body').css('overflow', 'hidden'); // убирает основную полосу прокрутки
    })
    $('.overlay_offer').click(function (event) {
        e = event || window.event
        if (e.target == this) {
            $('.overlay_offer').css('display', 'none');
//            $('body').css('overflow', 'auto'); // возвращает полосу прокрутки
        }
    })
    $('.popup__close_cross-offer').click(function (e) {
        e.preventDefault();
        $('.overlay_offer').css('display', 'none');
//        $('body').css('overflow', 'auto');
    });
	
	// popup return-policy
	
	$('[data-id = return-policy]').click(function (e) {
        e.preventDefault();
        $('.overlay_return-policy').css('display', 'block');
        $('body').css('overflow', 'hidden'); // убирает основную полосу прокрутки
    })
    $('.overlay_return-policy').click(function (event) {
        e = event || window.event
        if (e.target == this) {
            $('.overlay_return-policy').css('display', 'none');
            $('body').css('overflow', 'auto'); // возвращает полосу прокрутки
        }
    })
    $('.popup__close_cross-return-policy').click(function (e) {
        e.preventDefault();
        $('.overlay_return-policy').css('display', 'none');
        $('body').css('overflow', 'auto');
    });
	
	// popup guarantes
	
	$('[data-id = guarantes]').click(function (e) {
        e.preventDefault();
        $('.overlay_guarantes').css('display', 'block');
        $('body').css('overflow', 'hidden'); // убирает основную полосу прокрутки
    })
    $('.overlay_guarantes').click(function (event) {
        e = event || window.event
        if (e.target == this) {
            $('.overlay_guarantes').css('display', 'none');
            $('body').css('overflow', 'auto'); // возвращает полосу прокрутки
        }
    })
    $('.popup__close_cross-guarantes').click(function (e) {
        e.preventDefault();
        $('.overlay_guarantes').css('display', 'none');
        $('body').css('overflow', 'auto');
    });
	
	
	// popup  subscribe-to-news
	
	$('[data-id = subscribe-to-news]').click(function (e) {
        e.preventDefault();
        $('.overlay_subscribe-to-news').css('display', 'block');
        $('body').css('overflow', 'hidden'); // убирает основную полосу прокрутки
    })
    $('.overlay_subscribe-to-news').click(function (event) {
        e = event || window.event
        if (e.target == this) {
            $('.overlay_subscribe-to-news').css('display', 'none');
            $('body').css('overflow', 'auto'); // возвращает полосу прокрутки
        }
    })
    $('.popup__close_cross').click(function (e) {
        e.preventDefault();
        $('.overlay_subscribe-to-news').css('display', 'none');
        $('body').css('overflow', 'auto');
    });

	// popup  search
	
	$('[data-id =  popup-search]').click(function (e) {
        e.preventDefault();
        $('.overlay_search').css('display', 'block');
        $('body').css('overflow', 'hidden'); // убирает основную полосу прокрутки
    })
    $('.overlay_search').click(function (event) {
        e = event || window.event
        if (e.target == this) {
            $('.overlay_search').css('display', 'none');
            $('body').css('overflow', 'auto'); // возвращает полосу прокрутки
        }
    })
    $('.popup__close_cross').click(function (e) {
        e.preventDefault();
        $('.overlay_search').css('display', 'none');
        $('body').css('overflow', 'auto');
    });

	$('button.search__btn').hover(function(){
		$(this).siblings('input[type=search]').css({'border': '1px solid #ff0078', 'transition': 'border 0.25s ease'});
	}, function () {
		$(this).siblings('input[type=search]').css({'border': '1px solid #d7d7d7'});
});
    
    // popup personal login
	
	$('[data-id = personal-login]').click(function (e) {
        e.preventDefault();
        $('.overlay_personal-login').css('display', 'block');
        $('body').css('overflow', 'hidden'); // убирает основную полосу прокрутки
    })
    $('.overlay_personal-login').click(function (event) {
        e = event || window.event
        if (e.target == this) {
            $('.overlay_personal-login').css('display', 'none');
            $('body').css('overflow', 'auto'); // возвращает полосу прокрутки
        }
    })
    $('.popup__close_cross').click(function (e) {
        e.preventDefault();
        $('.overlay_personal-login').css('display', 'none');
        $('body').css('overflow', 'auto');
    });
    $('[data-id = forgot-password]').click(function (e) {
        e.preventDefault();
        $('.overlay_personal-login').css('display', 'none');
        $('body').css('overflow', 'auto');
    });
    

    // accorgion faq	

    (function () {
        $('.accordions').each(function () {
            $('.js-accord-but').on('click', function () {
                var this_ = $(this),
                    parent = this_.parents('.js-accord'),
                    blockThis = parent.find('.js-accord-block'),
                    accord = $('.js-accord'),
                    block = accord.find('.js-accord-block');

                if (!parent.hasClass('is-active')) {
                    accord.stop(true, true).removeClass('is-active');
                    block.stop(true, true).slideUp(500);
                    parent.stop(true, true).addClass('is-active');
                    blockThis.stop(true, true).slideDown(500);
                } else {
                    parent.stop(true, true).removeClass('is-active');
                    blockThis.stop(true, true).slideUp(500);
                }
                return false;
            });

        });
    })();


    // search field

    $(".js-clear-input").on("click", function () {
        $(this).parents(".js-form").find(".js-input").val("");
        //$('.ajax-menu-search-container').html('');
        $(".show-more").hide();
        $(this).fadeOut();
        return false;
    });

    $(".js-input").on("keyup", function () {
        if ($(this).val().length) {
            $(this).parents(".js-form").find(".js-clear-input").fadeIn();
        } else {
            $(this).parents(".js-form").find(".js-clear-input").fadeOut();
        }

    });


    // валидация форм


    (function () {
        var form_validate = $('.js-validate'),
//            success = $('.contact-form_success').not('.contact-form_success-subscribe'),
            success = $('.contact-form_success'),
            forms = $('.contact-form');
//            forms = $('.contact-form').not('.contact-form-subscribe');
        if (form_validate.length) {
            form_validate.each(function () {
                var form_this = $(this);
                $.validate({
                    form: form_this,
                    borderColorOnError: true,
                    scrollToTopOnError: false,
                    onValidate: function ($form) {
                        initRate();
                    },
                    onSuccess: function ($form) {
						console.log($form)
                        if ($form.hasClass('has-validation-callback')) {
                            removes($form, $form.next());
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
	

    function initRate() {
        if ($('#rate-product').find('input:checked').length) {
            $('#rate-product + span.form-error').remove();
            $('#rate-product').parents('.field').removeClass('has-error');
            $('#rate-product').parents('.field').addClass('has-success');
            
        } else {
            
            $('#rate-product').parents('.field').addClass('has-error').removeClass('has-success');
            $('#rate-product').parents('.field').append('<span class="form-error">Rate product is empty. Please try again.</span>');
        }
    }

// choose payment
	
	$("p.show-all").click(function (e) {
		e.preventDefault();
        $(this).parent('.choose-payment').toggleClass("show");
    });
	

});

// js

// popup size-guide replace size tables

function show(num){
	for (var i = 1; i < 3; i++) 
		document.getElementById ('table' + i).style.display = (i == num) ? 'block' : 'none'
};

function showE(num){
	for (var i = 3; i < 5; i++) 
		document.getElementById ('table' + i).style.display = (i == num) ? 'block' : 'none'
};

function showR(num){
	for (var i = 5; i < 7; i++) 
		document.getElementById ('table' + i).style.display = (i == num) ? 'block' : 'none'
};

// ===================================

function jShow(num){
	for (var i = 1; i < 3; i++) 
		document.getElementById ('j-table' + i).style.display = (i == num) ? 'block' : 'none'
};

function jShowE(num){
	for (var i = 3; i < 5; i++) 
		document.getElementById ('j-table' + i).style.display = (i == num) ? 'block' : 'none'
};

function jShowR(num){
	for (var i = 5; i < 7; i++) 
		document.getElementById ('j-table' + i).style.display = (i == num) ? 'block' : 'none'
};

// ===================================

function mShow(num){
	for (var i = 1; i < 3; i++) 
		document.getElementById ('m-table' + i).style.display = (i == num) ? 'block' : 'none'
};

function mShowE(num){
	for (var i = 3; i < 5; i++) 
		document.getElementById ('m-table' + i).style.display = (i == num) ? 'block' : 'none'
};

function mShowR(num){
	for (var i = 5; i < 7; i++) 
		document.getElementById ('m-table' + i).style.display = (i == num) ? 'block' : 'none'
};

// ===================================

function eShow(num){
	for (var i = 1; i < 3; i++) 
		document.getElementById ('e-table' + i).style.display = (i == num) ? 'block' : 'none'
};

function eShowE(num){
	for (var i = 3; i < 5; i++) 
		document.getElementById ('e-table' + i).style.display = (i == num) ? 'block' : 'none'
};

function eShowR(num){
	for (var i = 5; i < 7; i++) 
		document.getElementById ('e-table' + i).style.display = (i == num) ? 'block' : 'none'
};

// ===================================

function bShow(num){
	for (var i = 1; i < 3; i++) 
		document.getElementById ('b-table' + i).style.display = (i == num) ? 'block' : 'none'
};

function bShowE(num){
	for (var i = 3; i < 5; i++) 
		document.getElementById ('b-table' + i).style.display = (i == num) ? 'block' : 'none'
};

function bShowR(num){
	for (var i = 5; i < 7; i++) 
		document.getElementById ('b-table' + i).style.display = (i == num) ? 'block' : 'none'
};

// ===================================

function jnShow(num){
	for (var i = 1; i < 3; i++) 
		document.getElementById ('jn-table' + i).style.display = (i == num) ? 'block' : 'none'
};

function jnShowE(num){
	for (var i = 3; i < 5; i++) 
		document.getElementById ('jn-table' + i).style.display = (i == num) ? 'block' : 'none'
};

function jnShowR(num){
	for (var i = 5; i < 7; i++) 
		document.getElementById ('jn-table' + i).style.display = (i == num) ? 'block' : 'none'
};

// ===================================