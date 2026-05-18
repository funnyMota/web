(function(){
  var containerDOM=document.querySelector('.container');
  var imgWidth=230;
  var timer=null;
  var init=function(){
    initImg();
    initEvent();
  }
  var initImg=function(){
    for(var i=0;i<=40;i++){
      var src=`./img/${i}.jpg`;
      var img=document.createElement('img');
      img.src=src;
      img.style.width=imgWidth;
      containerDOM.appendChild(img);
    }
  }
  var initEvent=function(){
    window.addEventListener('load', initDom);
    window.addEventListener('resize',function(){
      if(timer){
        clearTimeout(timer);
        timer=null;
      }
      timer=setTimeout(function(){
        initDom();
      },1000)
    })
  }
  var initDom=function(){
    var imgs=document.querySelectorAll('img');
    var column=Math.floor(containerDOM.clientWidth/imgWidth);
    var spaceNumber=column+1;
    var leftSpace=containerDOM.clientWidth-column*imgWidth;
    var space=leftSpace/spaceNumber;
    var arr=new Array(column);

    arr.fill(0)
    for(var i=0;i<imgs.length;i++){
      var minTop=getMin(arr);
      var index=arr.indexOf(minTop);
      var h=imgs[i].clientHeight;
      arr[index]+=h+space;
      var left=(index+1)*space+index*imgWidth;
      imgs[i].style.top=minTop+"px";
      imgs[i].style.left=left+"px";
    }
    var test=getMax(arr);
    containerDOM.style.height=test+"px";
    function getMax(arr){
      var max=arr[0];
      for(var i=1;i<arr.length;i++){
        if(arr[i]>max){
          max=arr[i];
        }
      }
      return max;
    }
    function getMin(arr){
      var min=arr[0];
      for(var i=1;i<arr.length;i++){
        if(arr[i]<min){
          min=arr[i];
        }
      }
      return min;
    }
  }
  init();
})()