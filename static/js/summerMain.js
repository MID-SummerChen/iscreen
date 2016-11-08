
'use strict';

// iPad and iPod detection
var isiPad = function(){
  return (navigator.platform.indexOf("iPad") != -1);
};

var isiPhone = function(){
  return (
    (navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPod") != -1)
  );
};

// magnificPopup
// $(document).ready(function() {
//   $('.popup-with-form').magnificPopup({
//     type: 'inline',
//     preloader: false,
//     focus: '#name',
//
//     // When elemened is focused, some mobile browsers in some cases zoom in
//     // It looks not nice, so we disable it:
//     callbacks: {
//       beforeOpen: function() {
//         if($(window).width() < 700) {
//           this.st.focus = false;
//         } else {
//           this.st.focus = '#name';
//         }
//       }
//     }
//   });
// });

// Carousel Feature Slide
var owlCrouselFeatureSlide = function() {
  var owl = $('.owl-carousel-main');
  owl.owlCarousel({
    // items : 1,
    singleItem:true,
    mouseDrag: false,
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoHeight: true,
    smartSpeed: 500,
    autoplay: true,
    autoplayTimeout: 5000,
    // autoplayHoverPause: true,
    //navText: [
    // "<i class='icon-arrow-left2 owl-direction'></i>",
    // "<i class='icon-arrow-right2 owl-direction'></i>"
    //]
  });
};


var owlCarouselScreenshots = function() {
  var owl = $('.owl-carousel-center');

  owl.owlCarousel({
    center: true,
    items:1,
    mouseDrag: false,
    loop: true,

    margin: 50,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:2
      }
    }
  });

  $('#videosCarousel').owlCarousel({
    items:1,
    merge:true,
    loop:true,
    margin:10,
    video:true,
    lazyLoad:true,
    center:true,
    responsive:{
      480:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });


  $('body').on('click', '.owl-item', function(){

    var $this = $(this),
      index = $this.index();

    console.log(index);
    $('.owl-carousel-center .owl-dots > div').eq(index).trigger('click');
  });
}




// Burger Menu
var burgerMenu = function() {

  $('body').on('click', '.js-fh5co-nav-toggle', function(event){

    if ( $('#navbar').is(':visible') ) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }

    event.preventDefault();

  });

};



// Page Nav
var clickMenu = function() {

  $('a.goto').click(function(event){
    var section = $(this).data('nav-section'),
      navbar = $('#navbar');
    $('html, body').animate({
      scrollTop: $('[data-section="' + section + '"]').offset().top
    }, 500);

    if ( navbar.is(':visible')) {
      navbar.removeClass('in');
      navbar.attr('aria-expanded', 'false');
      $('.js-fh5co-nav-toggle').removeClass('active');
    }

    event.preventDefault();
    return false;
  });

};

// Reflect scrolling in navigation
var navActive = function(section) {

  var $el = $('#navbar > ul');
  $el.find('li').removeClass('active');
  $el.each(function(){
    $(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
  });

};
var navigationSection = function() {

  var $section = $('div[data-section]');

  $section.waypoint(function(direction) {
    if (direction === 'down') {
      navActive($(this.element).data('section'));

    }
  }, {
    offset: '150px'
  });

  $section.waypoint(function(direction) {
    if (direction === 'up') {
      navActive($(this.element).data('section'));
    }
  }, {
    offset: function() { return -$(this.element).height() + 155; }
  });

};


// Window Scroll
var windowScroll = function() {
  var lastScrollTop = 0;

  $(window).scroll(function(event){

    var header = $('#fh5co-header'),
      scrlTop = $(this).scrollTop();

    if ( scrlTop > 500 && scrlTop <= 2000 ) {
      header.addClass('navbar-fixed-top fh5co-animated slideInDown');
    } else if ( scrlTop <= 500) {
      if ( header.hasClass('navbar-fixed-top') ) {
        header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
        setTimeout(function(){
          header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
        }, 100 );
      }
    }

  });
};



// Animations


var contentWayPoint = function() {
  var i = 0;
  $('.animate-box').waypoint( function( direction ) {

    if( direction === 'down' && !$(this.element).hasClass('animated') ) {

      i++;

      $(this.element).addClass('item-animate');
      setTimeout(function(){

        $('body .animate-box.item-animate').each(function(k){
          var el = $(this);
          setTimeout( function () {
            var effect = el.data('animate-effect');
            if ( effect === 'fadeIn') {
              el.addClass('fadeIn animated');
            } else if ( effect === 'fadeInLeft') {
              el.addClass('fadeInLeft animated');
            } else if ( effect === 'fadeInRight') {
              el.addClass('fadeInRight animated');
            } else {
              el.addClass('fadeInUp animated');
            }

            el.removeClass('item-animate');
          },  k * 200, 'easeInOutExpo' );
        });

      }, 100);

    }

  } , { offset: '85%' } );
};



export default {
  contentWayPoint,
  burgerMenu,
  owlCrouselFeatureSlide,
  owlCarouselScreenshots,
  clickMenu,
  navigationSection,
  windowScroll,
  all() {
    burgerMenu();
    owlCrouselFeatureSlide();
    owlCarouselScreenshots();
    clickMenu();
    navigationSection();
    contentWayPoint();
    windowScroll();
  }
}






