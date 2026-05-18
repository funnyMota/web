(function(){
  var imgList=[
    ['./images/imgA_1.jpg','./images/imgA_2.jpg','./images/imgA_3.jpg'],
    ['./images/imgB_1.jpg','./images/imgB_2.jpg','./images/imgB_3.jpg'],
    ['./images/imgC_1.jpg','./images/imgC_2.jpg','./images/imgC_3.jpg']
  ]
  var imgListDOM=document.querySelector('.img-list');
  var imgLeftDOM=document.querySelector('.left-img');
  var imgRightDOM=document.querySelector('.right-img');
  var maskDOM=document.querySelector('.mask');
  var maskWidth=230;
  var maskHeight=230;
  var currentIndex=0;
  var init=function(){
    initImg();
    initEvent();
  }
  var initImg=function(){
    for(var i=0;i<imgList.length;i++){
      var li=document.createElement('li');
      var img=document.createElement('img');
      img.src=imgList[i][0];
      li.appendChild(img);
      (function(i){
        li.addEventListener('click',function(){
          changeImg(i);
        })
      })(i)
      imgListDOM.appendChild(li);
    }
    changeImg(currentIndex);
  }
  var changeImg=function(currentIndex){
    var lis=document.querySelectorAll('li');
    for(var i=0;i<lis.length;i++){
      lis[i].classList.toggle('active',i==currentIndex);
    }
    imgLeftDOM.style.background=`url(${imgList[currentIndex][1]}) no-repeat`;
    imgRightDOM.style.background=`url(${imgList[currentIndex][2]}) no-repeat`;
  }
  var initEvent=function(){
    imgLeftDOM.addEventListener('mouseenter',function(){
      maskDOM.style.display="block";
      imgRightDOM.style.display="block";       
    });
    imgLeftDOM.addEventListener('mousemove',function(e){
      var rect=imgLeftDOM.getBoundingClientRect();
      var x=e.clientX-rect.left-(maskWidth/2);
      var y=e.clientY-rect.top-(maskHeight/2);
      if(x<0) x=0;
      if(y<0) y=0;
      if(x+(maskWidth)>rect.width) x=rect.width-maskWidth;
      if(y+(maskHeight)>rect.height) y=rect.height-maskHeight;
      maskDOM.style.left=x+"px";
      maskDOM.style.top=y+"px";
      var bgLeft=x/430*800;
      var bgTop=y/430*800;
      imgRightDOM.style.backgroundPosition=`-${bgLeft}px -${bgTop}px`;
    })
    imgLeftDOM.addEventListener('mouseleave',function(){
      maskDOM.style.display="none";
      imgRightDOM.style.display="none";
    });
  }
  init();
})()