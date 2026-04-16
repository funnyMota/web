# 获取dom节点

获取dom对象

> 全局对象,有个叫document的属性，代表的是整个文档节点

## 旧的获取元素节点的方式

- document.body:获取body元素节点
- document.head:获取head元素节点
- document.links:获取页面上所有的超链接元素节点,类数组
- document.anchors:获取页面上所有的锚链接元素节点
- document.forms:获取页面中所有form元素节点

## 新的获取元素节点的方式

### 通过方法获取

- document.getElementById：通过id获取对应的元素
- document.getElementByClassName: 通过类名获取对应的元素,IE9以下无效
- document.getElementByTagName：通过元素名获取对应的元素
- document.getElementByName：通过元素Name属性值获取对应的元素
- document.querySelector: 通过CSS选择器获取元素,得到匹配的第一个,IE8无效
- document.querySelectorAll：通过CSS选择器获取元素,得到所有的,IE8无效

细节:

1. 在所有的得到类数组的方法中，除了querySelectorAll,其他的方法都是实时更新的
2. getElementById得到元素执行效率最高  
3. 书写了id的元素,会自动称为window对象的属性。它是一个实时的单对象。事实上的标准,不推荐使用。
4. getElementByTagName、getElementByClassName、querySelector、querySelectorAll：可以作为其他元素节点的方法使用


### 根据节点关系获取节点

- parentNode：获取父节点
- childNodes: 获取子节点
- firstChild：获取第一个子节点
- lastChild：获取最后一个子节点
- previousSibling：上一个兄弟节点
- nextSibling：下一个兄弟节点
- attributes：获取某个元素的属性节点


获取元素节点
- parentELement:获取父元素
- children：获取子元素
- previousElementSibing:获取上一个兄弟元素
- nextElementSibing：获取下一个兄弟元素
- firstElementChild：获取第一个子元素
- lastElementChild：获取最后一个子元素

## 获取节点信息

- nodeName：获取节点名称
- nodeValue：获取节点的值
- nodeType: 获取节点类型,是一个数字
