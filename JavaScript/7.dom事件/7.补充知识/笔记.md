# 元素位置

- offsetParent

获取某个元素第一个定位的祖先元素,如果没有,则得到body

body的offsetParent为null

- offsetLeft、offsetTop

相对于该元素offsetParent的坐标

如果offsetParent是body,则将其当作是整个网页

- getBoundingClientRect

该方法得到一个对象,该对象记录了元素相对于视口的距离

# 事件模拟
- click
- submit
- dispatchEvent

# 其他补充
window.scrollX\window.pageXOffset
window.scrollY\window.pageYOffset

- scrollTo、scrollBy
- resizeTo、resizeBy