// 数组去重
var nums = [1, 1, '1', 'a', 'b', 'a', 3, 5, 3, 7];

for(var i=0;i<nums.length;i++){
  var item=nums[i];
  for(var j=i+1;j<nums.length;j++){
    if(nums[j]===item){
      nums.splice(j,1);
    }
  }
}
console.log(nums);

// var obj={};
// for(var i=0;i<nums.length;i++){
//   obj[nums[i]]=nums[i];
// }
// nums=[];
// for(var i in obj){
//   nums.push(obj[i])
// }
// console.log(nums);
