jQuery(function($){
"use strict"

$(document).ready(function() {
  // ..................cart-item.........................

    $('.list-item4').on('click',function() {
      	$('.st-cart-panel').slideToggle();
    	 });

    $('.cart-item').on('click', function() {
          $('.st-cart-panel').addClass('show');
        });

     $('.cart-close-btn').on('click', function(){
     	$('.cart-item:hover').remove();
     });

  // ..................calender-item.........................

      $('.list-item5').on('click',function() {
        $('.calender-item').slideToggle();
       });

     $('.dismiss1').on('click', function(){
      $('.calender-item-inner').remove();
     });

     // ..................massage-item.........................

       $('.list-item6').on('click',function() {
         $('.top-message').slideToggle();
        });

     // ..................massage-item.........................

      $('.list-item7').on('click',function() {
        $('.top-notifications').slideToggle();
       });

  // ..................toggle-bar.........................

    $('.top-right-logo').on('click',function() {
        $('.profile-satting').slideToggle();
       });
    $('.top-right-logo').on('click',function() {
        $('.profile-satting').removeToggle();
       });

// .......owlCarousel.....................................
	$('#slider').owlCarousel({
	    autoplay: true,
	    smartSpeed: 400,
	    autoplayTimeout: 5000,
	    autoplayHoverPause: true,
	    loop:true,
	    margin:0,
	    nav: true,
	    dots: false,
	    navElement: 'div',
	    navText:['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        576:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        992:{
	            items:1
	        },
	        1200:{
	            items:1
	        }
	    }
	});

    // Stikcy Header
    var topbar = $('#topbar');
    // var slidebar = $('#slidebar');
    if($('#topbar').length) {
        var headerHeight = topbar.outerHeight();
        var stickyHeaderTop = topbar.offset().top;
        //menubar.css({"top":stickyHeaderTop});
        //slidebar.css({"margin-top":headerHeight});
        var stickyHeader = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyHeaderTop) {
                topbar.addClass('header-sticky');
            //menubar.css({"top":"0px"});
            } else {
                if (topbar.hasClass('header-sticky')) {
                    topbar.removeClass('header-sticky');
              //menubar.css({"top":stickyHeaderTop});
                }
            }
        };
        stickyHeader();
        $(window).scroll(function () {
            stickyHeader();
        });
    };

  // Init WOW.js and get instance
  var wow = new WOW();
  wow.init();

  $("#emojionearea").emojioneArea({
    pickerPosition: "top"
});

  // ..................toggle-bar.........................

    $('.top-Menu-toggle').on('click',function() {
        $('.toggle-panel-inner').slideToggle();
       });
    $('.top-Menu-toggle').on('click',function() {
        $('.toggle-panel-inner').removeToggle();
       });



});
});