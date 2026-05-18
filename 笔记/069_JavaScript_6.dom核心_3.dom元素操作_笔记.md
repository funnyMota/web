# dom元素操作

## 元素条件

元素事件: 某个元素发生一件事

事件处理程序

## 获取和设置元素属性

- 通用方式：getAttribute、setAttribute

### 可识别属性

正常的HTML属性
- dom对象.属性名:推荐
细节
1. 正常的属性即使没有复制,也有默认值
2. 布尔属性在dom对象中,得到的是boolean
3. 某些表单元素可以获取某些不存在的属性
4. 某些属性与标识符冲突,此时,需要更改属性名


### 自定义属性

HTML5建议自定义属性使用```data-```作为前缀

如果遵从HTML5,自定义属性规范,可以使用```dom对象.dataset.属性名```控制属性

删除自定义属性
- removeAttribute()
- delete dom.dataset.属性名

## 获取和设置元素内容

- innerHTML: 获取和设置元素内部的html文本
- innerText: 获取和设置元素内部的纯文本,
innerText得到的是元素内部显示的文本
- textContent:   获取和设置元素内部的纯文本,
textContent得到的是内部所有的文本

## 元素结构重构

- 父元素.appendChild(元素):在某个元素末尾加入一个元素
- 父元素.insertBefore(插入元素,哪个元素之前):在那个元素之前插入元素 
- 父元素.replaceChild(替换的元素,被替换的元素)

细节:
更改元素后,效率较低

## 创建和删除元素

### 创建元素

- document.createElement("元素名") 创建元素对象
 - document.createTextNode("文本") 创建文本节点 
 - document.createDocumentFragment() 创建文本片段

### 克隆元素

- dom对象.cloneNode(是否深度克隆) 复制一个新的dom对象并返回

> childNodes也是实时集合

### 删除元素

- removeChild 父元素调用,传入子元素
- remove 把自己删除

**this关键字在事件处理程序中指代当前发生的元素**

# dom元素样式

## 控制dom元素的类样式

- className: 获取或设置元素的类名
- classList: dom4的新属性,是用一个控制元素类名的对象
  - add:添加一个类名
  - remove:移除一个类名
  - contains:判断一个类名是否存在
  - toggle:添加/移除一个类名

## 获取样式

**CSS的短横线命名,需要转换为小驼峰命名**

- dom.style:得到**行内样式**对象
- window.getComputedStyle(dom元素):得到某个元素最终计算的样式 
  - 可以有第二个参数,用于得到某个元素的某个伪元素样式

## 设置样式

dom.style.样式名 = 值

## 设置样式