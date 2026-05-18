// 为所有对象添加方法print，打印对象的键值对
Object.prototype.print=function(){
  for(var key in this){
    if(this.hasOwnProperty(key)){
      var value=this[key];
      console.log(key+':'+value);
    }
  }
}
var obj={
  a:1,
  b:2,
}
obj.print();
var test={
  c:3,
  d:4,
}
test.print();