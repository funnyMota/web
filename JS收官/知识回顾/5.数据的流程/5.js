/* 
1. 输出一个对象的所有键值对
*/
var object={
  name:"张三",
  age:18,
  sex:"男"
}
for(let key in object){
  console.log(key,object[key]);
}
/* 
2. 计算对象中字符串属性的数量
*/
var object={
  name:"张三",
  age:18,
  sex:"男"
}
var count=0;
for(let key in object){
  if(typeof object[key]==="string"){
    count++;
  }
}
console.log(count);
/* 
3. 将一个对象所有的数字属性，转换为字符串，并在其前面加上￥
例如：
{
    name:"xxx",
    balance: 199.8, //余额
    taken: 3000 //消费
}
-->
{
    name:"xxx",
    balance: '￥199.8', //余额
    taken: '￥3000' //消费
}
*/
var object={
  name:"张三",
  balance:199.8,
  taken:3000
}
for(let key in object){
  if(typeof object[key]==="number"){
    object[key]=`￥${object[key]}`;
  }
}
console.log(object);
/* 
4. 按照下面的要求进行转换
[1, 2, 3]  
-->
[
    {number:1, doubleNumber: 2},
    {number:2, doubleNumber: 4},
    {number:3, doubleNumber: 6},
]
*/
var arr=[1,2,3];
var newArr=[];
for(let i=0;i<arr.length;i++){
  newArr.push({number:arr[i], doubleNumber:arr[i]*2});
}
console.log(newArr);
