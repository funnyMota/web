# 鼠标事件

## 事件类型

- click: 用户单击鼠标按钮事件
- dbclick: 用户双击鼠标事件
- mousedown: 用户按下鼠标
- mouseup: 用户抬起鼠标
- mousemove: 鼠标元素移动

- mouseover: 鼠标进入元素
- mouseout: 鼠标离开元素
- mouseenter: 鼠标进入元素,不会触发冒泡
- mouseleave:鼠标离开元素,不会触发冒泡

区别:

- over和out,不考虑子元素,从父元素移动到子元素,对父元素而已,仍然算作离开

- enter和leave,考虑子元素,子元素仍然是父元素的已不复

- mouseenter和mouseleave不会冒泡


## 事件对象

所有的鼠标事件，事件处理程序中的时间对象，都称为MouseEvent

- altKey: 触发事件时是否按下alt键
- ctrlKey: 触发事件时是否按下ctrl键
- shiftKey: 触发事件时是否按下shift键
- button: 触发事件时,按下的鼠标按键类型
 - 0:左键
 - 1:中建
 - 2:右键

 位置:

 - page: pageX、pageY 当前鼠标距离页面的横纵坐标
 - client: clientX、clientY 鼠标相对于视口的坐标
 - offset: offsetX、offsetY 鼠标相对于事件源内边距的坐标
 - screen: screenX、screenY 鼠标相对于屏幕
 - x、y,等同于clientX、clientY
 - movement: movementX、movementY 只在鼠标移动时间中有效,相对于上一次鼠标的位置,偏移的距离
