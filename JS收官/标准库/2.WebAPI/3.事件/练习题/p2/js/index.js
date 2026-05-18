// 每隔1秒自动切换图片
var timer=null;
var currentIndex=1;
var img=document.querySelector('.container img');
function start(){
  if(timer){
    return
  }
  timer=setInterval(()=>{
    currentIndex=(currentIndex%4)+1;
    img.src='./img/'+currentIndex+'.jpeg';
    
  },1000);
}
function stop(){
  clearTimeout(timer);
  timer=null;
}
// 当鼠标移动到元素上时停止切换，移出后开始切换
var container=document.querySelector('.container');
container.addEventListener('mouseenter',stop);
container.addEventListener('mouseleave',start);