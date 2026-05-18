/* 
1. 输出1-100的所有奇数
*/
for(let i=1;i<=100;i++){
  if(i%2!==0){
    console.log(i);
  }
}
/* 
2. 定义一个数组，输出数组中所有的奇数
*/
var arr=[];
for(let i=1;i<=100;i++){
  if(i%2!==0){
    arr.push(i);
  }
}
console.log(arr);
/* 
3. 定义一个数组，找出所有的奇数，放入到一个新数组中
*/
var arr2=[];
for(let i=1;i<=100;i++){
  if(i%2!==0){
    arr2.push(i);
  }
}
console.log(arr2);
