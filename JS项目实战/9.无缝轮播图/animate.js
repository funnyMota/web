function createAnimate(options){
  var from=parseFloat(options.from);
  var to=parseFloat(options.to);
  var totalMS=options.totalMS || 500;
  var duration=options.duration || 16;
  var times=Math.floor(totalMS/duration);
  var dis=Math.floor((to-from)/times);
  var currentIndex=0;
  var timer=setInterval(function(){
    currentIndex++;
    if(currentIndex>=times){
      clearInterval(timer);
      options.onmove && options.onmove(to);
      options.onend && options.onend();
      return;
    }
    from=from+dis;
    options.onmove && options.onmove(from);
  },duration);
  return timer;
}



// createAnimate({
//   from:0,
//   to:500,
//   onmove:function(from){
//     console.log(from);
//   },
//   onend:function(){
//   }
// })
