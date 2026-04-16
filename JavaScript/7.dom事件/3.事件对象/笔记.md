# 事件对象

事件对象封装了事件的相关信息

## 获取时间对象

- 通过事件处理函数的参数
- 旧版本的IE浏览器通过window.event获取



## 事件对象的通用成员

- target & srcElement

事件目标(事件源)

事件委托: 通过给祖先元素注册事件,在事件处理程序中判断事件源进行不同的处理

通常,事件委托用于动态生成元素的区域

- currentTarget

当前目标: 获取绑定事件的元素,等效于this

- type

字符串:得到事件的类型

- preventDefault & returnValue

阻止浏览器默认行为

- stopPropagation

阻止事件冒泡

- eventPhase

得到事件所处的阶段

1. 事件捕获
2. 事件目标
3. 事件冒泡