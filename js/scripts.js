jQuery(document).ready(function ($) {

  /*Initial Animated Items*/

  $('.menu').addClass('animated slideInDown');
  $('#slide1 .slide-content').addClass('animated fadeInDown');

  $(window).stellar();

  var slide = $('.slide');
  button = $('.button');
  mywindow = $(window);
  htmlbody = $('html,body');


  setSlideHeight ();

  $( window ).resize(function() {
    setSlideHeight ();
  });


  slide.waypoint(function (direction) {
    dataslide = $(this).attr('data-slide');

    clearActiveClass()

    if (direction === 'down') {
      $('.navigation li a[data-slide="' + dataslide + '"]').addClass('active');
    }
    else {
      $('.navigation li a[data-slide="' + dataslide + '"]').addClass('active');
    }
  });

  // Set active classes, kinda broken :)
  mywindow.scroll(function () {
    if (mywindow.scrollTop() == 0) {
      clearActiveClass();
      $('.navigation li a[data-slide="1"]').addClass('active');
    }
  });

  function clearActiveClass() {
    $('.navigation li .trigger-slide').removeClass('active');
  }

  function goToByScroll(dataslide) {
    var scrollPosition = $('.slide[data-slide="' + dataslide + '"]').offset().top - 82;
    htmlbody.animate({
      scrollTop: scrollPosition
    }, 1500, 'easeInOutQuint');
  }

  function setSlideHeight () {
    $('#slide1').css({'min-height': $(window).height()});
  }

    $('.navigation').find('.trigger-slide').click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });





});