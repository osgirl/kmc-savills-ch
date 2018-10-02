( function($) {

	var app =  {

		init: function(){
			this.browserDetector();
			this.magnificPopUpFunction();
			this.slickFunction();
		},

		browserDetector: function(){
			var browserName = bowser.name; 
			var browserNameLowerCase = browserName.toLowerCase();
			var browserNameTrim = browserNameLowerCase.replace(/\s+/g, '');
			$('html').addClass(browserNameTrim);
		},

		magnificPopUpFunction: function(){
			$('.popup-link').magnificPopup({
			  type: 'image',
			  removalDelay: 300,
			  mainClass: 'mfp-fade'
			});

		},

		slickFunction: function(){
  
			$('.slideshow-holder').slick({
			  infinite: true, 
			  slidesToShow: 1, 
			  slidesToScroll: 1, 
			  arrows: true, 
			  autoplay: true, 
			  fade: true,
			  autoplaySpeed: 5500, 
			  dots: true,
			  cssEase: 'linear',
			  speed: 1500,
			  asNavFor: '.slideshow-content-holder'
			});

			$('.slideshow-content-holder').slick({
			  infinite: true, 
			  slidesToShow: 1, 
			  slidesToScroll: 1, 
			  arrows: false, 
			  autoplay: true, 
			  fade: true,
			  autoplaySpeed: 5500, 
			  dots: false,
			  cssEase: 'linear',
			  speed: 500,
			  asNavFor: '.slideshow-holder'
			});

			

			$('.featprop-photo-holder').slick({
			  infinite: true, 
			  slidesToShow: 1, 
			  slidesToScroll: 1, 
			  arrows: true, 
			  autoplay: true, 
			  fade: true,
			  autoplaySpeed: 7500,
			  speed: 300,
			  dots: false,
			  cssEase: 'linear',
			  asNavFor: '.featprop-info-slick-holder',
			  appendArrows: '.featprop-arrows-wrap'
			});

			$('.featprop-info-slick-holder').slick({
			  infinite: true, 
			  slidesToShow: 1, 
			  slidesToScroll: 1, 
			  arrows: false, 
			  autoplay: true, 
			  fade: true,
			  autoplaySpeed: 7500, 
			  speed: 0,
			  dots: false,
			  cssEase: 'linear',
			  asNavFor: '.featprop-photo-holder'
			});



			$('.reports-slick-holder').slick({
			  infinite: true, 
			  slidesToShow: 2, 
			  slidesToScroll: 1, 
			  arrows: true, 
			  autoplay: false, 
			  autoplaySpeed: 4500, 
			  dots: false,
			  speed: 1500
			});



		
		}

	} 

	$(document).ready( function() {
		app.init();

		
		$('.slideshow-btn a').click(function(){ 
		    $("html, body").animate({ 
		      scrollTop: $('.contact-wrap').offset().top - 50
		    }, "slow"); 
		})

		$('.featprop-btn a').click(function(){ 
		    $("html, body").animate({ 
		      scrollTop: $('.contact-wrap').offset().top - 50
		    }, "slow"); 
		})

		$('.featprop-btn a').click(function(){ 
		    $("html, body").animate({ 
		      scrollTop: $('.contact-wrap').offset().top - 50
		    }, "slow"); 
		})

		$(window).scroll(function() {    
		    var scroll = $(window).scrollTop();
		    if (scroll > 0) {
		        $(".header-wrap").addClass("fixed-header");
		    }else{
		    	$(".header-wrap").removeClass("fixed-header");
		    }
		});

		$('.appoach-link').hover(function(){
			$(this).removeClass('approach-link');
		})

		$( ".approach-link" ).hover(
		  function() {
		    $('.approach-link').addClass('approach-hover-effect');
		    $(this).removeClass('approach-hover-effect');
		  }, function() {
		    $(this).addClass('approach-hover-effect');
		    $('.approach-link').removeClass('approach-hover-effect');
		    
		  }
		);

		$('.approach-link').click(function(e){
			e.preventDefault();
		})

	});

	$(window).load(function () { 
		
	});

	$(window).resize(function () { 

	});
	
})(jQuery);


