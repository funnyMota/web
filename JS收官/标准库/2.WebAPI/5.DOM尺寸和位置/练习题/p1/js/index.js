// 让便签可被拖动，但不能超出视口
var note=document.querySelector(".note");
var moveBar=document.querySelector(".move-bar");

moveBar.addEventListener('mousedown',function(e){
  var clientX=e.clientX;
  var clientY=e.clientY;
  
  var noteX=note.getBoundingClientRect().left;
  var noteY=note.getBoundingClientRect().top;

  var windowHeight=window.innerHeight;
  var windowWidth=window.innerWidth;  

  var noteHeight=note.offsetHeight;
  var noteWidth=note.offsetWidth;
  window.onmousemove=function(e){
    var disX=e.clientX-clientX;
    var disY=e.clientY-clientY;
    var left=disX+noteX;
    var top=disY+noteY;
    if(left<0) left=0;
    if(top<0) top=0;
    if(windowWidth-noteWidth<left){
      left=windowWidth-noteWidth;
    }
    if(windowHeight-noteHeight<top){
      top=windowHeight-noteHeight;
    }
    note.style.left=left+"px";
    note.style.top=top+"px";
  }
  window.onmouseup=function(){
    window.onmousemove=null;
    window.onmouseup=null;
  }
})