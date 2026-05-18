/* 
1. 数组中是否存在某个数，输出 是 或 否
*/
var arr=[1,2,3,4,5];
var isFind=false;
for(let i=0;i<arr.length;i++){
  if(arr[i]===3){
    isFind=true;
    break;
  }
}
console.log(isFind?"是":"否");
/* 
2. 数组中是否存在某个数，如果存在，则输出它所在的下标，如果不存在，则输出-1
*/
var arr=[1,2,3,4,5];
var index=-1;
for(let i=0;i<arr.length;i++){
  if(arr[i]===3){
    index=i;
    break;
  }
}
console.log(index);

/* 
3. 找到数组中第一个奇数和最后一个奇数，将它们求和
*/
var arr=[1,2,3,4,5];
var firstOdd=0;
var lastOdd=0;
for(let i=0;i<arr.length;i++){
  if(arr[i]%2!==0){
    firstOdd=arr[i];
    break;
  }
}
for(let i=arr.length-1;i>=0;i--){
  if(arr[i]%2!==0){
    lastOdd=arr[i];
    break;
  }
}
console.log(firstOdd+lastOdd);
/* 
4. 有两个数组，看两个数组中是否都存在奇数，输出 是 或 否
*/

