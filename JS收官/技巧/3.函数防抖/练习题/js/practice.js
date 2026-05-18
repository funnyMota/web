// 当窗口尺寸变化后，调用layout函数
function debounce(fn,duration){
  var timeId;
  return function(){
    clearTimeout(timeId);
    var curThis=this;
    var arr=Array.prototype.slice.call(arguments,0);
    timeId=setTimeout(function(){
      fn.apply(curThis,arr);
    },duration);
  }
}

var test=debounce(function(e){
  console.log(e,this.value);
  layout();
},500)

window.addEventListener('resize',test);
