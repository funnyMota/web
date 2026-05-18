// 得到一个随机数组成的数组，数组长度为10，随机数的范围在0-1之间
// 结果类似于：[0.262, 0.167, 0.841, ...]

// const arr=Array(10).fill(0).map(()=>{
//   return Math.random();
// })
// console.log(arr);

// 得到一个随机数组成的数组，数组长度为10，随机数的范围在10-100之间
// 结果类似于：[35, 66, 45, ...]
const max=100;
const min=10;
const arr=Array(10).fill(0).map(()=>{
  return (Math.random()*(max-min)+min).toFixed(0);
})
console.log(arr);


// 判断某个字符串s是否为 .jpg、.png、.bmp、.gif 中的一个

const test=['.jpg','.png','.bmp','.gif'];
console.log(test.includes('.e'));
