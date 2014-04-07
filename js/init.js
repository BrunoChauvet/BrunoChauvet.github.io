var imageFit = function() {
  windowHeight = $(window).height();
  $('.parallax').css('min-height', windowHeight);
};

function scrollToAnchor(id){
  var anchor = $("#" + id);
  $('html, body').animate({scrollTop: anchor.offset().top}, 'slow');
}

$(document).ready(function() {
  $window = $(window);
  $('section[data-type="background"]').each(function() {
   var $scroll = $(this);
                   
    $(window).scroll(function() {
      // HTML5 proves useful for helping with creating JS functions!
      // also, negative value because we're scrolling upwards                            
      var yPos = -($window.scrollTop() / $scroll.data('speed'));
       
      // background position
      var coords = '50% '+ yPos + 'px';

      // move the background
      $scroll.css({ backgroundPosition: coords });   
    });

    $('.collapse-group .more').on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      var $collapse = $this.closest('.collapse-group').find('.collapse');
      $collapse.collapse('toggle');
    });
   });
});

$(document).ready(imageFit);
$(window).resize(imageFit);

/* Create HTML5 element for IE */
document.createElement("section");
