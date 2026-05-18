// 创建一个没有隐式原型的用户对象，随意添加一些属性

var user=Object.create(null);
console.log(user.__proto__);

var user2={}
Object.setPrototypeOf(user2,null);
console.log(user2.__proto__);