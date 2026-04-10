var BetterFunction={
  getTopFreaInArray:function(arr){
    var records={};
    for(var i=0;i<arr.length;i++){
      var n= arr[i];
      if(records[n]){
        records[n]++;
      }else{
        records[n]=1;
      }
    }
    var result;
    for(var prop in records){
      if(!result||records[prop]>records[result]){
        result={
          number:prop,
          frequency:records[prop]
        }
      }
    }
    return result;
  },
  sort:function(arr,compare){
    if(!compare){
      compare=function(a,b){
        if(a>b){
          return 1;
        }
        return 0;
      }
    }
    for(var i=0;i<arr.length-1;i++){
      for(var j=0;j<arr.length-1-i;j++){
        if(compare(arr[j],arr[j+1])>0){
          var temp=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=temp;
        }
      }
    }
    return arr;
  },
  filter:function(arr,callback){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
      if(callback(arr[i],i)){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },
  find:function(arr,callback){
    for(var i=0;i<arr.length;i++){
      if(callback(arr[i],i)){
        return arr[i];
      }
    }
  },
  count:function(arr,callback){
    var count=0;
    for(var i=0;i<arr.length;i++){
      if(callback(arr[i],i)){
        count++;
      }
    }
    return count;
  },
  random:function(min,max){
    return Math.floor(Math.random()*(max-min)+min);
  }
}
