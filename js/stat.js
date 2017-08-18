var canvas = document.getElementById('canvas-statistic');
var ctx = canvas.getContext('2d');
var names = ['Alex', 'MadMouse', 'RedHat', 'Keks'];
var times = ['4222', '1500', '1000', '2000'];

function getMaxValue(times){
  var max = times[0]; 
    for (var i = 0; i < times.length; i++) { 
      if (max < times[i]) max = times[i]; 
    }
     return max;
}
 

function renderStatistics (ctx,names,times) {

ctx.rect(50, 5, 210,135);
ctx.fillStyle = 'white';
ctx.shadowColor ="rgba(0, 0, 0, 0.7)";
ctx.shadowBlur = 4;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.fill();

ctx.shadowBlur = 0;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;
ctx.font = '16px "PT Mono"';
ctx.shadowColor ="white";
ctx.textBaseline = 'hanging';
ctx.fillStyle = 'black';
ctx.fillText('Вы победили!', 115, 10);
ctx.fillText('Список результатов!', 90, 20);

ctx.font = '8px Arial';
ctx.fillStyle = 'rgba(255,0,0,1)';
ctx.fillRect(77, 120-75/max*times[0], 20, 75/max*times[0]);
ctx.fillStyle = 'black';
ctx.fillText(names[0], 77, 125);

ctx.fillStyle = 'rgba(0,0,255,0.3)';
ctx.fillRect(122, 120-75/max*times[1], 20, 75/max*times[1]);
ctx.fillStyle = 'black';
ctx.fillText(names[1], 122, 125);

ctx.fillStyle = 'rgba(0,0,255,0.7)';
ctx.fillRect(167, 120-75/max*times[2], 20,75/max*times[2]);
ctx.fillStyle = 'black';
ctx.fillText(names[2], 167, 125);

ctx.fillStyle = 'rgba(0,0,255, 0.2)';
ctx.fillRect(212, 120-75/max*times[3], 20,75/max*times[3]);
ctx.fillStyle = 'black';
ctx.fillText(names[3], 212, 125);
};

