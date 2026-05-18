(function(){
  var images=['./images/Wallpaper1.jpg','./images/Wallpaper2.jpg','./images/Wallpaper3.jpg','./images/Wallpaper4.jpg','./images/Wallpaper5.jpg']
  var containerDOM=document.querySelector('.container');
  var imglistDOM=document.querySelector('.imglist');
  var indicatorDOM=document.querySelector('.indicator');
  var arrowLeftDOM=document.querySelector('.arrow-left');
  var arrowRightDOM=document.querySelector('.arrow-right');
  var currentIndex=0;
  var imgWidth=800;
  var timer=null;
  var init=function(){
    initDOM();
    initEvent();
    startTimer();
  }
  var initDOM=function(){
    for(var i=0;i<images.length;i++){
      var img=document.createElement('img');
      img.src=images[i];
      imglistDOM.appendChild(img);
      var li=document.createElement('li');
      indicatorDOM.appendChild(li);
    }
    var img=imglistDOM.children[0];
    var newimg=img.cloneNode(true);
    imglistDOM.appendChild(newimg);
    imglistDOM.style.width=imglistDOM.children.length*imgWidth+"px";
    changeImg(currentIndex)
  }
  var initEvent=function(){
    var lis=document.querySelectorAll('li');
    for(var i=0;i<lis.length;i++){
      (function(i){
        lis[i].addEventListener('click',function(){
          changeImg(i);
        })
      })(i)
    }
    arrowLeftDOM.addEventListener('click',function(){
      changeImg(currentIndex-1);
    })
    arrowRightDOM.addEventListener('click',function(){
      changeImg(currentIndex+1);
    })
    containerDOM.addEventListener('mouseenter',function(){
      clearTimer();
    })
    containerDOM.addEventListener('mouseleave',function(){
      startTimer();
    })
  }
  var startTimer=function(){
    timer=setInterval(function(){
      changeImg(currentIndex+1);
    },2000);
  }
  var clearTimer=function(){
    clearInterval(timer);
    timer=null;
  }
  var changeImg=function(index){
    if(index<0){
      index=imglistDOM.querySelectorAll('img').length-2;
    }
    if(index>imglistDOM.querySelectorAll('img').length-2){
      index=0;
    }
    var lis=document.querySelectorAll('li');
    for(var i=0;i<lis.length;i++){
      lis[i].classList.toggle('active',i===index);
    }
    currentIndex=index;
    // imglistDOM.style.marginLeft=-(currentIndex*imgWidth)+'px';
    var from=imglistDOM.style.marginLeft;
    from=from.replace(/px$/,'');
    var to=-(currentIndex*imgWidth);
    createAnimate({
      from:from,
      to:to,
      totalMS:450,
      duration:15,
      onmove:function(from){
        imglistDOM.style.marginLeft=from+'px'
      }
    })
  }
  init();
})()


