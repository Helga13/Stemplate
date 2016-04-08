var flx_action_ajax = false;

function flxmd() {

	this.catalog = function() {
		var $catalog = $('#catalog');
		var $catalogList = $catalog.find('.catalog_content');
		/*Pagination*/
			var $pagination = $catalog.find('.pagination');
			var p_curpage = $pagination.data('curpage');
			var p_cntpage = $pagination.data('cntpage');

			/*if(p_cntpage > p_curpage) {*/
				$(document).on('scroll.catalog', function() {
					if(!flx_action_ajax) {
						var c_top = $catalog.offset().top;
						var c_height = $catalog.outerHeight();
						var w_scroll = $(window).scrollTop();
						var w_height = $(window).outerHeight();
						if(w_scroll+w_height > c_top+c_height) {
							$pagination = $catalog.find('.pagination');
							p_curpage = $pagination.data('curpage');
							p_cntpage = $pagination.data('cntpage');
							p_nextpage = p_curpage+1;
							
							if(p_cntpage > p_curpage) {
								$pagination.remove();
								var $link = $pagination.find('[data-page="'+p_nextpage+'"]');
								var href = $link.attr('href');

								var __f = new flxmd();
								__f.ajax(href,'catalog_list',$catalogList,true);
							}
						}
					}
				})	
			/*}*/
		/*Sort*/
			var $sort_panel = $catalog.find('form.sort_panel');
			var $selects = $sort_panel.find('select');
			var data = $sort_panel.serialize();
			var link = $sort_panel.attr('action')+'?'+data;
			var i = 0; /*костыль*/
			$selects.on('change', function() {
				i++;
				data = $sort_panel.serialize();
				link = $sort_panel.attr('action')+'?'+data;
				if(i > 3) {
					i = 0;
					var __f = new flxmd();
					__f.ajax(link,'catalog_list',$catalogList);
				}
				
			})
	}
	this.element = function() {
		/*ADD2BASK*/
			var $formAdd = $('#form_add2bask');
			$formAdd.on('submit.element', function() {
				var setID = false;
				var arIds = [];
				var dataArray = $formAdd.serializeArray();
				var data = $formAdd.serialize();
				var action = $formAdd.attr('action');

				$formAdd.removeClass('error');
				$.each(dataArray, function(e) {
					if(this.name == 'id[]') {
						setID = true;
						arIds.push(this.value);
					}
				})

				if(setID) {
					$.each($formAdd.find('input[type="checkbox"]'), function() {
						if(!$.inArray($(this).val(), arIds)) $(this).attr('disabled','disabled');
					})
					var __f = new flxmd;
					__f.resetBasket(action+'?'+data, true);
				}
				else {
					$formAdd.addClass('error');
				}
				return(false);
			})
			//set-in_basket
			$.each(FLEX_ITEMS_IN_BASKET, function(e) {
				var id = this;
				$formAdd.find('input[value="'+id+'"]').addClass('in_basket').attr('disabled','disabled');
			})
		/*Review*/
			var $reviews = $('.review-block');
			var $showMore = $('.show-rewiews');
			$showMore.on('click', function() {
				$reviews.fadeIn();
				$showMore.hide();
			})
	}
	this.ajax = function(href, form, $obj, slow) {
		if(!flx_action_ajax) {
			flx_action_ajax = true;

			var data = {FLEX_AJAX:'Y', FLEX_FORM:form};
			var $loading = $obj.siblings().find('.loading');

			$.ajax({
				url: href,
				data: data,
				type: 'get',
				dataType: 'html', 
				beforeSend: function() {
					$obj.addClass('.ajax_loading');
					$loading.fadeIn();
				},
				success: function(otvet) {
					flx_action_ajax = false;
					$obj.removeClass('.ajax_loading');
					$loading.hide();
					if(slow) {
						$obj.append(otvet);
					}
					else {
						$obj.html(otvet);
					}
					try {
						history.pushState(null, null, href);
						return;
					} catch(e) {}
					location.hash = '#' + href;
				}
			})

		}
	}
	this.main = function() {
		/*forms*/
			var $forms = $('.js-validate');
			var forms_action = false;

			if ($forms.length) {
				$forms.each(function () {
					var $form = $(this);
					$.validate({
						form: $form,
						borderColorOnError: true,
						scrollToTopOnError: false,
						onSuccess: function ($form) {
							if(!forms_action) {
								forms_action = true;
								if($form.hasClass('contact-form')) {
									var action = $form.attr('action');
									var data = $form.serialize()+'&FLEX_AJAX=Y';
									var type = $form.attr('method');
									$.ajax({
										url: action,
										data: data,
										dataType: 'html',
										type: type!=undefined&&type!=''?type:'get',
										success: function(otvet) {
											var $success = $form.siblings('.form_success');
											if(otvet == 'OK') {
												$forms.removeClass('is-active');
												$success.addClass('is-active');
											}
											else if($form.hasClass('costil-auth')) {
												$form.find('.row > div:nth-child(2)').html(otvet);
											}
											else {
												$form.html(otvet);
											}
											forms_action = false;
										}

									})
								}
								else if ($form.hasClass('customer-info')) {
									var __f = new flxmd;
									__f.orderSendForm();
								}

								return false;
							}
						}
					});
				});
			};
	}
	this.basket = function() {
		var $smallBasket = $('#smallBasket');
		var $bigBasket = $('#mainBasket');
		var $formAdd = $('#form_add2bask');
		/*remove*/
			$smallBasket.off('click.remove').on('click.remove', '.removeItemWithoutBasket', function() {
				var $b = $(this);
				var id = $b.data('id');
				var pid = $b.data('pid');
				$.post('/basket/', {id:id,basketAction:'delete'});
				$b.parents('tr').fadeOut(400, function() {
					var __f = new flxmd();
					__f.resetBasket();
					$formAdd.find('input[value="'+pid+'"]').removeClass('in_basket').removeAttr('disabled').removeAttr('checked');
				});
				return(false);
			})
			$bigBasket.off('click.remove').on('click.remove', '.removeItemWithoutBasket', function() {
				var $b = $(this);
				var id = $b.data('id');
				$.post('/basket/', {id:id,basketAction:'delete'});
				$b.parents('tr').fadeOut(400, function() {
					var __f = new flxmd();
					__f.resetBasket();
					__f.ajax('','main_basket',$bigBasket);
				});
				return(false);
			})
	}
	this.resetBasket = function(url, open) {
		var $smallBasket = $('#smallBasket');
		var $cntHeader = $('#popup__cart span');
		var data = {FLEX_AJAX: 'Y', FLEX_FORM: 'small_basket'};
		$.ajax({
			url: url,
			type: 'post',
			data: data,
			dataType: 'html',
			success: function(otvet) {
				$smallBasket.html(otvet);
				$cntHeader.text($smallBasket.find('.number-of-goods span').text());
				if(open == true) {
					setTimeout(function() {$smallBasket.addClass('cart-open');},50);
				}
			}
		});
	}
	this.articles = function() {
		var $articles = $('#articles');
		var $articlesList = $articles.find('.articles_content');
		/*Pagination*/
			var $pagination = $articles.find('.pagination');
			var p_curpage = $pagination.data('curpage');
			var p_cntpage = $pagination.data('cntpage');

			/*if(p_cntpage > p_curpage) {*/
				$(document).on('scroll.articles', function() {
					if(!flx_action_ajax) {
						var c_top = $articles.offset().top;
						var c_height = $articles.outerHeight();
						var w_scroll = $(window).scrollTop();
						var w_height = $(window).outerHeight();
						if(w_scroll+w_height > c_top+c_height) {
							$pagination = $articles.find('.pagination');
							p_curpage = $pagination.data('curpage');
							p_cntpage = $pagination.data('cntpage');
							p_nextpage = p_curpage+1;
							
							if(p_cntpage > p_curpage) {
								$pagination.remove();
								var $link = $pagination.find('[data-page="'+p_nextpage+'"]');
								var href = $link.attr('href');

								var __f = new flxmd();
								__f.ajax(href,'articles_list',$articlesList,true);
							}
						}
					}
				})	
			/*}*/
	}
	this.orderSendForm = function() {
		var $form = $('#customer-info');
		var action = $form.attr('action');
		var type = $form.attr('method');
		var data = $form.serialize()+'&FLEX_AJAX=Y';
		$.ajax({
			url: action,
			type: type != undefined && type != ''? type : 'get',
			dataType: 'html',
			data: data,
			success: function(otvet) {
				$form.html(otvet);
			}
		});
	}

	this.basket();
	this.main();
}
$(flxmd);
