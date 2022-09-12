$(document).ready(function () {
   // $("input[name='phone']").mask(" +7 (999) 999-99-99");
   $('.js-collect-slider').slick({
		infinite: true,
		arrows: true,
		slidesToScroll: 5,
      slidesToShow:5,
		speed: 600,
		variableWidth: false,
		autoplay: true,
		autoplaySpeed: 2500,
		speed: 1500,
      prevArrow: '<button type="button" class="collect-arrow collect-arrow--prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L2 8L9 15" stroke="#11243E" stroke-width="2"/></svg></button>',
		nextArrow: '<button type="button" class="collect-arrow collect-arrow--next"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L2 8L9 15" stroke="#11243E" stroke-width="2"/></svg></button>',

		responsive: [
			{
			  breakpoint: 900,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			},
			{
			  breakpoint: 380,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			}
		]
	});
	$('.tabs-triggers__item').click(function(e){
		e.preventDefault();


		$(this).addClass('tabs-triggers__item--active').siblings().removeClass('tabs-triggers__item--active');
		var id=$(this).index();
		$(this).closest('.tabs').find('.tabs-content__item').removeClass('tabs-content__item--active').eq(id).addClass('tabs-content__item--active');
	});

	$('.js-product-card-steps').slick({
		infinite: false,
		arrows: false,
		slidesToScroll: 1,
		slidesToShow:1,
		variableWidth: false,
		speed: 600,
		fade: true
	});
	$(".js-slick-next").on('click', function(){
		$(this).closest('.slick-slider').slick('slickNext');
	});
	$(".js-slick-prev").on('click', function(){
		$(this).closest('.slick-slider').slick('slickPrev');
	});


	$('.js-simple-select').each(function (index) {
		var placeholder = $(this).attr('data-placeholder');
		if (placeholder.length > 0) {
			$(this).addClass('simple-select--placeholder-selected');
		}

		$(this).select2({
			language: 'ru',
			theme: 'custom-theme',
			minimumResultsForSearch: Infinity,
			width: '100%',
			dropdownParent: $(this).siblings('.simple-select-items-wrapper')
		}).on('select2:open', function (e) {
			$(this).siblings('.simple-select-items-wrapper').addClass('simple-select-items-wrapper--show');
		}).on('select2:closing', function (e) {
			if ($(this).attr('data-close-anvaliable') !== '1') {
				e.preventDefault();
				var $this = $(this);
				$(this).attr('data-close-anvaliable', '1');
				$(this).siblings('.simple-select-items-wrapper').removeClass('simple-select-items-wrapper--show');
				setTimeout(function () {
					$this.select2('close');
				}, 550);
			}
			else {
				$(this).attr('data-close-anvaliable', '2');
			}
			//$(this).select2('close');

		}).on('select2:select', function (e) {
			$(this).removeClass('simple-select--placeholder-selected');
		});
	});




	$('.js-open-modal').on('click', function () {
		$.fancybox.open({
			src: $(this).attr('data-src'),

			type: 'inline',
			opts: {
				//speed: 600,
				//transitionDuration: 700,
				autoFocus: false,
				backFocus: false,
				baseClass: 'fancybox-default-modal',
				touch: false,

				afterClose: function () {

				}
			}

		});
	});





});


