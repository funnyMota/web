// 将下面的rgb格式转换成为HEX格式
var rgb = 'rgb(253, 183, 25)';

var colors=rgb.split('rgb')[1].split('(')[1].split(')')[0].split(',');
var sum='';
for(var i=0;i<colors.length;i++){
  sum+=parseInt(colors[i]).toString(16);
}
console.log(sum);

