// 完成下面的函数

/**
 * 得到某个数的阶乘
 * 如果数小于了1，则得到0
 * @param {number} n 要求阶乘的数
 * @return {number} 阶乘结果
 */
function factorial(n) {
  var sum=1;
  for(let i=1;i<=n;i++){
    sum*=i;
  }
  return sum;
}

// 利用上面的函数，完成下面的练习题

/* 
1. 输出5的阶乘
*/
console.log(factorial(5));
/* 
2. 求5和6的阶乘之和，然后输出
*/
var sum=factorial(5)+factorial(6);
console.log(sum);
/* 
3. 输出阶乘结果不超过1000的所有数字
*/
for(let i=1;i<=1000;i++){
  if(factorial(i)>1000){
    break;
  }
  console.log(factorial(i));
}
