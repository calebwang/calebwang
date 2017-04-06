$(document).ready(function() {
  $.getScript('js/jquery.mousewheel.js', function() {
    $('html').bind('mousewheel', function(e, d, dx, dy) {});

    $('html').mousewheel( function(e, d, dx, dy) {
      e.preventDefault();
      var offset = $('#content-container').scrollTop();
      $('#content-container').scrollTop(offset - dy);
    });
  });
});
