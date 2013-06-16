Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

$(document).ready(function() {
  $.getJSON('json/quotes.json', function(json) {
    var quotes = json.quotes
    var quoteHtml = quotes.randomElement();
    $('#header-quote').html(quoteHtml);
  });
});

