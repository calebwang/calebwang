Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}
$(document).ready(function() {

  var page = window.location.pathname.split('/').pop();
  var height = $(window).height();
  var width = $(window).width();
  $('#page-content').css('margin-left', (width - 1000)/2 - 55);
  $('#header-quote').css('margin-left', (width - 1000)/2 - 15);
  $('#content').css('height', height - 220);
  $('#header').css('margin-top', height/2 - 20);

  $.getJSON('json/quotes.json', function(json) {
    var quotes = json.quotes
    var quoteHtml = quotes.randomElement();
    $('#header-quote').html(quoteHtml);
  });

  if (page != '') { 

    if (document.referrer.split('/').pop() != '') {
      $('#header').css('margin-top', 0);
    }
    $('#header').animate( {'margin-top': '0' }, {queue: false, duration: 600} );
    $('#content-container').fadeIn({duration: 750, queue: false});
    $('#content').slideDown(750);
  }
});

