var doms = {
  // 视频元素
  video: document.querySelector('video'),
  btnPlay: document.querySelector('#btnPlay'),
  // 进度条相关元素
  progress: {
    // 进度条
    range: document.querySelector('#progress'),
    // 当前播放时间
    current: document.querySelector('#current'),
    // 总时间
    total: document.querySelector('#total'),
  },
  // 播放倍率的容器
  rate: document.querySelector('#rate'),
  // 音量相关元素
  volume: {
    // 滑动块
    range: document.querySelector('#volume input'),
    // 文本
    text: document.querySelector('#volume span'),
  },
  // 保存和设置按钮
  buttons: {
    save: document.querySelector('#save'),
    load: document.querySelector('#load'),
  },
  controls: document.querySelectorAll('.controls'),
};

window.addEventListener('load',init)
// 初始化
function init(){
  doms.btnPlay.addEventListener('click',videoPlay)
  doms.rate.addEventListener('click',btnRate)
  doms.volume.range.addEventListener('input',volRange)
  doms.progress.range.addEventListener('input',proRange)
  doms.video.addEventListener('timeupdate', ctrlRange);
  ctrlRange();
}

function videoPlay(){
  if(doms.video.paused){
    doms.video.play();
  }else{
    doms.video.pause();
  }
}
function btnRate(e){
  if(e.target.tagName==="BUTTON"){
    var btn=e.target;
    var rate=btn.getAttribute('data-rate');
    doms.video.playbackRate=rate;
  }
}
function volRange(){
  var volume=this.value/100;
  doms.volume.text.innerText=this.value+"%";
  doms.video.volume=volume;
  console.log(doms.video.volume);
}
function proRange(){
  var progress=doms.progress.range.value;
  var curTime=formatTime(progress);
  var curTotal=`${curTime.minute}:${curTime.sec}`;
  doms.progress.current.innerText=curTotal;
  doms.video.currentTime=progress;
}
function ctrlRange(){
  doms.progress.range.max=doms.video.duration;
  var time=formatTime(doms.video.duration)
  var total=`${time.minute}:${time.sec}`;
  var curTime=formatTime(doms.video.currentTime);
  var curTotal=`${curTime.minute}:${curTime.sec}`;
  doms.progress.current.innerText=curTotal;
  doms.progress.total.innerText=total;
}

function formatTime(sec){
  var hour = parseInt(sec / 3600);
  if (hour < 10) {
    hour = '0' + hour;
  }
  sec -= hour * 3600;
  var minute = parseInt(sec / 60);
  if (minute < 10) {
    minute = '0' + minute;
  }
  sec -= minute * 60;
  sec = parseInt(sec);
  if (sec < 10) {
    sec = '0' + sec;
  }
  return {
    hour:hour,
    minute:minute,
    sec:sec
  };
}
init();