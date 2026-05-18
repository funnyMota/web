// 完成下面的函数

/**
 * 在arr中寻找是否存在target
 * @param {Array} arr 要遍历寻找的数组
 * @param {any} target 要寻找的目标
 * @return {boolean} 是否找到
 */
function includes(arr, target) {
  var isFind=false;
  for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
      isFind=true;
      break;
    }
  }
  return isFind;
}

// 利用上面的函数，完成下面的练习题
var nums = [1, 3, 8, 2, 5, 1, 9];
/* 
1. 判断nums中是否存在8，输出是或否
*/
console.log(includes(nums,8)?"是":"否");
var nums2 = [6, 3, 2, 7, 11, 33];
/* 
2. 判断数字2是否同时存在于nums和nums2中，输出是或否
*/
var isFind=false;
for(let i=0;i<nums.length;i++){
  if(includes(nums2,nums[i])){
    isFind=true;
    break;
  }
}
console.log(isFind?"是":"否");
var nums3 = [2, 5, 1];
/* 
3. 思考题：判断nums3中是否所有数字都在nums中存在，输出是或否
*/
var isFind=true;
for(let i=0;i<nums3.length;i++){
  if(!includes(nums,nums3[i])){
    isFind=false;
    break;
  }
}
console.log(isFind?"是":"否");
