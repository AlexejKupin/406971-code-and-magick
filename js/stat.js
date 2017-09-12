var max;

var getMaxValue = function (times){
  max = times[0]; 
    for (var i = 0; i < times.length; i++) { 
      if (max < times[i]) max = times[i]; 
    }
     return max;
};
 
var drawColum = function (ctx, number, height, revert, names, times, namePosition) {
  var color;
  if (names ==='Вы') { color = 'rgba(255,0,0,1)';
    } else { color = 'rgba(0,0,255,'+ Math.random() + ')';
  };

  ctx.fillStyle = color;
  ctx.fillRect(150 + number * 90, revert, 40, height);
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillText(names, 150 + number * 90, 260);
  ctx.fillText(Math.round(times), 150 + number * 90, namePosition);
};

window.renderStatistics = function(ctx,names,times) {
  getMaxValue(times);
  ctx.fillStyle = 'white';
  ctx.shadowColor ="rgba(0, 0, 0, 0.7)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  ctx.fillRect(100, 10, 420,270);

  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.font = '16px "PT Mono"';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 230, 30);
  ctx.fillText('Список результатов:', 220, 45);

  for (var i = 0; i < 4; i++ ) {
    drawColum(ctx, i, 150/max*times[i], 240 - 150/max*times[i], names[i], times[i], 215 - 150/max*times[i]);
  }; 
};