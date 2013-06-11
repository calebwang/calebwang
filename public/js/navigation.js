var slots  = ['about', 'blog', 'contact', 'projects', 'resume'];
var url = window.location.href;
var splits = url.split('/');
var page = splits[splits.length - 1];
for (var i = 0; i < 5; i++) {
  if (page == slots[i]) {
    $('div.navicon#hero_slot').html(page);
    var entries = [slots[(i+3) % 5], 
                   slots[(i+4) % 5], 
                   slots[(i+1) % 5], 
                   slots[(i+2) % 5]];
    slots.splice(i, 1);
  }
}
var slot_message = '<a href="/%s">%s</a>';

$('div.navicon#slot_1').html(slot_message.replace(/%s/g, slots[0]));
$('div.navicon#slot_2').html(slot_message.replace(/%s/g, slots[1]));
$('div.navicon#slot_4').html(slot_message.replace(/%s/g, slots[2]));
$('div.navicon#slot_5').html(slot_message.replace(/%s/g, slots[3]));
