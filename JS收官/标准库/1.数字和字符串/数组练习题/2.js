// 删除数组中的所有字符串
var nums = [1, 1, '1', 'a', 'b', 'a', 3, 5, 3, 7];
for(var i=nums.length;i>0;i--){
  if(typeof nums[i]==="string"){
    nums.splice(i,1);
  }
}
console.log(nums);
