const obj = {
  a: 1,
  b: 2,
  c: 3,
};
// 遍历对象的所有属性名
Object.keys(obj).forEach((item)=>{
  console.log(item);
});

// 遍历对象的所有属性值
Object.values(obj).forEach((item)=>{
  console.log(item);
})
// 遍历对象的所有属性名和属性值
Object.entries(obj).forEach(([key,value])=>{
  console.log(key,value);
})
// 复制obj的所有属性到一个新的对象
// const newObj={...obj};
// console.log(newObj);
// 复制obj除a以外的所有属性到一个新的对象
const {a,...rest }=obj;
console.log(rest);

