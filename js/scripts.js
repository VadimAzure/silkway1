$(function () {
		$('.navbar-toggle').click(function(){
		$('.nav-list').slideToggle();
		});	

		$('.owl_banner').owlCarousel({
			loop:true,
			animateOut: 'fadeOut',
   			animateIn: 'fadeIn',
			responsiveClass:true,
			dots: false,
			autoplay:true,
   			autoplayTimeout:3500,
   			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1,
					nav:false
				},
				767:{
					items:1,
					nav:false					
				},
				1000:{
					items:1,
					nav:false,
					mouseDrag: false,
				}
			}
		});
		
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin: 20,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					nav:false
				},
				480:{
					items:1,
					nav:false
				},
				767:{
					items:2,
					nav:false,
					dots: true
				},
				1000:{
					items:3,
					nav:false,
					loop:false,
					mouseDrag: false,
				}
			}
		});
		
		$('.carousel').owlCarousel({
			loop:true,
			margin: 20,
			items:1,
			responsiveClass:true,
			responsive:{
				0:{
					nav:false
				},
				480:{
					nav:false
				},
				767:{
					nav:false,
					dots: true
				},
				1000:{
					nav:false,
					loop:false,
					mouseDrag: false,
				}
			}
		});

		
    $(window).on("load",function(){
         $(".content").mCustomScrollbar();
    });
	
	new ElastiStack( document.getElementById( 'elasticstack' ) );
	
});


	
	

