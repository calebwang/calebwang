Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}
$(document).ready(function() {

  var page = window.location.pathname.split('/').pop();
  var height = $(window).height();
  var width = $(window).width();
  $('#page-content').css('margin-left', (width - 1000)/2 - 55);
  $('#header-quote').css('margin-left', (width - 1000)/2 - 15);
  $('#content').css('height', height - 260);
  $('#header').css('margin-top', height/2 - 10);

  $.getJSON('json/quotes.json', function(json) {
    var quotes = json.quotes
    var quoteHtml = quotes.randomElement();
    $('#header-quote').html(quoteHtml);
  });

  if (page != '') { 
    var referrer = document.referrer
    if (document.referrer.split('/').pop() != '') {
      if (referrer.indexOf(document.domain) != -1) {
        $('#header').css('margin-top', 30);
      }
    }
    $('#header').animate( {'margin-top': '30' }, {queue: false, duration: 600} );
    $('#content-container').fadeIn({duration: 700, queue: false});
    $('#content').slideDown(700);
    $('#content-container').scrollTop(0);
  }
});

