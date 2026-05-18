(function(){
  var list=document.querySelector(".list");
  function clone(){
    var li=list.children[0];
    var newli=li.cloneNode(true);
    list.appendChild(newli)
  }
  clone();
  
  var duration=2000;
  var itemHeight=30;
  setInterval(move,duration);
  var curIndex=0;
  function move(){
    var from=curIndex*itemHeight;
    curIndex++;
    var to=curIndex*itemHeight;
    var totalDuration=450;
    var duration=15;
    var times=totalDuration/duration;
    var dis=(to-from)/times;
    var timer=setInterval(function(){
      from+=dis;
      if(from>to){
        clearTimeout(timer);
        if(curIndex===list.children.length-1){
          curIndex=0;
          from=0;
        }
      }
      list.scrollTop=from;
    },duration)
  }
})();