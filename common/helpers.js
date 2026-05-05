if(!this.myPlugin){
  window.myPlugin={};
}

// this.myPlugin.inherit=function(son,father){
//   son.prototype=Object.create(father.prototype)
//   son.prototype.constructor=son;
//   son.prototype.uber=father.prototype;
// }
this.myPlugin.inherit=(function(){
  var Temp=function(){}
  return function(son,father){
    Temp.prototype=father.prototype;
    son.prototype=new Temp();
    son.prototype.constructor=son;
    son.prototype.uber=father.prototype;
  }
}());
/**
 * obj1和obj2混合产生新的对象
 * 
 */
this.myPlugin.mixin=function(obj1,obj2){
  return Object.assign({},obj1,obj2);
  // var newObj={};
  // for(var prop in obj2){
  //   newObj[prop]=obj2[prop];
  // }
  // for(var prop in obj1){
  //   if(!(prop in obj2)){
  //     newObj[prop]=obj1[prop];
  //   }
  // }
  // return newObj;
}

this.myPlugin.clone=function(obj,deep){
  if(Array.isArray(obj)){
    if(deep){
      var newArr=[];
      for(var i=0;i<obj.length;i++){
        newArr.push(this.clone(obj[i],deep));
      }
      return newArr;
    }else{
      return obj.slice();
    }
  }
  else if(typeof obj==="object"){
    var newObj={};
    for(var prop in obj){
      newObj[prop]=deep?this.clone(obj[prop],true):obj[prop];
    }
    return newObj;
  }
  else{
    return obj;
  }

}

this.myPlugin.debounce=function(callback,time){
  var timer;
  return function(){
    clearTimeout(timer);
    var args=arguments;
    timer=setTimeout(function(){
      callback.apply(null,args);
    },time);
  }
}

this.myPlugin.throttle=function(callback,time,immediately){
  if(immediately===undefined){
    immediately=true;
  }
  if(immediately){
    var t;
    return function(){
      if(!t||Date.now()-t>time){
        callback.apply(null,arguments);     
        t=Date.now();
      }
    }
  }else{
    var timer;
    return function(){
      if(timer){return;}
      var args=arguments;
      timer=setTimeout(function(){
        callback.apply(null,args);
        timer=null;
      },time);
    }
  }
}

this.myPlugin.curry=function(func){
  var args=Array.prototype.slice.call(arguments,1);
  var that=this;
  return function(){
    var curArgs=Array.from(arguments);
    var totalArgs=args.concat(curArgs);
    if(totalArgs.length>=func.length){
      return func.apply(null,totalArgs);
    }else{
      totalArgs.unshift(func);
      return that.curry.apply(that,totalArgs);
    }
  }
}


this.myPlugin.pipe=function(func){
  var args=Array.from(arguments);
  return function(val){
    return args.reduce(function(result,func){
      return func(result);
    },val)
    // for(var i=0;i<args.length;i++){
    //   var func=args[i];
    //   val = func(val);
    // }
    // return val;
  }
}