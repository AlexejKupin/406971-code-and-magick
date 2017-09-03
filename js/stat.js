var canvas = document.getElementById('canvas');
var ctx2 = canvas.getContext('2d');
var max;
var myNameIndex;


function getMaxValue(times){
  max = times[0]; 
    for (var i = 0; i < times.length; i++) { 
      if (max < times[i]) max = times[i]; 
    }
     return max;
}
 

window.renderStatistics = function(ctx,names,times) {

getMaxValue(times);
ctx2.rect(50, 5, 210,135);
ctx2.fillStyle = 'white';
ctx2.shadowColor ="rgba(0, 0, 0, 0.7)";
ctx2.shadowBlur = 4;
ctx2.shadowOffsetX = 5;
ctx2.shadowOffsetY = 5;
ctx2.fill();

ctx2.shadowBlur = 0;
ctx2.shadowOffsetX = 0;
ctx2.shadowOffsetY = 0;
ctx2.font = '16px "PT Mono"';
ctx2.shadowColor ="white";
ctx2.textBaseline = 'hanging';
ctx2.fillStyle = 'black';
ctx2.fillText('Вы победили!', 100, 10);
ctx2.fillText('Список результатов!', 65, 20);

ctx2.font = '8px Arial';

if (names[0] ==='Вы') {ctx2.fillStyle = 'rgba(255,0,0,1)';
  } else {ctx2.fillStyle = 'rgba(0,0,255,'+ Math.random() +')';
    };
ctx2.fillRect(77, 120-75/max*times[0], 20, 75/max*times[0]);
ctx2.fillStyle = 'black';
ctx2.fillText(names[0], 77, 125);

if (names[1] ==='Вы') {ctx2.fillStyle = 'rgba(255,0,0,1)';
  } else {ctx2.fillStyle = 'rgba(0,0,255,'+ Math.random() +')';
    };
ctx2.fillRect(122, 120-75/max*times[1], 20, 75/max*times[1]);
ctx2.fillStyle = 'black';
ctx2.fillText(names[1], 122, 125);

if (names[2] ==='Вы') {ctx2.fillStyle = 'rgba(255,0,0,1)';
  } else {ctx2.fillStyle = 'rgba(0,0,255,'+ Math.random() +')';
    };
ctx2.fillRect(167, 120-75/max*times[2], 20,75/max*times[2]);
ctx2.fillStyle = 'black';
ctx2.fillText(names[2], 167, 125);

if (names[3] ==='Вы') {ctx2.fillStyle = 'rgba(255,0,0,1)';
  } else {ctx2.fillStyle = 'rgba(0,0,255,'+ Math.random() +')';
    };
ctx2.fillRect(212, 120-75/max*times[3], 20,75/max*times[3]);
ctx2.fillStyle = 'black';
ctx2.fillText(names[3], 212, 125);
};

