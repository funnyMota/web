function createAnimate(options){
  var from=options.from;
  var to=options.to;
  var totalMS=options.totalMS || 500;
  var duration=options.duration || 15;
  var times=Math.floor(totalMS/duration);
  var dis=Math.floor((to-from)/times);
  var currentIndex=0;
  var timer=setInterval(function(){
    from+=dis;
    currentIndex++;
    if(currentIndex==times){
      from=to;
      clearTimeout(timer);
      options.onmove && options.onmove(from);
      options.onend && options.onend();
      return;
    }
    options.onmove && options.onmove(from);
  },duration)
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