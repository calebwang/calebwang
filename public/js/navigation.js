var slots  = ['about', 'blog', 'contact', 'projects', 'resume'];
var url = window.location.href;
var splits = url.split('/');
var page = splits[splits.length - 1];
var win_height = parseInt($(window).height());
for (var i = 0; i < 5; i++) {
  if (page == slots[i]) {
    var main = page;
    var entries = [slots[(i+3) % 5], 
                   slots[(i+4) % 5], 
                   slots[(i+1) % 5], 
                   slots[(i+2) % 5]];
    slots.splice(i, 1);
  }
}
if (slots.length == 5) {
  var main = 'about';
  var entries = [slots[(3) % 5], 
                 slots[(4) % 5], 
                 slots[(1) % 5], 
                 slots[(2) % 5]];
  slots.splice(0, 1);
}

var slot_message = '<a href="/%s">%s</a>';

var doScroll = function(k){
  var styles = getNaviconStyles();
  var navicons = new Array();
  $('.navicon').each(function(i, obj) {
    var $this = $(this);
    $this.animate(styles[(i + k) % 5],
                  600,
                  'swing',
                  function() {
    });
    navicons[i] = $this.attr('id');
  });
  console.log(navicons);
  $('.navicon').each(function(i, obj) {
    var $this = $(this);
    $this.attr('id', navicons[(i+k) %5]);
  });
}

var doScrollCC = function(){
  var styles = getNaviconStyles();
  $('.navicon').each(function(i, obj) {
    var $this = $(this);
    $this.animate(styles[i - 1],
                  700,
                  'linear',
                  function() {
    });
  });
  $('#slot_1').animate(styles[4], 300, 'linear', function(){});
}

var scrollBack = function(){
  var styles = getNaviconStyles();
  $('.navicon').each(function(i, obj) {
    var $this = $(this);
    $this.animate(styles[i],
                  700,
                  'linear',
                  function() {
    });
  });
}

var getNavicons = function() {
  var navicons = new Array();
  $('.navicon').each(function(i, obj) {
    navicons[i] = $(this);
  });
  console.log(navicons);
  return navicons
}

var getNaviconStyles = function() {
  var navicons = new Array();
  $('.navicon').each(function(i, obj) {
    var $this = $(this);
    var style = {'top': $this.css('top'), 'font-size': $this.css('font-size'),
                 'right': $this.css('right'), 'text-align': $this.css('text-align'),
                 'width': $this.css('width'), 'margin-top': $this.css('margin-top')};
    console.log(style);
    navicons[i] = style;
  });
  console.log(navicons);
  return navicons;
}

var scrollOne = function() {
  $('.navicon#hero_slot').animate( $('#slot_4').css(), 1000, 'linear', function(){});
}

$(document).ready(function() {

  $('div.navicon#hero_slot').html(main);
  $('div.navicon#slot_1').html(slot_message.replace(/%s/g, entries[0]));
  $('div.navicon#slot_2').html(slot_message.replace(/%s/g, entries[1]));
  $('div.navicon#slot_4').html(slot_message.replace(/%s/g, entries[2]));
  $('div.navicon#slot_5').html(slot_message.replace(/%s/g, entries[3]));

  doScroll(1);
});
