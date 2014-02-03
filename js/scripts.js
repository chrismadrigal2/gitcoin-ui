jQuery(document).ready(function ($) {

  // $(window).stellar();

  setSlideHeight ();
  $(window).resize(function() {
    setSlideHeight ();
  });


  function setSlideHeight () {
    $('#banner-section').css({'min-height': $(window).height()});
  }
});