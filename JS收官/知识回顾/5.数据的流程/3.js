/* 
1. 1~100求和
*/
var sum=0;
for(let i=1;i<=100;i++){
  sum+=i;
}
console.log(sum);
/* 
2. 求某个数的阶乘
*/
var n=5;
var sum=1;
for(let i=1;i<=n;i++){
  sum*=i;
}
console.log(sum);
/* 
3. 数组求和
*/
var arr=[1,2,3,4,5];
var sum=0;
for(let i=0;i<arr.length;i++){
  sum+=arr[i];
}
console.log(sum);
/* 
4. 求数组中的奇数的个数
*/
var arr=[1,2,3,4,5];
var sum=0;
for(let i=0;i<arr.length;i++){
  if(arr[i]%2!==0){
    sum+=arr[i];
  }
}
console.log(sum);
/* 
5. 求数组中的奇数和
*/
var arr=[1,2,3,4,5];
var sum=0;
for(let i=0;i<arr.length;i++){
  if(arr[i]%2!==0){
    sum+=arr[i];
  }
}
console.log(sum);
