// name转换成驼峰命名
var name = 'has own property'; // --> hasOwnProperty
var test=name.split(' ').map((item)=>{
  return item[0].toUpperCase()+item.substring(1).toLowerCase();
});
console.log(test.join(''));

