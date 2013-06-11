var canvas = document.getElementById('sidebar');
canvas.height = $(window).height();
canvas.width = 300;
var context = canvas.getContext('2d'); context.fillStyle = "#c0c0c0";
context.strokeStyle = "#a8a8a8";
context.lineWidth = 20;
context.translate(canvas.height*1.33, 0);
context.beginPath();
context.arc(0, canvas.height/2, canvas.height*1.3, -Math.PI/2, Math.PI/2, true);
context.fill();
context.stroke();
context.closePath();

