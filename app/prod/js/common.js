$(document).ready(function () {
    
    // scroll menu
    
    
$(window).scroll(function () {

    //console.log($(document).scrollTop());
    if ($(window).scrollTop() >= 0){
        $('header, header.wrapper').animate({'height':'215'},2000);
        $('.bg-opacity').animate({'height':'215', 'background-color':'rgba(0,0,0,1)'},2000);
        $('.description').animate({'padding-top':'150', 'opacity':'0'},2000);
        $('.content').animate({'padding-top':'215'},2000);
        $('header').addClass('height215');
    }
    
});
   
        
	// переход по табам
	
$('.tab a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('tab-link_active');
        $(this).addClass('tab-link_active');
        var tab = $(this).attr('href');
        $('.tab-content').not(tab).css({'display':'none'});			
        $(tab).fadeIn(300);
		
    });
	
	// scroll to top

$(window).scroll(function () {

	if ($(window).scrollTop() + $(window).height() >= ($(document).height() - 150)) {//$('#scroller').animate({'opacity':'1'},0);
	$('#scroller').addClass('is-active');
	}else {
		//$('#scroller').animate({'opacity':'0'},0);
		$('#scroller').removeClass('is-active');
	}});
		$('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 400);
	
	return false;
 });
	
	// popup
	
$('#popup__toggle').click(function(e) {
	e.preventDefault();
     $('.popup__overlay').css('display', 'block')
})
 $('.popup__overlay').click(function(event) {
    e = event || window.event
    if (e.target == this) {
        $('.popup__overlay').css('display', 'none')
    }
})
$('.popup__close').click(function(e) {
	e.preventDefault();
     $('.popup__overlay').css('display', 'none')
});
	
	// переключение языков в popup

	$('.lang a').click(function() {
        $('a').removeClass('active');
        $(this).addClass('active');
    });
	
	// сортировка в catalog свои стили
	
 	//$(function(){
	//	$('select.styled').customSelect();
	//}); 
	
	// catalog-inner слайдер с миниатюрами
	
	$('.show-image').click(function(e) {
    e.preventDefault();
    var mainImage = $(this).index(); 
     $('.show-image').removeClass('show-image-active');
    $(this).addClass('show-image-active'); 
    $('.images li').removeClass('active');
    $('.images li').eq(mainImage).addClass('active'); 
});
    
	
});