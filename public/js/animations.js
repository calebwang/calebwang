$(document).ready( function() {
  $('#content-container').fadeIn({duration: 800, queue: false});
  $('#header').animate( {'margin-top': '0' }, {queue: false, duration: 600} );
  $('#content').slideDown(800);
});

