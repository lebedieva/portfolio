jQuery(function(){
	// open seacrh form init
	jQuery('div.search-block').each(function(){
		var hold = jQuery(this);
		var openLink = hold.find('.btn-search');
		var textInput = hold.find('input[type=text]');
		var searchForm = hold.find('.search-form').css({width:0});
		var flag = 0;

		openLink.on('click', function (event) {
			if(flag==0){
				searchForm.animate({width:230}, 1000);
				textInput.focus();
				flag=1;
				return false;
			}

			if(flag==1){
				searchForm.animate({width:0}, 1000);
				textInput.unbind();
				flag=0;
				return false;
			}
		});
	});

	$('.product-carousel1').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: true,
		mobileFirst: true,

		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: false,
					infinite: false,
					arrows: true
				}
			}
		]
	}); 

	$('.reviews-carousel').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: true,
		mobileFirst: true,

		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: false,
					slidesToShow: 2,
					infinite: false,
					arrows: true
				}
			}
		]
	}); 

	$('.product-carousel2').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: true,
		mobileFirst: true,

		responsive: [
			{
				breakpoint: 1230,
				settings: {
					dots: false,
					slidesToShow: 2,
					infinite: false,
					arrows: true
				}
			}
		]
	}); 

	$('.directors-carousel').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: true,
		mobileFirst: true,

		responsive: [
			{
				breakpoint: 767,
				settings: {
					dots: false,
					slidesToShow: 2,
					arrows: true
				}
			},
			{
				breakpoint: 1230,
				settings: {
					dots: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true
				}
			}
		]
	});

	$('#country').select2();

	// $('a.btn-top').click(function() {
	// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	// 		var target = $(this.hash);
	// 		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	// 		if (target.length) {
	// 			$('html, body').animate({
	// 				scrollTop: target.offset().top
	// 			}, 1000);
	// 			return false;
	// 		}
	// 	}
	// });

	$('a.bottom').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	//affix blocks
	var affixBlock = $('.aside-affix');
	if(affixBlock.length){
		affixBlock.affix({
			offset: {
				top:  affixBlock.offset().top - 10,
				bottom: function () {
					return (this.bottom = $('.footer').outerHeight(true) + 10)
				}
			}
		})
	}

	// bunch disease init
	var parentBunch = jQuery('#disease');
	jQuery('[class*="bunch"]').each(function(){
		var $this = jQuery(this),
			bunch = $this.attr('data-bunch'),
			bunchLink = $('a[data-bunch-value="' + bunch + '"]');

		bunchLink.hover(function(){
			if($this.hasClass('hover')){
				$this.removeClass('hover')
			} else{
				$this.addClass('hover')
			}
		});

		$this.hover(function(){
			if(bunchLink.hasClass('hover')){
				bunchLink.removeClass('hover')
			} else{
				bunchLink.addClass('hover')
			}
		})
	})
});