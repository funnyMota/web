function sendMessage(name,onFulffiled,onRejected){
  console.log(`发送消息：郑雄喜欢${name}`);
  console.log(`等待${name}回复消息`);
  setTimeout(()=>{
    if(Math.random()>=0.1){
      onFulffiled(`${name}回复郑雄`)
    }else{
      onRejected(`${name}没有回复`)
    }
  },1000)
}
sendMessage("二狗",(relay)=>{
  console.log(relay);
},(relay)=>{
  console.log(relay);
})