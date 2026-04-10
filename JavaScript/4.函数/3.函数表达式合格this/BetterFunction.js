var BetterFunction={
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
  }
}

// var arr=[1,2,3,4,5];
// var arr1=[{name:"张三",age:58},{name:"李四",age:20},{name:"牛逼",age:22}];
// var newArr=BetterFunction.sort(arr,function(a,b){
//   return b-a;
// });
// console.log(newArr);

// var newArr=BetterFunction.sort(arr1,function(a,b){
//   return a.age-b.age;
// });
// console.log(newArr);

// var newArr=BetterFunction.filter(arr,function(item){
//   return item%2===0;
// });
// console.log(newArr);

// var newArr=BetterFunction.find(arr1,function(item){
//   return item.age>20;
// });
// console.log(newArr);

// var count=BetterFunction.count(arr,function(item){
//   return item%2===0;
// });
// console.log(count);