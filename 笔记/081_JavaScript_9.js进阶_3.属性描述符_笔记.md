# 属性描述符

属性描述符: 它表达了一个属性的相关信息(元数据),它本质是一个对象

1. 数据属性
2. 存取器属性
  1. 当给它赋值,会自动运行一个函数
  2. 当获取它的值时,会自动运行一个函数

Object.defineProperty(obj,prop,{
  value: ```值```
  writable:false  ```可写```
  enumerable:false ```不可迭代```
  get:function(){

  },
  set:function(){

  }
})


**Object.getOwnPropertyDescriptor**
获取某个对象的某个属性的属性描述符对象(该属性必须直接属于该对象)