$(document).ready(function () {
	
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

	if ($(window).scrollTop() + $(window).height() >= ($(document).height() - 70)) {//$('#scroller').animate({'opacity':'1'},0);
	$('#scroller').addClass('is-active');
	}else {
		//$('#scroller').animate({'opacity':'0'},0);
		$('#scroller').removeClass('is-active');
	}});
		$('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 400);
		
	return false;
                                         });
	
	// popup
	
//	var p = $('.popup__overlay')
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

	
	
});