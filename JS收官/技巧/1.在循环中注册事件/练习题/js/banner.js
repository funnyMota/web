(function () {
  // 完成横幅区的图片切换
  // 横幅区数据
  var datas = [
    {
      img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/15c05b32cf948b594477dfc3eb69fb69.jpg?w=2452&h=920',
      link: 'https://www.mi.com/mi11le-5g-ne',
    },
    {
      img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a532e33470d046b3f044d5ea49fc5e9e.png?thumb=1&w=2452&h=920&f=webp&q=90',
      link: 'https://www.mi.com/xiaomipad5',
    },
    {
      img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=2452&h=920&f=webp&q=90',
      link: 'https://www.mi.com/a/h/22033.html?sign=b60a6ca9167bce2d1ed8ee319cf83c75',
    },
    {
      img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af7be8f65065f405f57f46a02731f78d.jpg?thumb=1&w=2452&h=920&f=webp&q=90',
      link: 'https://www.mi.com/a/h/22812.html?sign=aab397a7ecf2ae4c1765e9d11fdccca6',
    },
  ];

  var bannerDots=document.querySelector(".banner-dots");
  var bannerA=document.querySelector(".banner-cover");
  var bannerImg=bannerA.querySelector('img');
  var bannerLeft=document.querySelector('.banner-pointer-left');
  var bannerRight=document.querySelector('.banner-pointer-right');
  var currentIndex=0;
  function init(){
    for(var i=0;i<datas.length;i++){
      var span=document.createElement('span');
      span.className="fl";
      bannerDots.appendChild(span);
    }
    change(currentIndex);
  }
  function change(index){
    bannerA.href=datas[index].link;
    bannerImg.src=datas[index].img;
    var selected =document.querySelector('.banner-dots-selected');
    if(selected){
      selected.className='fl';
    }
    bannerDots.children[currentIndex].className="banner-dots-selected fl";
    reset();
  }

  function previous(){
    currentIndex--;
    if(currentIndex<0){
      currentIndex=datas.length-1;
    }
    change(currentIndex);
  }
  function next(){
    currentIndex++;
    if(currentIndex>datas.length-1){
      currentIndex=0;
    }
    change(currentIndex);
  }
  var timer=null
  function start(){
    if(timer!==null) return;
    timer=setInterval(next,2000);
  }
  function reset(){
    if(timer!==null){
      clearTimeout(timer);
      timer=null;
    }
    start();
  }
  bannerLeft.addEventListener('click',previous);
  bannerRight.addEventListener('click',next);
  bannerDots.addEventListener('click',function(e){
    if(e.target.tagName==="SPAN"){
      var spans = bannerDots.children;
      for (var i = 0; i < spans.length; i++) {
        if (spans[i] === e.target) {
          currentIndex = i;
          change(currentIndex);
          break;
        }
      }
    }
  })
  init();
  start();

})();


