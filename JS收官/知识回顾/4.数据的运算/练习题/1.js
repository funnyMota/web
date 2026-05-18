/* 
编写一个完美的求和函数：
1. 若两个数据都是普通数字，求和即可
2. NaN的数据需要变为0
3. 其他类型的数据需要转换为数字
*/

function sum(a, b) {
  // if(typeof a==='number'&&typeof b==='number'){
  //   return a+b;
  // }
  // if(isNaN(a)){
  //   a=0;
  // }
  // if(isNaN(b)){
  //   b=0;
  // }
  // return Number(a)+Number(b);
  a=+a||0;
  b=+b||0;
  return a+b;
}
  

console.log(sum(1,2));
console.log(sum(1,'2'));
console.log(sum(1,undefined));
console.log(sum(1,null));
console.log(sum(1,true));