var timer=null;
function start(){
  if(timer){
    return;
  }
  timer=setInterval(function(){
    console.log(new Date().toString());
  },1000)
}
function stop(){
  clearTimeout(timer);
  timer=null;
}

